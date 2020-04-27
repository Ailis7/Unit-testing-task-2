import compareValues from '../app';

// Понятно что можно написать тесты и про обратную сортировку, но решил не усложнять)
test('assorted', () => {
  const result = [
    { animal: 'dog', mainNumber: 1 },
    { animal: 'pig', mainNumber: 5 },
    { animal: 'cat', mainNumber: 2 },
    { animal: 'rat', mainNumber: 4 },
    { animal: 'fox', mainNumber: 3 },
  ];
  result.sort(compareValues('mainNumber', 'desc'));
  expect(result).toEqual([
    { animal: 'pig', mainNumber: 5 },
    { animal: 'rat', mainNumber: 4 },
    { animal: 'fox', mainNumber: 3 },
    { animal: 'cat', mainNumber: 2 },
    { animal: 'dog', mainNumber: 1 },
  ]);
});

test('no object', () => {
  const result = [
    { animal: 'dog', number: 1 },
    { animal: 'pig', mainNumber: 5 },
    { animal: 'cat', data: 2 },
  ];
  result.sort(compareValues('mainNumber', 'desc'));
  expect(result).toEqual([
    { animal: 'dog', number: 1 },
    { animal: 'pig', mainNumber: 5 },
    { animal: 'cat', data: 2 },
  ]);
});
