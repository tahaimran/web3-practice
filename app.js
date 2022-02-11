const Web3 = require('web3');
const rpcUrl = 'HTTP://127.0.0.1:7545';
const web3 = new Web3(rpcUrl);


web3.eth.getBlockNumber().then(console.log)

const address = '0xA161DAE37Fe4264A2a889d5BCD78C178148488f2'
web3.eth.getBalance(address, (err, res) => console.log(web3.utils.fromWei(res, 'ether')))


const wall1 = '0xA161DAE37Fe4264A2a889d5BCD78C178148488f2'
const wall2 = '0x78EC89820808F3BD888b8C8D4BB652aBc5D6A7D6'

web3.eth.sendTransaction({from: wall1, to : wall2, value : web3.utils.toWei('3', 'ether')})