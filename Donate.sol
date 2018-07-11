pragma solidity ^0.4.24;

//TwitteeID上限は15文字 = bytes16

contract Donate{

	address owner;
	constructor() public { owner = msg.sender; }
	

	modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

	//-------------- 課金処理のあと --------------//

	struct Donator{
		bytes16 twitterId;
		uint amount;
	}

	Donator[] donators;

	function DonateAction(bytes16 twitterId, uint amount) public{
		if( checkTwitterId(twitterId)){
			//true = there IS same ID
			addAmount(twitterId, amount);
		}else{
			//false = there IS NOT same ID
			pushDonator(twitterId, amount);
		}
	}
	//-------- < DonateAction 関数補助関数 >-------------//

	function checkTwitterId(bytes16 twitterId) internal view returns(bool){
		for(uint i = 0; i < donators.length; i++ ){
			if(donators[i].twitterId == twitterId){
				return true;
			}
		}
		return false;
	}

	function addAmount(bytes16 twitterId, uint amount) internal{
		
		donators[getIndexNumber(twitterId)].amount += amount;
	}

	function pushDonator(bytes16 twitterId, uint amount) internal{

		Donator memory m;
        m.twitterId = twitterId;
        m.amount = amount;
        donators.push(m);
	}
	// ------------- </ DonateAction 補助関数>--------//


	//---------------- get関数 (Onlyowner)(view) -------------------//

	function getDonatorNumber()public view returns(uint number) onlyOwner{
		return donators.length;
	}


	function getIndexNumber(bytes16 twitterId)public view returns(uint indexNumber) onlyOwner{
		for(uint i = 0; i < donators.length; i++){
			if(donators[i].twitterId == twitterId){
				return i;
			}
		}
	}

	function getAllAmount()public view returns(uint allAmount) onlyOwner{

		for(uint i = 0; i < donators.length; i++){
			allAmount += donators[i].amount;
		}

		return allAmount;
	}

	function getAmount(bytes16 twitterId)public view returns(uint amount) onlyOwner{
		for(uint i = 0; i < donators.length; i++){
			if(donators[i].twitterId == twitterId){
				return donators[i].amount;
			}
		}
		return 0;
	}


	function getAllTwitterId()public view returns(bytes16[]) onlyOwner{

		bytes16[] memory twitterIdArray = new bytes16[](donators.length); 
		
		for(uint i = 0; i < donators.length; i++){
			twitterIdArray[i] = donators[i].twitterId;
		}
		
		return twitterIdArray;
	}
	//----------------- Get関数用 internal関数 -----------------//



}