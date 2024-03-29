const wrapperFunc = (func) => {
  return (num) => {
    return func(num) * 2;
  };
};

const addOne = (num) => {
  return num + 1;
};

const addOneDouble = wrapperFunc(addOne);
console.log(addOneDouble(4));
