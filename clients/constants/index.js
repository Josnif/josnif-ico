import NFTCollections from './NFTCollections.json';
import JosnifToken from './JosnifToken.json'

export const NFT_CONTRACT_ABI = NFTCollections.abi;
export const NFT_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS;
export const TOKEN_CONTRACT_ABI = JosnifToken.abi;
export const TOKEN_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;