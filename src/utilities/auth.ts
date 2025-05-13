import { RelyingParty } from "openid";

const steamOpenIdProvider = "https://steamcommunity.com/openid";

const authClient = new RelyingParty(
    process.env.CALLBACK_URL ?? "",
    null,
    true,
    false,
    []
);

export { steamOpenIdProvider, authClient };
