import {
  ConnectWallet,
  Web3Button,
  useAddress,
  useContract,
  useNFT,
  useNFTBalance,
} from "@thirdweb-dev/react";
import Link from "next/link";

const tokenId = 0;

const LandingPage = () => {
  const address = useAddress();

  const { contract: editionDrop } = useContract(
    "0x13f7AB181F1371fb1ea1f019e4DC120B26A62033"
  );

  const { data: nft, isLoading, error } = useNFT(editionDrop, tokenId);

  const {
    data: NFTBalance,
    isLoading: isLoadingNFTBalance,
    error: NFTBalanceError,
  } = useNFTBalance(editionDrop, address, tokenId);

  if (isLoading) return <div>Fetching NFT…</div>;
  if (error) return <div>Error fetching NFT</div>;

  return (
    <>
      <div>
        <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
        {Number(NFTBalance) > 0 ? (
          <Link href={"/projectIdeas"}>You owned NFT! Enter CollabX</Link>
        ) : (
          // "Claim your Free NFT to enter CollabX"
          <Web3Button
            contractAddress={editionDrop?.getAddress() || ""}
            action={(cntr) => cntr.erc1155.claim(tokenId, 1)}
            onError={(err) => {
              console.error(err);
              alert("Error claiming NFTs");
            }}
            onSuccess={() => {
              alert("Successfully claimed NFTs");
            }}
          >
            {isLoadingNFTBalance
              ? "Loading..."
              : "Claim your Free NFT to enter CollabX"}
          </Web3Button>
        )}
        {isLoading ? (
          <div>Fetching NFT…</div>
        ) : (
          <div>NFT: {nft.metadata.name}</div>
        )}
        {error && <div>Error fetching NFT</div>}
      </div>
    </>
  );
};

export default LandingPage;
