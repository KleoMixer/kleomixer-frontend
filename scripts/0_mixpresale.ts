import { Deployer, DeployFunction, Network } from '@alephium/cli'
import { Settings } from '../alephium.config'
import { Mixico } from '../artifacts/ts'

// This deploy function will be called by cli deployment tool automatically
// Note that deployment scripts should prefixed with numbers (starting from 0)
const deployFaucet: DeployFunction<Settings> = async (
  deployer: Deployer,
  network: Network<Settings>
): Promise<void> => {
  // Get settings
  const issueTokenAmount = network.settings.issueTokenAmount
  const result = await deployer.deployContract(Mixico, {
    // The amount of token to be issued
    issueTokenAmount: issueTokenAmount,
    // The initial states of the faucet contract
    initialFields: {
      tokenId: "4e0eb20afb173cd534ae29acd013861115482c1e3d8ed626294bbe1008a3f900", // MIX ID
      balance: 0n,
      alphbalance: 0n,
      pricemix: 125000000n,                                                        // 0.0125 per $MIX
      owner: "1EgpiwGXZd7Mvq4MF8zWJVF436aBBkhFc8pv1Sxs2QjK2"                       // who can withdraw alph
    }
  })
  console.log('Mix token contract id: ' + result.contractInstance.contractId)
  console.log('Mix token contract address: ' + result.contractInstance.address)
}

export default deployFaucet
