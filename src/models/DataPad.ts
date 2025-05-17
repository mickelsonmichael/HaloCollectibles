import Game from "@/models/Game";

interface DataPad {
    id: number;
    level: string;
    location: string;
    isLegendary: true;
    video: string;
    game: Game;
    achievement: string;
}

export default DataPad;
