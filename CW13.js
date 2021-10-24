function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  let num = Math.sqrt(sq);
  return ((num ^ 0) === num)? Math.pow(num + 1, 2): -1;
  
}
findNextSquare(121);


/* Complete the findNextSquare method that finds the next
 integral perfect square after the one passed as a parameter.
  Recall that an integral perfect square is an integer n such
   that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should
 be returned. You may assume the parameter is non-negative. */