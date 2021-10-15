import { MyCubePipe } from './my-cube.pipe';

describe('MyCubePipe', () => {
  it('create an instance', () => {
    const pipe = new MyCubePipe();
    expect(pipe).toBeTruthy();
  });
});
