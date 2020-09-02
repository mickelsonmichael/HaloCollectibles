import { fetchXuid } from "./LoginApi";

export default class Account {
  gamertag;
  xuid = null;
  achievements = [];
  lastUpdate = null;

  constructor(gamertag, xuid) {
    this.gamertag = gamertag;
    this.xuid = xuid;
  }

  isDataExpired = () => {
    const hour = 1000 * 60 * 60; // one hour in ms

    return Date.now() - hour > this.lastUpdate;
  };

  static restore(cachedObject) {
    var account = new Account(cachedObject.gamertag, cachedObject.xuid);

    account.lastUpdate = cachedObject.lastUpdate;
    account.achievements = cachedObject.achievements;

    return account;
  }

  static async createAsync(gamertag) {
    const xuid = await fetchXuid(gamertag);

    return new Account(gamertag, xuid);
  }
}
