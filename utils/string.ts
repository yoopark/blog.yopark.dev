const flatten = (str: string) => {
  return str.toLowerCase().replace(/\/| |\&/g, '-');
};

export { flatten };
