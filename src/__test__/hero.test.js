import sortHero from '../hero';

const dataArr = [
  [
    [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ],
    [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ],
  ],
  [
    [
      { name: 'мечник', health: 40 },
      { name: 'маг', health: 20 },
      { name: 'лучник', health: 30 },
    ],
    [
      { name: 'мечник', health: 40 },
      { name: 'лучник', health: 30 },
      { name: 'маг', health: 20 },
    ],
  ],
];

test.each(dataArr)('testing case №%#', (heroes, expected) => {
  const result = sortHero(heroes);
  expect(result).toEqual(expected);
//   expect(result).toBe(expected);
});
