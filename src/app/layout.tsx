import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Halo MCC Collectibles",
  description:
    "Site for tracking the Halo Master Chief Collection achievements, skulls, and more.",
};

type LayoutProps = Readonly<{
  children: ReactNode;
}>;

const RootLayout = ({ children }: LayoutProps) => {

  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex flex-col">
          <Navigation />
          <main className="py-4 px-4 md:px-8">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
