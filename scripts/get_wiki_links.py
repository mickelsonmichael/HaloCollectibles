import json
import os
from pathlib import Path
from urllib.error import HTTPError
from urllib.parse import quote
from urllib.request import urlopen


WIKI_BASE_URL = "https://www.halopedia.org"

this_script = Path(os.path.realpath(__file__))

target_file = this_script.parent.parent / "public" / "data" / "achievements.json"

assert target_file.exists(), f"Unable to find file {target_file}"

with open(target_file, "r", encoding="utf-8") as file:
    achievements = json.load(file)

assert achievements, "Unable to load the achievements"

updated_results = []
missing = []

manual_replacements = {
    "Skulltaker Halo 2: That's Just…Wrong": "Skulltaker_Halo_2:_That's_Just..._Wrong",
    "Brainpan": "Vidmaster_Challenge:_Brainpan",
    "Well...Maybe One or Two": "Well..._Maybe_One_or_Two",
    "Folks Need Heroes…": "Folks_Need_Heroes..."
}

print(f"Checking {len(achievements)} achievements...")

for achievement in achievements:
    original_name: str = achievement["name"]

    formatted_name: str = (
        quote(original_name.replace(" ", "_"))
        if original_name not in manual_replacements
        else manual_replacements[original_name]
    )

    url = f"{WIKI_BASE_URL}/{formatted_name}"

    try:
        response = urlopen(url)

        achievement["url"] = url
    except HTTPError as httpErr:
        print(f"Error fetching '{original_name}' from '{formatted_name}': {httpErr.status}")
        missing += [original_name]

if missing:
    print("There were errored achievements, see above.")
else:
    with open(target_file, "w", encoding="utf-8") as file:
        json.dump(achievements, file)
    print("Success!")
