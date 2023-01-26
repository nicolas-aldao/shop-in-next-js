import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <script async src=""></script>
        <script dangerouslySetInnerHTML={ __html: ``}/> */}
      </Head>
      <body>
        <Head />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
