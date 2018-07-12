//web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

//abi = JSON.parse(/*ABI*/);
//VotingContract = web3.eth.contract(abi);

// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
//contractInstance = VotingContract.at(/*'0xca2f65265357763c442c4e65eb43baa4d99fdd38'*/);

var donateEtherAddress = "MY_CONTRACT_ADDRESS"; 
donateEther = new web3js.eth.Contract(donateEtherABI, donateEtherAddress);

///////----------------frm (For donate)----------------------///////


var twitterId = document.forms['frm'].elements['donator_twitterId'].value
var amount = document.forms['frm'].elements['donator_amount'].value

document.getElementById("donate-button").onclick = function() {
  //document.getElementById("form-text").innerHTML = "こんにちは " + document.getElementById("TwitterID").value + " さん！";
  document.getElementById("form-text").innerHTML = document.forms['frm'].elements['donator_amount'].value + "etherを" + document.forms['frm'].elements['donator_twitterId'].value + " さんとして寄付します" ;

  //--------------- メタマスク処理 ----------------//


  if (typeof web3 === 'undefined') {
    return alert('You need to install MetaMask to use this feature.')
  }
  var user_address = web3.eth.accounts[0];
  if (typeof user_address === 'undefined') {
    return alert('You need to log in MetaMask to use this feature.')
  }

  return donateEther.methods.DonateAtion(twitterId, amount)
  .send({ from: userAccount, value: web3.utils.toWei(amount, "ether") })
  .on("receipt", function(receipt) {
    $("#txStatus").text("Thank you for trying my DApp!!");
  })
  .on("error", function(error) {
    $("#txStatus").text(error);
  });

};

////-------------------- get-frm ----------------/////

