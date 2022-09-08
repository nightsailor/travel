import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="title" content="Voyager" />
          <meta name="author" content="Mohammed Talha" />
          <meta name="keywords" content="Travel, Voyager" />
          <meta name="description" content="Travel app" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="preconnect"
            href="https://i.ibb.co/"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
