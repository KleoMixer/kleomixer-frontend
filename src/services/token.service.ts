import { DUST_AMOUNT, ExecuteScriptResult, SignerProvider, ALPH_TOKEN_ID } from '@alephium/web3'
import { Addmix } from 'artifacts/ts'
import { Withdrawalph } from 'artifacts/ts'
import { DestroyMix } from 'artifacts/ts'
import { Buymix } from 'artifacts/ts'
import { mixicoconfig } from './utils'

export const topupmix = async (
    signerProvider: SignerProvider,                  // Signed Amount
    amount: string,                                                               
  ): Promise<ExecuteScriptResult> => {
    return await Addmix.execute(signerProvider, {
      initialFields: {
        contract: mixicoconfig.MixIcoId,             // The contract
        amount: BigInt(amount)                       // The amount
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
                                                    // Notice no Asset required here. Means the user doesn't require $PACA.
    })
  }
  
