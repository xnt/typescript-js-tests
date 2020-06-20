const getFactorial = (n :number) :number => {
  return n > 0 ? n * getFactorial(n - 1) : 1;
};

export { getFactorial };