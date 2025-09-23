var expect = function (val) {
  return {
    toBe: (value) => {
      if (val === value) {
        return { value: true };
      }
    },

    notToBe: (value) => {
      if (val === value) {
        return { error: "Not Equal" };
      }
    },
  };
};

[].map((item, index) =>  item)
