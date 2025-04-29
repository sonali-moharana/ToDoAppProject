function findTwosum(nums, target) {
  const obj = {};
  if (nums.length == 0 && typeof target != "number") {
    throw new Error("invalid input");
  }
  for (let i = 0; i <= nums.length; i++) {
    const secondNum = target - nums[i];

    if (obj.hasOwnProperty(secondNum)) {
      return [obj[secondNum], i];
    }
  }
  obj[nums[i]] = i;
}
try {
  const nums = [2, 7, 11, 15];
  const target = 9;
  console.log(findTwosum(nums, target));
} catch (e) {
  console.log(`Error: ${e}`);
}
