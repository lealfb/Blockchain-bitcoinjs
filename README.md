# Extração de logs de transação Blockchain

## Bem-vindo

EthSlurp permite extrair transações de qualquer endereço Ethereum, incluindo contratos inteligentes e armazenar essas transações facilmente em formatos de arquivo familiares como .csv ou .txt. Por exemplo,

  ethslurp 0xbb9bc244d798123fde783fcc1c72d3bb8c189413 
  
## Por que extrair logs de transação do blockchain?

Vamos dizer que você já implantou seu próprio contrato inteligente. Como você vai saber o que está acontecendo? 
Pode ser que você deseje gerar um relatório diário das transações e recebê-los por email. 

## Segue um exemplo:

Como é isto: Declaração mensal para XYZ inteligente Contrato

<html>
  <head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
        <table style="border:1px solid wheat;" width=60%><tr><td>
        <h1 style="display:inline">Registros de Log Blockcain</h1><br>
        <h2 style="display:inline">Junho</h2><br>
        <h3 style="display:inline">Para o contrato inteligente: 0x713b73c3994442b533e6a083ec968e40606810ec</h3><p>
        <table width=75% style="border:1px solid wheat" >
        <tr bgcolor=wheat>
            <th width=20% align=center><font color=black><center>Timestamp</center></td>
        	<th width=35% align=center><font color=black><center>De</center></td>
        	<th width=20% align=center><font color=black><center>Gas</center></td>
        	<th width=25% align=center><font color=black><center>Valor</center></td>
        </tr>
        <tr>
            <td colspan=4><hr></td>
        </tr>
        <tr>
            <td align=right>1461381888</td>
          	<td align=left>0xbdac...02da9f</td>
          	<td align=right>3000000</td>
          	<td align=right>10000000000000000</td>
        </tr>
        <tr>
            <td align=right>1461382383</td>
          	<td align=left>0xbdac...0da19f</td>
          	<td align=right>3000000</td>
          	<td align=right>10000000000000000</td>
        </tr>
        <tr>
            <td align=right>1461382383</td>
          	<td align=left>0xbda7...0da49f</td>
          	<td align=right>3000000</td>
          	<td align=right>10000000000000000</td>
        </tr>
        <tr>
            <td align=right>1461437052</td>
          	<td align=left>0x43f6...06a2a0</td>
          	<td align=right>3000000</td>
          	<td align=right>10000000000000000</td>
        </tr>
        <tr>
            <td align=right>1461437052</td>
          	<td align=left>0x43f6...9c62a0</td>
          	<td align=right>3000000</td>
          	<td align=right>10000000000000000</td>
        </tr>
        <tr>
            <td align=right>1461437639</td>
          	<td align=left>0x43fb...9362a0</td>
          	<td align=right>3000000</td>
          	<td align=right>0</td>
        </tr>
        <tr>
            <td align=right>1461437639</td>
          	<td align=left>0x43f6...c962a0</td>
          	<td align=right>3000000</td>
          	<td align=right>10000000000000000</td>
        </tr>
        <tr>
            <td align=right>1462535415</td>
          	<td align=left>0xbdac...e4da9f</td>
          	<td align=right>3000000</td>
          	<td align=right>10000000000000000</td>
        </tr>
        <tr>
            <td align=right>1462535524</td>
          	<td align=left>0xbdac...a0da9f</td>
          	<td align=right>3000000</td>
          	<td align=right>10000000000000000</td>
        </tr>
        <tr>
            <td align=right>1462535771</td>
          	<td align=left>0xbdac...e0da9f</td>
          	<td align=right>3000000</td>
          	<td align=right>10000000000000000</td>
        </tr>
        <tr>
            <td align=right>1462577601</td>
          	<td align=left>0x9519...8b262e</td>
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
        
        <i><h6>Registro criado com <a href=index.html>EthSlurp v.0.9.0</a> em 03/06/2016 02:47:04</h6></i>
        </td></tr></table>
        </center>
</html>

