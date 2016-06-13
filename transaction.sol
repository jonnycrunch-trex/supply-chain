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
	function() { 
	    throw; 
	}
	function person2yes(bool lolk){
	    bool person2Agree = lolk;
	}
	function looping(){
		while (dab++ < 100) {
		        if (AgreedOrNot()) {
		            agreement(true, person1, person2);
		            break;
		        }
    	}
    }
    modifier person2Mod {
        if (msg.sender != person2)
            throw;
        else
        _
    }
    modifier person1Mod {
        if (msg.sender != person1)
            throw;
        else
        _
    }
    
    function person1Agrees(bool yesorno) person1Mod {
        person1Agree = yesorno; 
    }
    
    function person2Agrees(bool yesorno) person2Mod {
        person1Agree = yesorno; 
    }
    function verify( bytes32 hash, uint8 v, bytes32 r, bytes32 s) constant returns(address retAddr) {
        retAddr= ecrecover(hash, v, r, s);
    }
}
