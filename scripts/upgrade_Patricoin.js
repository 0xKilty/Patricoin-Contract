const { ethers, upgrades } = require('hardhat');

async function main () {
  const NewPatricoin = await ethers.getContractFactory('NewPatricoin');
  console.log('Upgrading Patricoin...');
  await upgrades.upgradeProxy('0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0', NewPatricoin);
  console.log('Patricoin upgraded');
}

// npx hardhat run --network localhost scripts/upgrade_box.js

main();