const key = "HALO_COLLECTIBLES_LOGIN";

export const initialState = {
  accounts: [],
  showCompleted: false,
  isLoading: false,
};

export const getCurrentStored = () => {
  const storedValue = localStorage.getItem(key);

  if (storedValue) {
    return JSON.parse(storedValue);
  } else {
    return initialState;
  }
};

export const setCurrentStored = (state) =>
  localStorage.setItem(key, JSON.stringify(state));

export const clearCurrentStored = () => localStorage.removeItem(key);
