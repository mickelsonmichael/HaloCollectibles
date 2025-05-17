import Game from "@/models/Game";

interface Terminal {
    id: number;
    level: string;
    location: string;
    video: string;
    game: Game;
    achievement: string;
}

export default Terminal;
