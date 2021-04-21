/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
const coll = [
  { title: 'Book of Fooos', author: 'FooBar', year: 1111 },
  { title: 'Cymbeline', author: 'Shakespeare', year: 1611 },
  { title: 'The Tempest', author: 'Shakespeare', year: 1611 },
  { title: 'Book of Foos Barrrs', author: 'FooBar', year: 2222 },
  { title: 'Still foooing', author: 'FooBar', year: 3333 },
  { title: 'Happy Foo', author: 'FooBar', year: 4444 },
];

const findWhere = (collection, pair) => {
  const keyPair = Object.keys(pair);
  for (const key of keyPair) {
    for (const obj of collection) {
      if (pair[key] === obj[key]) {
        let index = 0;
        while (index < keyPair.length) {
          if (obj[keyPair[index]] === pair[keyPair[index]]) {
            index += 1;
          } else {
            break;
          }
          if (index > keyPair.length - 1) {
            return obj;
          }
        }
      }
    }
  }
  return null;
};

console.log(findWhere(coll, { author: 'Shakespeare', year: 1611 }));
