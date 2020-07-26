const haloAchievements = "HALO_ACHIEVEMENTS";
const gamertagName = "GAMERTAG";
const showCompleted = "SHOW_COMPLETED";

export const setAchievements = (gamertag, achievements) => {
  localStorage.setItem(gamertagName, gamertag);
  localStorage.setItem(haloAchievements, JSON.stringify(achievements));
};

export const getAchievements = () => {
  const str = localStorage.getItem(haloAchievements);

  return str ? JSON.parse(str) : [];
};

export const getGamertag = () => localStorage.getItem(gamertagName);

export const clearSession = () => {
  localStorage.removeItem(haloAchievements);
  localStorage.removeItem(gamertagName);
};

export const showComplete = () => localStorage.getItem(showComplete) === "true";

export const toggleComplete = () => {
  const current = localStorage.getItem(showCompleted);

  if (current === "true") {
    localStorage.setItem(showCompleted, "false");
  } else {
    localStorage.setItem(showCompleted, "true");
  }
};
