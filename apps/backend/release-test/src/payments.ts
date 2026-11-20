export const retry = (n: number) => Math.min(2 ** n * 100, 5000);
