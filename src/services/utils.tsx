import { NetworkId } from "@alephium/web3";
import { Mixico } from "artifacts/ts";
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
  const groupIndex = mixico.groupIndex
  const tokenMixIcoAddress = mixico.address //.address
  const MixIcoId = mixico.contractId //.contractId
  const mixtoken = "4e0eb20afb173cd534ae29acd013861115482c1e3d8ed626294bbe1008a3f900"
  const price = "125000000"
  return { network, groupIndex, tokenMixIcoAddress, MixIcoId, mixtoken, price }
}

export const mixicoconfig = getMixIcoConfig()
