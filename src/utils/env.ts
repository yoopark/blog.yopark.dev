const getOrThrow = (value: string | undefined) => {
  if (value === undefined) {
    throw new Error('Variable is not defined');
  }

  return value;
};

export { getOrThrow };
