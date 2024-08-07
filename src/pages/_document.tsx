import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="네모그램" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
