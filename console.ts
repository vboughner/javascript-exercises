let message: string = "Hello, TypeScript!";
console.log(message);

const parenTypes = '[]{}()';

function parenthesesAreBalanced(s: string): boolean {
  const stack: string[] = []; // array to hold the parens that aren't closed yet

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const ptype = parenTypes.indexOf(c);

    if (ptype === -1) {
      // question here, are we supposed to ignore everything else?
      continue;
    }

    const isClose = ptype % 2 === 1;

    if (isClose) {
      if (!stack.length) return false;

      const isOkay = stack.pop() === parenTypes[ptype - 1];
      if (!isOkay) return false;
    } else {
      stack.push(c);
    }

  }

  if (stack.length === 0) return true;

  return false;
}

console.log('{}([]) true', parenthesesAreBalanced('{}([])'));
console.log('{{ false', parenthesesAreBalanced('{{'));
console.log('[(]) false', parenthesesAreBalanced('[(])'));
console.log("{}([]) true", parenthesesAreBalanced("{}([])"));
console.log("([}]) false", parenthesesAreBalanced("([}])"));
console.log("([]) true", parenthesesAreBalanced("([])"));
console.log("()[]{}[][]", parenthesesAreBalanced("()[]{}[][]"));

