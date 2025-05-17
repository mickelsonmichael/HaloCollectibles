import Game from "@/models/Game";

interface Skull {
    name: string;
    level: string;
    difficulty: "Legendary" | "Heroic" | "Normal" | "Easy" | "Any";
    location: string;
    video: string;
    game: Game;
}

export default Skull;
