import { Html, Head, Main, NextScript } from 'next/document';
// import { Script } from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet='utf-8' />
        {/* <script async src=""></script>
        <Script dangerouslySetInnerHTML={ __html: ``}/> */}
      </Head>
      <body>
        <Head />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
