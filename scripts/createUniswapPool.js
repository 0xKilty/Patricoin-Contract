const { ethers } = require('ethers')
const axios = require('axios')
require('dotenv').config()

const UNISWAP_V3_FACTORY_ADDRESS = "0x1F98431c8aD98523631AE4a59f267346ea31F984"

const GOERLI_PROVIDER = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_URL)
const WALLET_ADDRESS = process.env.WALLET_ADDRESS
const WALLET_SECRET = process.env.WALLET_SECRET
const PATRICOIN_ADDRESS = "0x9A25b7bF9eD66B338f67C75A081D57fd10eb0ad5"

const wallet = new ethers.Wallet(WALLET_SECRET)
const connectedWallet = wallet.connect(GOERLI_PROVIDER)

async function main() {
    const apiKey = ""
    const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${UNISWAP_V3_FACTORY_ADDRESS}&apikey=${apiKey}`
    const res = await axios.get(url)
    const abi = JSON.parse(res.data.result)
    const factoryContract = new ethers.Contract(
        UNISWAP_V3_FACTORY_ADDRESS,
        abi,
        GOERLI_PROVIDER
    )

    const tx = await factoryContract.connect(connectedWallet).createPool(
        PATRICOIN_ADDRESS,
        500
    )
    const receipt = await tx.wait()
    console.log(receipt)

    const poolAddress = await factoryContract.getPool(
        PATRICOIN_ADDRESS,
        500
    )

    console.log(poolAddress)
}

main()
 