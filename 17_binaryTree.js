class Node {
  constructor(key = null, childrenL = null, childrenR = null) {
    this.key = key;
    this.childrenL = childrenL;
    this.childrenR = childrenR;
  }

  getKey() {
    return this.key;
  }

  getLeft() {
    return this.childrenL;
  }

  getRight() {
    return this.childrenR;
  }

  search(node) {
    const iter = (data) => {
      if (data === null) {
        return data;
      }
      if (data.getKey() === node) {
        return data;
      }
      if (data.getKey() < node) {
        return iter(data.getRight());
      }
      return iter(data.getLeft());
    };
    return iter(this);
  }
}

export default Node;
