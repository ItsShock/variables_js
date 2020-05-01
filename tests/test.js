const {
  number,
  text,
  logic,
  empty,
  args,
} = require('..');

describe('Zmienna', () => {
  it('number powinna być typu number', async () => {
    expect(typeof number).toBe('number');
  });

  it('text powinna być typu string', async () => {
    expect(typeof text).toBe('string');
  });

  it('logic powinna być typu boolean', async () => {
    expect(typeof logic).toBe('boolean');
  });

  it('empty powinna mieć wartosć undefined lub null', async () => {
    expect(empty === undefined || empty === null).toBeTruthy();
  });

  it('args powinna być tablicą', async () => {
    expect(Array.isArray(args)).toBeTruthy();
  });
});
