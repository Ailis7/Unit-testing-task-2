// TODO: write your code here

const example = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

export default function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!Object.prototype.hasOwnProperty.call(a, key)
     || !Object.prototype.hasOwnProperty.call(b, key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = a[key];
    const varB = b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}
example.sort(compareValues('health', 'desc'));
