//solidity code
contract supplyChain {
    string adr1 = "address";
    string adr2 = "address";
	bool person1Agree = false;
	bool person2Agree = false;
	function looping() {
	    while (3 > 2) {
	        if (person1Agree == true && person2Agree == true) {
	         exitloop
	        }
	    }
	}
	function person1yes(){
	    bool person1Agree = true;
	}
	function person2yes(){
	    bool person2Agree = true;
	}
}   
