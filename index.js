//web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

//abi = JSON.parse(/*ABI*/);
//VotingContract = web3.eth.contract(abi);

// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
//contractInstance = VotingContract.at(/*'0xca2f65265357763c442c4e65eb43baa4d99fdd38'*/);



///////----------------Formテスト----------------------///////

var twitterId = document.forms['frm'].elements['donator_twitterId'].value
var amount = document.forms['frm'].elements['donator_amount'].value

document.getElementById("submit-button").onclick = function() {
  //document.getElementById("text").innerHTML = "クリックされた！";
  //document.getElementById("form-text").innerHTML = "こんにちは " + document.getElementById("TwitterID").value + " さん！";
  document.getElementById("form-text").innerHTML = document.forms['frm'].elements['donator_amount'].value + "etherを" + document.forms['frm'].elements['donator_twitterId'].value + " さんとして寄付しますか？" ;


};