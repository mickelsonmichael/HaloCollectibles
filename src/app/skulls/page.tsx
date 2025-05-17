"use client";

import dynamic from "next/dynamic";

const ClientOnly = dynamic(() => import("@/components/skulls"), { ssr: false });

const SkullsPage = () => <ClientOnly />;

export default SkullsPage;
