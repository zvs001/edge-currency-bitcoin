// @flow
import type { AbcCurrencyInfo } from 'edge-login'

export const bluecoinInfo: AbcCurrencyInfo = {
  // Basic currency information:
  currencyCode: 'BLU',
  currencyName: 'Bluecoin',
  pluginName: 'bluecoin',
  denominations: [
    { name: 'BLU', multiplier: '100000000', symbol: 'Ƀ' },
    { name: 'mBLU', multiplier: '100000', symbol: 'mɃ' },
    { name: 'bits', multiplier: '100', symbol: 'ƀ' }
  ],
  walletTypes: ['wallet:bluecoin'],

  // Configuration options:
  defaultSettings: {
    network: {
      type: 'bluecoin',
      magic: 0xd9b4bef9,
      keyPrefix: {
        privkey: 0x80,
        xpubkey: 0x0488b21e,
        xprivkey: 0x0488ade4,
        xpubkey58: 'xpub',
        xprivkey58: 'xprv',
        coinType: 2
      },
      addressPrefix: {
        pubkeyhash: 0x1a,
        scripthash: 0x05,
        witnesspubkeyhash: null,
        witnessscripthash: null,
        bech32: null
      }
    },
    customFeeSettings: ['satPerByte'],
    gapLimit: 10,
    maxFee: 1000000,
    defaultFee: 1000,
    feeUpdateInterval: 60000,
    simpleFeeSettings: {
      highFee: '150',
      lowFee: '20',
      standardFeeLow: '50',
      standardFeeHigh: '100',
      standardFeeLowAmount: '1000',
      standardFeeHighAmount: '100000'
    },

    enableOverrideServers: true,
    electrumServers: [
      'electrum://45.63.38.220:50001',
      'electrum://45.77.68.114:50001',
      'electrum://45.63.84.228:50001'
    ]
  },
  metaTokens: [],

  // Explorers:
  blockExplorer: 'https://www.blockexperts.com/blu/hash/%s',
  addressExplorer: 'https://www.blockexperts.com/blu/address/%s',
  transactionExplorer: 'https://www.blockexperts.com/blu/tx/%s',

  // Images:
  symbolImage:
    'data:image/png;base64,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',
  symbolImageDarkMono:
    'data:image/png;base64,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'
}