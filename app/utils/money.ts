export type Gold = number;
export type Silver = number;
export type Copper = number;

export function convert(amount: number = 0): [
  Gold,
  Silver,
  Copper,
] {
  return [
    Math.floor(amount / 10_000),
    Math.floor((amount % 10_000) / 100),
    amount % 100,
  ];
}
