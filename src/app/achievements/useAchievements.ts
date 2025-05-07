"use client";

import Achievements from "@data/achievements.json";
import { useState } from "react";

enum Game {
    General = "General",
    Halo1 = "Halo 1",
    Halo2 = "Halo 2",
    Halo3 = "Halo 3",
    Halo4 = "Halo 4",
    ODST = "Halo: ODST",
    Reach = "Halo: Reach",
}

interface Achievement {
    name: string;
    score: number;
    description: string;
    collection: string;
    game: Game;
}

const useAchievements = () => {
    const [games, setGames] = useState(Object.values(Game));

    const toggleGame = (game: Game) =>
        setGames((g) =>
            g.includes(game) ? g.filter((x) => x !== game) : [...g, game]
        );

    const enableAllGames = () => setGames(Object.values(Game));

    const disableAllGames = () => setGames([]);

    const filteredAchievements = (Achievements as Achievement[]).filter(a => games.includes(a.game));

    const collections = games.length === 1
        ? [...new Set(Achievements.filter(g => g.game === games[0]).map(g => g.collection))]
        : null;

    return {
        achievements: filteredAchievements,
        collections,
        games,
        toggleGame,
        enableAllGames,
        disableAllGames
    };
};

export { Game };
export default useAchievements;
