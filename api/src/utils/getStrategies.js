const { ethers } = require('ethers');
const { MULTICHAIN_RPC } = require('../constants');
import { ChainId } from '../../packages/address-book/address-book';

const MULTICALLS = {
  bsc: '0x88A3fB4Dcb566ee39ec3a03d412682536F9941e6',
  heco: '0xaa5a5AD8a27fEd7F791952705ce90134eac620dc',
  polygon: '0x78E156a612a7e907E4cF4340c9261608B0C19FEF',
  fantom: '0x167615dBA34c173efF4b7ba7178fE174b472429D',
  avax: '0x5135C0af3080DF01ABF66491d5a1eD21fBEF3a7C',
};
const BATCH_SIZE = 128;

const MulticallAbi = require('../abis/BeefyStrategyMulticall.json');

const getStrategies = async (vaults, chain) => {
  // Setup multichain
  const provider = new ethers.providers.JsonRpcProvider(MULTICHAIN_RPC[ChainId[chain]]);
  const multicall = new ethers.Contract(MULTICALLS[chain], MulticallAbi, provider);

  // Split query in batches
  const query = vaults.map(v => v.earnedTokenAddress);
  for (let i = 0; i < vaults.length; i += BATCH_SIZE) {
    let batch = query.slice(i, i + BATCH_SIZE);
    const buf = await multicall.getStrategy(batch);

    // Merge fetched data
    for (let j = 0; j < batch.length; j++) {
      vaults[j + i].strategy = buf[j];
    }
  }

  return vaults;
};

module.exports = { getStrategies };
