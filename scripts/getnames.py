import json

# Load the JSON data from a file
with open('bsiglobalmasstimberdatabase_dataset.json', 'r') as file:
    data = json.load(file)

# Function to generate JavaScript code
def extract_names(data):
    names = ""
    for i, item in enumerate(data):
        name = item['name'].replace(' ', '_').lower()  
        names += name + "\n";
    return names;

names = extract_names(data)

# Save the JavaScript code to a file
with open('names.txt', 'w') as file:
    file.write(names)

print("Names have been extracted and saved to 'names.txt'.")
