require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'hockey entry off suggest name remember situate come grace drink equal genre'; 
let testAccounts = [
"0xe5a423ed8e0446f71580567bb844d3388d160bfc340a6c221e86bffe3a18e2b9",
"0x672f3a625ce76bb7c3621c61bc63e089c14afab13fc647f9720425b2753c738f",
"0x9cc152eb0bca9b739b1e160151018043596584db37ffb6dada34d75fe2c7f12d",
"0xaeb65021503a58dad8c15158e772c0613fc12300a3c45bc58591643da271ed6a",
"0x6e954f6ccc7444623438571b5d9825f44b545cef97a0d32d1698053addd9f31b",
"0x12eb8176f5a75896fbcda759cbb109f1b91ab28c618a2814b6134c9c583323a5",
"0xe4eabf14a332897a2f116fd0de048b640f53c524dd08eb4997b5ec6babbe660d",
"0x40b80c445397b418e50df3ecaac833f87173355560fef3ec3069948b6630b3fb",
"0xc2017e99313c9514e81cf60d83b2da546689dd8c8e722945453b85fb95cbf326",
"0x64f2cd93836a5bfd772e85df35efc56083b0d6456d4126b519697bcba4258114"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


