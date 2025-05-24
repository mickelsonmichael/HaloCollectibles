"""
Utility script for converting the multiple achievement, terminal,
skull, and data pad files into single files for each category.

This should only need to be done once when converting from the
legacy version of the site before it was changed to use Next.JS
"""

import os
from pathlib import Path
import json

achievements = []
terminals = []
skulls = []

script_path = Path(os.path.realpath(__file__))

data_path = script_path.parent.parent / "src" / "public" / "data"

game_title_display = {
    "general": "General",
    "halo1": "Halo 1",
    "halo2": "Halo 2",
    "halo3": "Halo 3",
    "halo4": "Halo 4",
    "odst": "Halo: ODST",
    "reach": "Halo: Reach"
}

for json_file in data_path.rglob("**/*.json"):
    if json_file.parent.name == "data":
        # skip files in the root directory (the result files)
        continue

    with open(json_file, "r", encoding="utf-8") as f:
        json_data = json.load(f)

    if "achievements" in json_file.name:
        achievements += [
            {
                **achievement,
                "collection": data["title"],
                "game": game_title_display[json_file.parent.name]
            }
            for data in json_data
            for achievement in data["achievements"]
        ]

        
    if "terminals" in json_file.name:
        terminals += [
            {**data, "game": json_file.parent.name}
            for data in json_data
        ]

    if "skulls" in json_file.name:
        skulls += [
            {**data, "game": json_file.parent.name}
            for data in json_data
        ]

achievement_output_file_path = data_path / "achievements.json"

with open(achievement_output_file_path, "w", encoding="utf-8") as output:
    json.dump(achievements, output)

terminals_output_file_path = data_path / "terminals.json"

with open(terminals_output_file_path, "w", encoding="utf-8") as output:
    json.dump(terminals, output)

skulls_output_file_path = data_path / "skulls.json"

with open(skulls_output_file_path, "w", encoding="utf-8") as output:
    json.dump(skulls, output)
