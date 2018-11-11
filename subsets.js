
/*
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
 */

/**
 * Note that a set [1,2] is the same as [2,1]
 * Helpful that all the nums in the given set are already distinct (so this is the same as all combinations of indexes).
 * Same number of combinations as combinations of the indexes.
 * Could recurse this because for each index:
 * [1, [all combos of the rest]] and [all combos of the rest] is the solution.
 * Base case is include this last one or not include it.
 * Because no duplicates we never choose concerning 1 again, once we've done it.
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if (!nums || nums.length === 0) {
        return [];
    }
    if (nums.length === 1) {
        return [[], nums];
    }
    var subsubsets = subsets(nums.slice(1));
    var firstpart = nums.slice(0, 1);
    var retval = [];
    for (var i = 0; i < subsubsets.length; i++) {
        retval.push(subsubsets[i]);
        retval.push(firstpart.concat(subsubsets[i]));
    }
    return retval;
};

var test_input = [1,2,3];
var output = subsets(test_input);
for (var i = 0; i < output.length; i++) {
    console.log('[' + output[i] + ']');
}