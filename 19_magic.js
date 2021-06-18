const magic = (...arg) => {
  const sum = arg.reduce((acc, el) => acc + el, 0);
  const newMagic = (...arg2) => magic(...arg2, sum);
  newMagic.valueOf = () => sum;
  return newMagic;
};
export default magic;
