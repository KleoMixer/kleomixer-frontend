import { NetworkId } from "@alephium/web3";
import { Mixico, Stake } from "artifacts/ts";
import { loadDeployments } from "artifacts/ts/deployments";

export interface MixIco {
  network: NetworkId
  groupIndex: number
  tokenMixIcoAddress: string
  MixIcoId: string
  mixtoken: string 
  price: string
}

export interface Stake {
  network: NetworkId
  groupIndex: number
  StakeAddress: string
  MixStakeId: string
  mixtoken: string
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

function getStakeConfig(): Stake {
  const network = getNetwork()
  //const stake = loadDeployments(network).contracts.Stake.contractInstance
  const groupIndex = 0
  const StakeAddress = "xCAyxSTzc8xYFnoWsifb6QCURDN5CTEmqpnHhiVAiFL3"
  const MixStakeId = "340f74df1f6deb36812c63bf12c744f567e6a96e6668cdb446b46a6bf3338200"
  const mixtoken = "4e0eb20afb173cd534ae29acd013861115482c1e3d8ed626294bbe1008a3f900"
  return { network, groupIndex, StakeAddress, MixStakeId, mixtoken}
}

export const mixicoconfig = getMixIcoConfig()
export const stakeconfig = getStakeConfig()
