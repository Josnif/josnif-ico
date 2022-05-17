const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

const main = async () => {
    const josnifNFTContract = process.env.JOSNIFNFT_CONTRACT_ADDRESS;

    const josnifTokenContract = await ethers.getContractFactory("JosnifToken");

    const deployedJosnifTokenContract = await josnifTokenContract.deploy(josnifNFTContract);

    console.log("Josnif Token Contract Adddress:", deployedJosnifTokenContract.address);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
