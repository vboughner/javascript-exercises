/*
 * Sorting exercises, using characters on strings, for convenience.
 * Test function tests that the sort worked and prints result to console.
 */
function testSortAndPrint(inputString, perfectResult) {
    console.log('input is ' + inputString + ' and output should be ' + perfectResult);
    if (mySort(inputString) === perfectResult) {
        console.log('test passed');
    }
    else {
        console.log('test failed');
    }

    return true;
}


function mySort(inputString) {
    // todo: implement sort
    return inputString;
}


testSortAndPrint('abcde', 'abcde');
testSortAndPrint('abdec', 'abcde');
testSortAndPrint('ecdba', 'abcde');
testSortAndPrint('edcba', 'abcde');
