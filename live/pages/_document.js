import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en" style={{ background: "#110f0d" }}>
      <Head>
        <meta name="theme-color" content="#110f0d" />
      </Head>
      <body style={{ margin: 0, background: "#110f0d" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
