import healthCount from '../health';

test('healthCount', () => {
  const result = healthCount({ name: 'Маг', health: 90 });
  expect(result).toBe('healthy');
});

test('healthCount', () => {
  const result = healthCount({ name: 'Маг', health: 15 });
  expect(result).toBe('wounded');
});

test('healthCount', () => {
  const result = healthCount({ name: 'Маг', health: 14 });
  expect(result).toBe('critical');
});
