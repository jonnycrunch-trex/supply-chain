//solidity code
contract supplyChain {
	address person2;
	address person1;
	bool person1Agree = false;
	bool person2Agree = false;
	event agreement(bool, bool);
	function AgreedOrNot() constant returns (bool){
	    if (person1Agree == true && person2Agree == true)
	        return true;
	    else
	        return false;
	}
	function person1yes(bool lolk){
	    bool person1Agree = lolk;
	}
	function person2yes(bool lolk){
	    bool person2Agree = lolk;
	}
}   
