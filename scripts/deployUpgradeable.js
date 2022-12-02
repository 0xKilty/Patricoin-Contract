const { ethers, upgrades } = require('hardhat');

async function main () {
  const Patricoin = await ethers.getContractFactory('Patricoin');
  console.log('Deploying Patricoin...');
  const token = await upgrades.deployProxy(Patricoin, [[]], { initializer: 'initialize' });
  await token.deployed();
  console.log('Patricoin deployed to:', token.address);
}

main();