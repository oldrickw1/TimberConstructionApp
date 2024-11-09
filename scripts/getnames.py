import json
import sys

# Function to generate JavaScript code
def extract_names(data):
    names = ""
    for i, item in enumerate(data):
        name = item['name'].replace(' ', '_').lower()
        names += name + "\n"
    return names

# Check if correct number of arguments are passed
if len(sys.argv) != 3:
    print("Usage: python script_name.py <input_file> <output_file>")
    sys.exit(1)

# Get the input and output file paths from command-line arguments
input_file = sys.argv[1]
output_file = sys.argv[2]

# Load the JSON data from the input file
with open(input_file, 'r') as file:
    data = json.load(file)

# Extract the names from the data
names = extract_names(data)

# Save the extracted names to the output file
with open(output_file, 'w') as file:
    file.write(names)

print(f"Names have been extracted and saved to '{output_file}'.")
