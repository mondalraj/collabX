import "@/styles/globals.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Head from "next/head";

const activeChainId = ChainId.Mumbai;

export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={activeChainId}>
      <Head>
        <title>CollabX</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Decentralized Community for finding teammates/co-founder for your next project."
        />
        <meta
          name="keywords"
          content="Thirdweb, thirdweb Edition drop, nft, community, hustlers, polygon, blockchain"
        />
      </Head>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
