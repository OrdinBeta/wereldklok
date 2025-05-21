import { Clock } from './clock';

describe('Clock', () => {
  it('should create an instance', () => {
    expect(new Clock('Home', 'Europe/Brussels', 'nl-BE')).toBeTruthy();
  });
});
