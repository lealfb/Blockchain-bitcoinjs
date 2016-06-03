# Extração de logs de transação Blockchain

## Bem-vindo

EthSlurp permite extrair transações de qualquer endereço Ethereum, incluindo contratos inteligentes e armazenar essas transações facilmente em formatos de arquivo familiares como .csv ou .txt. Por exemplo,

  ethslurp 0xbb9bc244d798123fde783fcc1c72d3bb8c189413 
  
## Por que extrair logs de transação do blockchain?

Vamos dizer que você já implantou seu próprio contrato inteligente. Como você vai saber o que está acontecendo? 
Pode ser que você deseje gerar um relatório diário das transações e recebê-los por email. 

## Segue um exemplo:
Exemplo: Registro de transações para o contrato extraiLogBlockchain()

<html>
  <head>
    <h1>Registros de Log Blockcain</h3>
    <h2>Junho</h3>
    <h3>Para o contrato inteligente: 0x713b73c3994442b533e6a083ec968e40606810ec</h3>
    <table width=75%>
    <tr bgcolor=wheat>
      <th width=20% align=center><font color=black><center>Timestamp</center></td>
    	<th width=35% align=center><font color=black><center>De</center></td>
    	<th width=20% align=center><font color=black><center>Gas</center></td>
    	<th width=25% align=center><font color=black><center>Valor</center></td>
    </tr>
    <tr>
        <td align=right>1461381888</td>
      	<td align=left>0xbdac02da9f02da9f02da9f</td>
      	<td align=right>3000000</td>
      	<td align=right>10000000000000000</td>
    </tr>
    <tr>
        <td align=right>1461382383</td>
      	<td align=left>0xbdac0da19f0da19f0da19f</td>
      	<td align=right>3000000</td>
      	<td align=right>10000000000000000</td>
    </tr>
    <tr>
        <td align=right>1461382383</td>
      	<td align=left>0xbda70da49f0da49f0da49f</td>
      	<td align=right>3000000</td>
      	<td align=right>10000000000000000</td>
    </tr>
    <tr>
        <td align=right>1461437052</td>
      	<td align=left>0x43f606a2a006a2a006a2a0</td>
      	<td align=right>3000000</td>
      	<td align=right>10000000000000000</td>
    </tr>
    <tr>
        <td align=right>1461437052</td>
      	<td align=left>0x43f69c62a09c62a09c62a0</td>
      	<td align=right>3000000</td>
      	<td align=right>10000000000000000</td>
    </tr>
    <tr>
        <td align=right>1461437639</td>
      	<td align=left>0x43fb9362a09362a09362a0</td>
      	<td align=right>3000000</td>
      	<td align=right>0</td>
    </tr>
    <tr>
        <td align=right>1461437639</td>
      	<td align=left>0x43f6c962a0c962a0c962a0</td>
      	<td align=right>3000000</td>
      	<td align=right>10000000000000000</td>
    </tr>
    <tr>
        <td align=right>1462535415</td>
      	<td align=left>0xbdace4da9fe4da9fe4da9f</td>
      	<td align=right>3000000</td>
      	<td align=right>10000000000000000</td>
    </tr>
    <tr>
        <td align=right>1462535524</td>
      	<td align=left>0xbdaca0da9fa0da9fa0da9f</td>
      	<td align=right>3000000</td>
      	<td align=right>10000000000000000</td>
    </tr>
    <tr>
        <td align=right>1462535771</td>
      	<td align=left>0xbdace0da9fe0da9fe0da9f</td>
      	<td align=right>3000000</td>
      	<td align=right>10000000000000000</td>
    </tr>
    <tr>
        <td align=right>1462577601</td>
      	<td align=left>0x95198b262e8b262e8b262e</td>
      	<td align=right>123401</td>
      	<td align=right>0</td>
    </tr>
    <tr>
        <td width=20% align=right></td>
      	<td width=35% align=left></td>
      	<td width=20% style="border-top:2px solid wheat" align=right>Total:<p></td>
      	<td width=25% style="border-top:2px solid wheat" align=right>90000000000000000<p></td>
    </tr>
    </table>
    
    <h6>Registro criado com EthSlurp v.0.9.0 em 03/06/2016 02:47:04</h6>
</html>

