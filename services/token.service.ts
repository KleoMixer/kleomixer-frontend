import { DUST_AMOUNT, ExecuteScriptResult, SignerProvider, ALPH_TOKEN_ID, web3, ONE_ALPH } from '@alephium/web3'
import { Addmix } from 'artifacts/ts'
import { Withdrawalph } from 'artifacts/ts'
import { DestroyMix } from 'artifacts/ts'
import { Buymix } from 'artifacts/ts'
import { mixicoconfig } from './utils'

// MIX ICO SERVICES

export const topupmix = async (
    signerProvider: SignerProvider,                                // Signed Amount
    amount: string,                                                               
  ): Promise<ExecuteScriptResult> => {
    return await Addmix.execute(signerProvider, {
      initialFields: {
        contract: mixicoconfig.MixIcoId,                           // The contract
        amount: BigInt(amount)                                     // The amount
      },
      attoAlphAmount: DUST_AMOUNT,
      tokens: [{id: mixicoconfig.mixtoken, amount: amount}]        // Asset in Wallet
    })
  }
  
  export const buy = async (
    signerProvider: SignerProvider,
    amount: string,
    tokenId: string
  ): Promise<ExecuteScriptResult> => {
    return await Buymix.execute(signerProvider, {
      initialFields: {
        contract: mixicoconfig.MixIcoId,
        amount: BigInt(amount)
      },
      attoAlphAmount: DUST_AMOUNT,
      tokens: [{id: ALPH_TOKEN_ID, amount: (Number(amount) *  Number(mixicoconfig.price)).toString() }]
    })
  }

  export const withdraw = async (
    signerProvider: SignerProvider,
    amount: string,
    tokenId: string
  ): Promise<ExecuteScriptResult> => {
    return await Withdrawalph.execute(signerProvider, {
      initialFields: {
        contract: mixicoconfig.MixIcoId
      },
      attoAlphAmount: DUST_AMOUNT,
                                                    
    })
  }

  export const destroycontract = async (
    signerProvider: SignerProvider,
    amount: string,
    tokenId: string
  ): Promise<ExecuteScriptResult> => {
    return await DestroyMix.execute(signerProvider, {
      initialFields: {
        contract: mixicoconfig.MixIcoId
      },
      attoAlphAmount: DUST_AMOUNT,
                                                    
    })
  }
  
// STAKE SERVICES

import { AddReward, DestroyStake, StakeTest, StakeThree, StakeSix, StakeNine, StakeOneYear } from 'artifacts/ts' 
import { stakeconfig } from './utils'

export const serviceaddreward = async (
  signerProvider: SignerProvider,
  amount: string
): Promise<ExecuteScriptResult> => {
  return await AddReward.execute(signerProvider, {
    initialFields: {
      contract: stakeconfig.MixStakeId,
      amount: BigInt(amount)
    },
    attoAlphAmount: DUST_AMOUNT,
    tokens: [{id: stakeconfig.mixtoken, amount: amount }]                                          
  })
}

export const serviceteststake = async (
  signerProvider: SignerProvider,
  amount: string
): Promise<ExecuteScriptResult> => {
  return await StakeTest.execute(signerProvider, {
    initialFields: {
      contract: stakeconfig.MixStakeId,
      amount: BigInt(amount)
    },
    attoAlphAmount: DUST_AMOUNT + ONE_ALPH,
    tokens: [{id: stakeconfig.mixtoken, amount: amount }]                                          
  })
}

export const serviceoneyear = async (
  signerProvider: SignerProvider,
  amount: string
): Promise<ExecuteScriptResult> => {
  return await StakeOneYear.execute(signerProvider, {
    initialFields: {
      contract: stakeconfig.MixStakeId,
      amount: BigInt(amount)
    },
    attoAlphAmount: DUST_AMOUNT + ONE_ALPH,
    tokens: [{id: stakeconfig.mixtoken, amount: amount }]                                          
  })
}

export const servicethree = async (
  signerProvider: SignerProvider,
  amount: string
): Promise<ExecuteScriptResult> => {
  return await StakeThree.execute(signerProvider, {
    initialFields: {
      contract: stakeconfig.MixStakeId,
      amount: BigInt(amount)
    },
    attoAlphAmount: DUST_AMOUNT + ONE_ALPH,
    tokens: [{id: stakeconfig.mixtoken, amount: amount }]                                          
  })
}

export const servicesix = async (
  signerProvider: SignerProvider,
  amount: string
): Promise<ExecuteScriptResult> => {
  return await StakeSix.execute(signerProvider, {
    initialFields: {
      contract: stakeconfig.MixStakeId,
      amount: BigInt(amount)
    },
    attoAlphAmount: DUST_AMOUNT + ONE_ALPH,
    tokens: [{id: stakeconfig.mixtoken, amount: amount }]                                          
  })
}

export const servicenine = async (
  signerProvider: SignerProvider,
  amount: string
): Promise<ExecuteScriptResult> => {
  return await StakeNine.execute(signerProvider, {
    initialFields: {
      contract: stakeconfig.MixStakeId,
      amount: BigInt(amount)
    },
    attoAlphAmount: DUST_AMOUNT + ONE_ALPH,
    tokens: [{id: stakeconfig.mixtoken, amount: amount }]                                          
  })
}

export const servicedestroystake = async (
  signerProvider: SignerProvider,
): Promise<ExecuteScriptResult> => {
  return await DestroyStake.execute(signerProvider, {
    initialFields: {
      contract: stakeconfig.MixStakeId
    },
    attoAlphAmount: DUST_AMOUNT                                 
  })
}

// REWARDS CONTRACT

import { ClaimReward } from 'artifacts/ts'

export const serviceclaimreward = async (
  signerProvider: SignerProvider,
  contractfound: string
): Promise<ExecuteScriptResult> => {
  return await ClaimReward.execute(signerProvider, {
    initialFields: {
      contract: contractfound // query node for contract
    },
    attoAlphAmount: DUST_AMOUNT                                 
  })
}