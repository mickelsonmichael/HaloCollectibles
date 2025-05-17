import { RelyingParty } from "openid";

import { PUBLIC_URL } from "@/utilities/variables";

const steamOpenIdProvider = "https://steamcommunity.com/openid";

const CALLBACK_URL = `${PUBLIC_URL}/api/auth/callback`;

const authClient = new RelyingParty(
    CALLBACK_URL,
    null,
    true,
    false,
    []
);

export { steamOpenIdProvider, authClient };
