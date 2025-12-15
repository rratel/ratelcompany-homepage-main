export const isJsonString = (str?: string) => {
  try {
    if (str) {
      JSON.parse(str);
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
  return true;
};

// eslint-disable-next-line func-names
export const rotateArray = (nums: any, k: any) => {
  for (let i = 0; i < k; i += 1) {
    nums.unshift(nums.pop());
  }
  return nums;
};
