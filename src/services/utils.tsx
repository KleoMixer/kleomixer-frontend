import { NetworkId } from "@alephium/web3";
import { loadDeployments } from "artifacts/ts/deployments";
//import { loadDeployments } from "../../artifacts/ts/deployments"

export interface MixIco {
  network: NetworkId
  groupIndex: number
  tokenMixIcoAddress: string
  MixIcoId: string
  mixtoken: string 
  price: string
}


function getNetwork(): NetworkId {
  const network = (process.env.NEXT_PUBLIC_NETWORK ?? 'devnet') as NetworkId
  return network
}

function getMixIcoConfig(): MixIco {
  const network = getNetwork()
  const mixico = loadDeployments(network).contracts.Mixico.contractInstance
  const groupIndex = 1 //tokenFaucet.groupIndex
  const tokenMixIcoAddress = mixico.address //.address
  const MixIcoId = mixico.contractId //.contractId
  const mixtoken = "84e8b52e59c04c8a563fcce9b4a040e6a682b8d9466c1e55ac9b8938bad87901"
  const price = "125000000"
  return { network, groupIndex, tokenMixIcoAddress, MixIcoId, mixtoken, price }
}

export const mixicoconfig = getMixIcoConfig()
