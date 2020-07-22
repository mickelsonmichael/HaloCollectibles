const haloAchievements = "HALO_ACHIEVEMENTS";
const gamertagName = "GAMERTAG";

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
