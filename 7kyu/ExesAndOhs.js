//  Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

//  Examples input/output:

//  XO("ooxx") => true
//  XO("xooxx") => false
//  XO("ooxXm") => true
//  XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
//  XO("zzoo") => false

// My solution:
function XO(str) {
  const lowerCaseStr = str.toLowerCase();
  const countX = (lowerCaseStr.match(/x/g) || []).length;
  const countO = (lowerCaseStr.match(/o/g) || []).length;
  return countX === countO;
}

// Other good solution:

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

//  g: This stands for "global" and is used to perform a global search within the input string. When g is used, the regular expression looks for all matches rather than stopping after the first match. Without this flag, the regular expression would only return the first match found in the string.

//  i: This stands for "case-insensitive" matching. When i is used, the regular expression ignores the case sensitivity of the characters. For instance, /x/gi would match both lowercase 'x' and uppercase 'X' in the input string.