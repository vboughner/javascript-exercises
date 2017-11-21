function parenthesesAreBalanced(s)
{
    var parentheses = "[]{}()",
	stack = [], //Parentheses stack
	i, //Index in the string
	len = s.length,
	c; //Character in the string

    for (i = 0; i < len; i++)
	{
	    c = s[i];
	    var bracePosition = parentheses.indexOf(c),
		braceType;
	    //~ is truthy for any number but -1
	    if (!~bracePosition)
		continue;

	    braceType = bracePosition % 2 ? 'closed' : 'open';

	    if (braceType === 'closed')
		{
		    //If there is no open parenthese at all, return false OR
		    //if the opening parenthese does not match ( they should be neighbours )
		    if (!stack.length || parentheses.indexOf(stack.pop()) != bracePosition - 1)
			return false;
		}
	    else
		{
		    stack.push(c);
		}
	}
    //If anything is left on the stack <- not balanced
    return !stack.length;
}

console.log('{}([]) true', parenthesesAreBalanced('{}([])'));
console.log('{{ false', parenthesesAreBalanced('{{'));
console.log('[(]) false', parenthesesAreBalanced('[(])'));
console.log("{}([]) true", parenthesesAreBalanced("{}([])"));
console.log("([}]) false", parenthesesAreBalanced("([}])"));
console.log("([]) true", parenthesesAreBalanced("([])"));
console.log("()[]{}[][]", parenthesesAreBalanced("()[]{}[][]"));