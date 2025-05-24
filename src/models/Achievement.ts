import Game from "@/models/Game";

interface Achievement {
    name: string;
    score: number;
    description: string;
    collection: string;
    game: Game;
    url: string;
}

export default Achievement;
