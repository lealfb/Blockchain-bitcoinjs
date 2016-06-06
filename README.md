# Projeto - Blockchain

## Início
Primeiramente será necessário realizar o download do [Node.js](https://nodejs.org/en/).

<pre class="prettyprint lang-txt">$ npm install -g bitcoinjs-lib</pre>

### Passo 1 - bitcoinjs-lib
Após concluída a instalação do npm será necessária importar a lib bitcoinjs-lib.
```
> $ npm install -g bitcoinjs-lib
```

### Passo 2 - Browserify 
Com o Browserify é possível escrever código que usa o require do Node da mesma forma.
Saiba mais sobre o Browserify [Aqui](http://browserify.org/).
```
> $ npm -g install bitcoinjs-lib browserify uglify-js
> $ browserify -r bitcoinjs-lib -s bitcoin | uglifyjs > bitcoinjs.min.js
```

### Passo 3 - Gerando Par de Chaves
```
> var keyPair bitcoin.ECPair.makeRandom = ()
>
> // Impressão da chave privada (formato WIF)
> console.log (keyPair.toWIF ())
> // => Kxr9tQED9H44gCmp6HAdmemAzU3n84H3dGkuWTKvE23JgHMW8gct
>
> // Impressão da chave pública
> console.log (keyPair.getAddress ())
> // => 14bZ7YWde4KdRb5YN7GYkToz3EHVCvRxkF
```

### Passo 4 - Criando a Transação
```
> var tx = new bitcoin.TransactionBuilder ()

> // Adicionando a entrada
> // [Hash da transação anterior, o índice da saída]

> var TxID = 'aa94ab02c182214f090e99a0d57021caffd0f195a81c24602b1028b130b63e31'
> tx.addInput (TxID, 0)

> // Adicionando a saída
> // [Endereço do beneficiário, o valor do "Ativo"]
> tx.addOutput ( "1Gokm82v6DmtwKEB8AiVhm82hyFSsEvBDK", 15000)

> // Inicializa uma chave privada usando WIF
> var privateKeyWIF = 'L1uyy5qTuGrVXrmrsvHWHgVzW9kKdrp27wBC7Vs6nZDTF2BRUVwy'
> var keyPair = bitcoin.ECPair.fromWIF(privateKeyWIF)

> // Assinando a primeira entrada com a nova chave
> tx.sign (0, keyPair)

> // Imprimindo a transação serializada em Hexadecimal
> console.log (tx.build (). TOHEX ())
> // => ... 0100000001313eb630b128102b60241ca895f1d0ffca21
```

### Passo 5 - Escrevendo a transação manualmente na Blockchain
A escrita da transação foi realizada manualmente através do link abaixo:
[Gravando a transação na Blockchain](https://blockchain.info/pushtx)
Ressalto que este passo deverá ser automatizado. 


