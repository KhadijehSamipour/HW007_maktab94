const setterGenerator = (obj) => (key, value) => {
  obj[key] = value;
  return obj;
};
const user = {};
const nameSetter = setterGenerator(user);
nameSetter("age", 30);
console.log(user);
