import fetchData from '../http';
import getLevel from '../level';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('show user level', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 3 });
  expect(getLevel(1)).toBe('Ваш текущий уровень: 3');
});

test('show user level', () => {
  fetchData.mockReturnValue({ status: 404 });
  expect(getLevel(1)).toBe('Информация об уровне временно недоступна');
});
