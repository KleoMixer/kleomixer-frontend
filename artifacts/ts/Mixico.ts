/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
} from "@alephium/web3";
import { default as MixicoContractJson } from "../ico/Mixico.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace MixicoTypes {
  export type Fields = {
    tokenId: HexString;
    balance: bigint;
    alphbalance: bigint;
    pricemix: bigint;
    owner: Address;
  };

  export type State = ContractState<Fields>;

  export type SellEvent = ContractEvent<{
    from: Address;
    amount: bigint;
    balmix: bigint;
  }>;
  export type BuyEvent = ContractEvent<{
    to: Address;
    amount: bigint;
    balalph: bigint;
    balmix: bigint;
  }>;
  export type WithdrawAlphEvent = ContractEvent<{ to: Address }>;
  export type DestoryEvent = ContractEvent<{ who: Address }>;

  export interface CallMethodTable {
    getTokenId: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getPrice: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getAlphBalance: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
}

class Factory extends ContractFactory<MixicoInstance, MixicoTypes.Fields> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as MixicoTypes.Fields;
  }

  eventIndex = { Sell: 0, Buy: 1, WithdrawAlph: 2, Destory: 3 };
  consts = { ErrorCodes: { InvalidCaller: BigInt(3) } };

  at(address: string): MixicoInstance {
    return new MixicoInstance(address);
  }

  tests = {
    getTokenId: async (
      params: Omit<TestContractParams<MixicoTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getTokenId", params);
    },
    getPrice: async (
      params: Omit<TestContractParams<MixicoTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "getPrice", params);
    },
    getAlphBalance: async (
      params: Omit<TestContractParams<MixicoTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "getAlphBalance", params);
    },
    buymix: async (
      params: TestContractParams<MixicoTypes.Fields, { amount: bigint }>
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "buymix", params);
    },
    addmix: async (
      params: TestContractParams<MixicoTypes.Fields, { amount: bigint }>
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "addmix", params);
    },
    removealph: async (
      params: Omit<TestContractParams<MixicoTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "removealph", params);
    },
    destroycontract: async (
      params: Omit<TestContractParams<MixicoTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "destroycontract", params);
    },
  };
}

// Use this object to test and deploy the contract
export const Mixico = new Factory(
  Contract.fromJson(
    MixicoContractJson,
    "",
    "f7c346542ae53ec5de4dbcf07fabf7b18c45f163c4df35ecb823cb79b9fc60b7"
  )
);

// Use this class to interact with the blockchain
export class MixicoInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<MixicoTypes.State> {
    return fetchContractState(Mixico, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeSellEvent(
    options: EventSubscribeOptions<MixicoTypes.SellEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Mixico.contract,
      this,
      options,
      "Sell",
      fromCount
    );
  }

  subscribeBuyEvent(
    options: EventSubscribeOptions<MixicoTypes.BuyEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Mixico.contract,
      this,
      options,
      "Buy",
      fromCount
    );
  }

  subscribeWithdrawAlphEvent(
    options: EventSubscribeOptions<MixicoTypes.WithdrawAlphEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Mixico.contract,
      this,
      options,
      "WithdrawAlph",
      fromCount
    );
  }

  subscribeDestoryEvent(
    options: EventSubscribeOptions<MixicoTypes.DestoryEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Mixico.contract,
      this,
      options,
      "Destory",
      fromCount
    );
  }

  subscribeAllEvents(
    options: EventSubscribeOptions<
      | MixicoTypes.SellEvent
      | MixicoTypes.BuyEvent
      | MixicoTypes.WithdrawAlphEvent
      | MixicoTypes.DestoryEvent
    >,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvents(Mixico.contract, this, options, fromCount);
  }

  methods = {
    getTokenId: async (
      params?: MixicoTypes.CallMethodParams<"getTokenId">
    ): Promise<MixicoTypes.CallMethodResult<"getTokenId">> => {
      return callMethod(
        Mixico,
        this,
        "getTokenId",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getPrice: async (
      params?: MixicoTypes.CallMethodParams<"getPrice">
    ): Promise<MixicoTypes.CallMethodResult<"getPrice">> => {
      return callMethod(
        Mixico,
        this,
        "getPrice",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getAlphBalance: async (
      params?: MixicoTypes.CallMethodParams<"getAlphBalance">
    ): Promise<MixicoTypes.CallMethodResult<"getAlphBalance">> => {
      return callMethod(
        Mixico,
        this,
        "getAlphBalance",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends MixicoTypes.MultiCallParams>(
    calls: Calls
  ): Promise<MixicoTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      Mixico,
      this,
      calls,
      getContractByCodeHash
    )) as MixicoTypes.MultiCallResults<Calls>;
  }
}
