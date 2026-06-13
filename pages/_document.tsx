import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="apple-touch-icon" href="/favicon.svg" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="theme-color" content="#8b5cf6" />
          <meta name="color-scheme" content="dark" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="TempMail" />
          <meta property="og:image" content="/og-image.svg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="/og-image.svg" />
          <meta name="application-name" content="TempMail" />
          <meta name="msapplication-TileColor" content="#8b5cf6" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
