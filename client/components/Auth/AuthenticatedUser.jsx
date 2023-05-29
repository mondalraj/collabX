"use client";

import { NFT_CONTRACT_ADDRESS } from "@/constants";
import { useAddress, useContract, useNFTBalance } from "@thirdweb-dev/react";
import { useEffect } from "react";

const tokenId = 0;

const AuthenticatedUser = () => {
  const address = useAddress();

  const { contract: editionDrop } = useContract(NFT_CONTRACT_ADDRESS);

  const { data: NFTBalance, isLoading } = useNFTBalance(
    editionDrop,
    address,
    tokenId
  );

  useEffect(() => {
    if (!(Number(NFTBalance) > 0) && !isLoading) {
      window.location.href = "/";
    }
  }, [NFTBalance, isLoading]);

  return <></>;
};

export default AuthenticatedUser;
