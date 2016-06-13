//solidity code
contract supplyChain {
	address person2;
	address person1;
	uint dab = 2;
	bool person1Agree = false;
	bool person2Agree = false;
	event agreement(bool, address, address);
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
	function looping(){
	    while (dab++ < 1000) {
	        if (AgreedOrNot()) {
	            agreement(true, person1, person2);
	            break;
	        }
    	}
    }
}
