export const fetchXuid = async (gamertag) => {
  var response = await fetch(
    `https://halocollectiblesapi.azurewebsites.net/api/Search?name=${gamertag}`
  );

  if (response.ok) {
    return await response.text();
  }

  throw new Error("Invalid gamertag or unable to fetch the XUID");
};

export const fetchProgress = async (xuid) => {
  const response = await fetch(
    `https://halocollectiblesapi.azurewebsites.net/api/GetHalo?xuid=${xuid}`
  );

  if (response.ok) {
    return await response.json();
  }

  throw new Error("Unable to fetch the achievements");
};
