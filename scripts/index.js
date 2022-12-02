// scripts/index.js
async function main () {
    const accounts = await ethers.provider.listAccounts();
    console.log(accounts)
    const address = '0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44';
    const Patricoin = await ethers.getContractFactory('Patricoin');
    const token = await Patricoin.attach(address);
    const value = await token.balanceOf("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266");
    console.log(value.toString())
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
  });