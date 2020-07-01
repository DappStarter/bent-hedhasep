require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other food main rate pave common grace light army gentle'; 
let testAccounts = [
"0xad51b1a18621aee6c95c46a84bec94456075e9669597ecb347ba253a28098339",
"0x43c8562c2fef1d619b256cb5f6f1744dc1733ac2610de28b2f05fc53550f8c77",
"0xbae000d84f62162be1a1bd47b5785d6e73b995556aa8d5e6d089bb0483e64409",
"0x74295e102ceb9a606ce75acc0f4324e8438cc7d3a4fb47436d41905d3afd580d",
"0x095804adcc9e2c92977095dd03e3187df83d07fd13a4d7023252a27ec2d7eead",
"0xd9448068bbe6e3ce3caeca01e6dea00199b96868d01c11aa91b03c1371fa2545",
"0x8a9d33cba8c5709eb508059d2c74bdf589f77eb583649d7f513d5fd2eefad9bb",
"0x567d91bd415e90c9b5c5047e661b53a2a0f46d4699b53f610319a4ded5eeb477",
"0x3717efde637ffc6c83845886d949003a739556fb22dd5549a862f987bb3d7e18",
"0xeeb4c0bf106f2ab2f4e59a09bcf6bd4a8ca54448938e1058904a08b1735d044d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
