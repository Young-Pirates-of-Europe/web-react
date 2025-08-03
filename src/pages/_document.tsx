import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <title>Young Pirates of Europe</title>
            <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.ico`}/>
            <meta
                name="description"
                content="Young Pirates of Europe brings together political youth organisations in Europe focused on digital rights, transparency, democracy, and civil liberties."
            />
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="canonical" href="https://young-pirates.eu/"/>

            {/* Open Graph */}
            <meta property="og:title" content="Young Pirates of Europe"/>
            <meta property="og:description"
                  content="An association uniting pirate youth organisations in Europe pushing for digital rights, transparency, anti-corruption, and democracy."/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://young-pirates.eu/"/>
            <meta property="og:image" content="https://young-pirates.eu/general/YPE.png"/>

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="Young Pirates of Europe"/>
            <meta name="twitter:description"
                  content="Uniting pirate youth across Europe for transparency, democracy, and digital rights."/>
            <meta name="twitter:image" content="https://young-pirates.eu/general/YPE.png"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
    </Html>
  );
}
