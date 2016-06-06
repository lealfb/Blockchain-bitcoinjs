var bitcoin = require('bitcoinjs-lib')
var keyPair = bitcoin.ECPair.makeRandom()

console.log(keyPair.toWIF())
console.log(keyPair.getAddress())

var tx = new bitcoin.TransactionBuilder()
var txId = 'aa94ab02c182214f090e99a0d57021caffd0f195a81c24602b1028b130b63e31'
tx.addInput(txId, 0)
tx.addOutput("1Gokm82v6DmtwKEB8AiVhm82hyFSsEvBDK", 15000)

var privateKeyWIF = 'L1uyy5qTuGrVXrmrsvHWHgVzW9kKdrp27wBC7Vs6nZDTF2BRUVwy'
var keyPair = bitcoin.ECPair.fromWIF(privateKeyWIF)
tx.sign(0, keyPair)
result = tx.build()
console.log(result.toHex())

var txid = bitcoin.bufferutils.reverse(result.getHash()).toString('hex')
console.log('txid',txid)

