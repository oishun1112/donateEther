//web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

//abi = JSON.parse(/*ABI*/);
//VotingContract = web3.eth.contract(abi);

// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
//contractInstance = VotingContract.at(/*'0xca2f65265357763c442c4e65eb43baa4d99fdd38'*/);



///////----------------frm (For donate)----------------------///////

var twitterId = document.forms['frm'].elements['donator_twitterId'].value
var amount = document.forms['frm'].elements['donator_amount'].value

document.getElementById("donate-button").onclick = function() {
  //document.getElementById("form-text").innerHTML = "こんにちは " + document.getElementById("TwitterID").value + " さん！";
  document.getElementById("form-text").innerHTML = document.forms['frm'].elements['donator_amount'].value + "etherを" + document.forms['frm'].elements['donator_twitterId'].value + " さんとして寄付します" ;

  if (typeof web3 === 'undefined') {
    return alert('You need to install MetaMask to use this feature.')
  }
  var user_address = web3.eth.accounts[0];
  if (typeof user_address === 'undefined') {
    return alert('You need to log in MetaMask to use this feature.')
  }

  web3.eth.sendTransaction({
    to: "0x4612A97c3bF711F7048277d3642C68eac1148bF0",
    from: user_address,
    value: web3.toWei('0.005', 'ether'),
  }, function (err, transactionHash) {
    if (err) return alert('Thanks for trying out!');
    alert('Thanks for the generosity!!');
  }).then(contractInstance.pushDonator(twitterId, amount);)


};

////-------------------- get-frm ----------------/////

