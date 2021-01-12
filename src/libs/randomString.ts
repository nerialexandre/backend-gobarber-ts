import randomstring from 'randomstring';

class RandomString {
  public generate(_length: number, _charset: string): string {
    return randomstring.generate({
      length: _length,
      charset: _charset
    });
  }
}

export default new RandomString();
