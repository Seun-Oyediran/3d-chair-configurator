import type { Metadata, Viewport } from "next";
import "../../public/scss/main.scss";
import Provider from "@/state/provider";
import { Loader } from "@react-three/drei";

const title = "Chair Configurator";
const description =
  "Design your perfect chair in real-time with our 3D configurator. Customize colors, materials, and finishes to match your style.";

export const metadata: Metadata = {
  title,
  description,
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

          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="2400" />
          <meta property="og:image:height" content="1260" />
          <meta
            property="og:image"
            content="/favicon/opengraph-image.png"
          ></meta>

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta property="twitter:image:type" content="image/png" />
          <meta property="twitter:image:width" content="2400" />
          <meta property="twitter:image:height" content="1260" />

          <meta
            name="twitter:image"
            content="/favicon/twitter-image.png"
          ></meta>
        </head>
        <body>{children}</body>
      </html>
    </Provider>
  );
}
