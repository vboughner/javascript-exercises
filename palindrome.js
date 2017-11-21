function isAlphaForPalindrome(c) {
    return /^[a-zA-Z]+$/.test(c);
}


function isPalindrome(s) {
    var first = 0;
    var last = s.length - 1;
  
    while (first < last) {
	while (first < last && !isAlphaForPalindrome(s.charAt(last))) {
	    last--;
	}
	while (first < last && !isAlphaForPalindrome(s.charAt(first))) {
	    first++;
	}    
	if (first < last && s.charAt(first).toUpperCase() !== s.charAt(last).toUpperCase()) {
	    return false;
	}
	first++;
	last--;
    }
    
    return true;
}



function testAndPrint(s, shouldBePalindrome) {
    var isP = isPalindrome(s);
    if (isP) {
	console.log("'" + s + "' is a palindrome");
    }
    else {
	console.log("'" + s + "' is NOT a palindrome");
    }
 
    if (isP === shouldBePalindrome) {
	console.log("Test Passed");
    }
    else {
	console.log("Test FAILED");
    }
    console.log('\n');
}

testAndPrint("", true);  // empty string
testAndPrint(",. ..'", true);
testAndPrint(",.c .a.'", false);  // not one, using punctuation
testAndPrint("c", true);  // single character
testAndPrint("I paladrome I", false);
testAndPrint("A Santa at NASA", true);  // even numbered one
testAndPrint("Amore, Roma.", true);  // odd numbered one
testAndPrint("Friends, I like you!", false);

