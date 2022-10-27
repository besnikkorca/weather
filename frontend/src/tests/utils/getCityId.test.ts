import getCityId from 'src/utils/getCityId/getCityId';

describe('get city id', () => {
  it('returns city id for Moscow RU', () => {
    const cityId = getCityId('Moscow', 'RU');

    expect(cityId).toBe(524894);
  });

  it('returns city id for Ottawa CA', () => {
    const cityId = getCityId('Ottawa', 'CA');

    expect(cityId).toBe(6094817);
  });

  it('returns city id for Tokyo JP', () => {
    const cityId = getCityId('Tokyo', 'JP');

    expect(cityId).toBe(1850147);
  });

  it('returns city id for London GB', () => {
    const cityId = getCityId('London', 'GB');

    expect(cityId).toBe(2643743);
  });

  it('returns city id for New York US', () => {
    const cityId = getCityId('New York', 'US');

    expect(cityId).toBe(5128638);
  });

  it('returns city id for New York US with state', () => {
    const cityId = getCityId('New York', 'US', 'NY');

    expect(cityId).toBe(5128638);
  });

  it('throws error for invalid city', () => {
    expect(() => getCityId('Invalid City', 'US')).toThrow();
  });

  it('throws error for invalid country', () => {
    expect(() => getCityId('Moscow', 'XX')).toThrow();
  });

  it('throws error for invalid state', () => {
    expect(() => getCityId('Moscow', 'RU', 'XX')).toThrow();
  });
});
