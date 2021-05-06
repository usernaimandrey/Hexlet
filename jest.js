import _ from 'lodash';

const makeCart = () => ({
  items: [],
  addItem(good, count) {
    this.items.push({ good, count });
  },
  getItems() {
    return this.items;
  },
  getCount() {
    return _.sumBy(this.items, (item) => item.count);
  },
  getCost() {
    return _.sumBy(this.items, (item) => item.good.price * item.count);
  },
});

const cart = makeCart();
console.log(makeCart.addItem);
