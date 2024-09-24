import json

with open("bsiglobalmasstimberdatabase_dataset.json", "r") as f:
    data = json.load(f)

def get_unique_values(array):
    return list(set(array))

function_values = [obj["function"] for obj in data]
status_values = [obj["status"] for obj in data]

unique_function_values = get_unique_values(function_values)
unique_status_values = get_unique_values(status_values)

print("Unique function values:")
print(unique_function_values)

print("\nUnique status values:")
print(unique_status_values)

