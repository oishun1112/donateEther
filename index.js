web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

//編集
abi = JSON.parse('[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"type":"constructor"}]')
VotingContract = web3.eth.contract(abi);

//編集
// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
contractInstance = VotingContract.at('0xca2f65265357763c442c4e65eb43baa4d99fdd38');


var tipButton = document.querySelector('.tip-button');
tipButton.addEventListener('click', function() {
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
  }).then(function DonateAction(/* twitterId */,/* amount */){
    //募金後処理
    contractInstance.pushDonator(twitterId, amount);
  })
})
