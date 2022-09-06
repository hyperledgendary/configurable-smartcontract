/*
 * SPDX-License-Identifier: Apache-2.0
 */


import { Context, Contract, Info, Returns, Transaction } from 'fabric-contract-api';
import { KeyEndorsementPolicy } from 'fabric-shim';

const utf8Decoder = new TextDecoder();

@Info({title: 'Blueprint', description: 'Smart contract for trading assets'})
export class BlueprintContract extends Contract {
    /**
     * CreateAsset issues a new asset to the world state with given details.
     */
    @Transaction()
    async Configuration(ctx: Context, assetJson: string): Promise<void> {

    }

}