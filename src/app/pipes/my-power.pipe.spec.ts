import { MyPowerPipe } from './my-power.pipe';

describe('MyPowerPipe', () => {
  it('create an instance', () => {
    const pipe = new MyPowerPipe();
    expect(pipe).toBeTruthy();
  });
});
