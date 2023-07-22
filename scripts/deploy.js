//const { ethers } = require("hardhat");
const hre = require("hardhat");

async function Usermain() {

  const lock = await hre.ethers.deployContract("userdata");

  await lock.waitForDeployment();

  console.log(
    `user deployed to ${lock.target}`
  );
}


async function Vote() {
  const voters = [
    "Indian National Congress",
    "Bharatiya Janata Party",
    "Dravida Munnetra Kazhagam",
    "Communist Party of India",
    "All India Anna Dravida Munnetra Kazhagam",
    "Desiya Murpokku Dravida Kazhagam",
    "Viduthalai Chiruthaigal Katchi",
    "Naam Tamilar",
    "Indian Union Muslim League"
  ];

  const Voting = await hre.ethers.deployContract("Voting");
  await Voting.waitForDeployment([...voters]);
  console.log(`Voting deployed to ${Voting.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
async function main() {
  try {
    await Usermain();
    // await Vote();
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
}

Usermain().catch((e)=>console.log(e));
Vote().catch((e)=>console.log(e));