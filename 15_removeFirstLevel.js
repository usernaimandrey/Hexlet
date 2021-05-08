const removeFirstLevel = (tree) => {
  const result = tree.filter((el) => Array.isArray(el));
  return result.flat();
};

export default removeFirstLevel;
