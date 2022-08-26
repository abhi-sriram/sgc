import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <meta name="theme-color" content="#fffs" />
          <script
            src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
            async=""
          ></script>
          <script>
            window.OneSignal = window.OneSignal || []; OneSignal.push(function(){' '}
            {OneSignal.init({
              appId: 'c186fbd4-a156-49fc-ac65-201fcce63f7b',
              safari_web_id:
                'web.onesignal.auto.1ee85315-99d2-4859-abe2-d0d2d86b4cd7',
              notifyButton: {
                enable: true,
              },
            })}
            );
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
