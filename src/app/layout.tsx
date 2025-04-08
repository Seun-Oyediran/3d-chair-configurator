import type { Metadata, Viewport } from "next";
import "../../public/scss/main.scss";
import Provider from "@/state/provider";
import { Loader } from "@react-three/drei";

export const metadata: Metadata = {
  title: "Chair Configurator",
  description:
    "Design your perfect chair in real-time with our 3D configurator. Customize colors, materials, and finishes to match your style.",
};

export const viewport: Viewport = {
  minimumScale: 1,
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
      <html lang="en">
        <head>
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/favicon/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/favicon/android-chrome-512x512.png"
          />
          <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />

          <link rel="shortcut icon" href="/favicon/favicon.ico" />
        </head>
        <body>{children}</body>
      </html>
    </Provider>
  );
}
