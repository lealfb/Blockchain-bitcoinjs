var bitcore = require('bitcore');
var explorers = require('bitcore-explorers');
var insight = new explorers.Insight();

var publicAddress = '1DuFRRFEJvchWpTQiDqMk3DW3mP9XZ3UTa';
var privateKey    = '5KG7bZhGX5jaCD46cxbN1tX6nq1zSa4gAZ4baKmw277RKGbH3qc';

var bitcoinRecipient = '3BuMGCRby5xeu2tB8p4iok8pAmw9abHWoA'

var minerFee = 667;
var blockchainMessage = 'Hello World!';

insight.getUnspentUtxos(publicAddress, function (error, utxos) {
console.log('utxos' + ' :' + JSON.stringify(utxos, undefined, 2));
if(utxos.length == 0) {
	console.log("Não há ativo suficiente para cobrir a taxa do Minerador.");
	return
}
else if (bitcore.Unit.fromBTC(utxos[0].toObject().amount).toSatoshis() - minerFee > minerFee)     {
	console.log("Não temos ativos suficiente.");
	var transaction = new bitcore.Transaction()
		.from(utxos[0]) 		//Usando o último UXTO para assinar a próxima transação.
		.to(bitcoinRecipient, 4200 - minerFee) // Enviado 4200 ativos.
		.addData(blockchainMessage) // Minha mensagem
		.sign(privateKey); // Último passo para assinatura digital.
	console.log('transaction_hex: ' + transaction.checkedSerialize());
	insight.broadcast(transaction, function (error, body) {
		if (error) {
			console.log('Erro no broadcast: ' + error);
		}
		else {
			console.log("Sucesso! Aqui meu ID de transação: " + body);
			console.log('http://explorer.chain.com/transactions/' + body + "#!transaction-op-return")
		}
	});
   }
});
