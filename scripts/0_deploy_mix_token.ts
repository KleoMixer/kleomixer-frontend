import { Deployer, DeployFunction, Network } from '@alephium/cli'
import { Settings } from '../alephium.config'
import { MixToken } from '../artifacts/ts'

// This deploy function will be called by cli deployment tool automatically
// Note that deployment scripts should prefixed with numbers (starting from 0)
const deployFaucet: DeployFunction<Settings> = async (
  deployer: Deployer,
  network: Network<Settings>
): Promise<void> => {
  // Get settings
  const issueTokenAmount = network.settings.issueTokenAmount
  const result = await deployer.deployContract(MixToken, {
    // The amount of token to be issued
    issueTokenAmount: issueTokenAmount,
    // The initial states of the faucet contract
    initialFields: {
      symbol: Buffer.from('TF', 'utf8').toString('hex'),
      name: Buffer.from('TokenFaucet', 'utf8').toString('hex'),
      decimals: 0n,
      supply: 10000000n,
      balance: 10000000n,
      atloti: "1EgpiwGXZd7Mvq4MF8zWJVF436aBBkhFc8pv1Sxs2QjK2",
      o: "",                                                      // fetch addresses
      baek: ""                                                    // fetch addresses
    }
  })
  console.log('Mix token contract id: ' + result.contractInstance.contractId)
  console.log('Mix token contract address: ' + result.contractInstance.address)
}

export default deployFaucet
