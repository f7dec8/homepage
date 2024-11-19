import { expect, it } from 'vitest';
import { convert } from './money';

it('82137을 금은동으로 변환', () => {
  const [
    gold,
    silver,
    copper,
  ] = convert(82137);
  expect(`${gold}금 ${silver}은 ${copper}동`).toBe(`8금 21은 37동`);
});
