import { MySquarePipe } from './my-square.pipe';

describe('MySquarePipe', () => {
  it('create an instance', () => {
    const pipe = new MySquarePipe();
    expect(pipe).toBeTruthy();
  });
});
