const expect = require('chai').expect;
const ImgPlaceholder = require('../index');


let imgGenerator;
beforeEach('create generator instance', () => {
  imgGenerator = new ImgPlaceholder();
});

describe('Declaration', () => {
  it('Class exist', function() {
    expect(ImgPlaceholder).to.be.a('function');
  });
  it('Constructor works', () => {
    expect(imgGenerator).to.be.a('object');
  });
  it('Generate function exist', () => {
    expect(imgGenerator.generate).to.be.a('function');
  });
  it('Generator has an options obj property', () => {
    expect(imgGenerator.options).to.be.a('object');
  });
});
describe('Functionality', () => {
  it('generate functoin return a url', () => {
    const url = imgGenerator.generate();
    expect(url).to.match(/^https?:\/\/.+/);
  });
  it('generator has a default width Number property', () => {
    expect(imgGenerator.options.width).to.be.a('number');
  });
  it('merge options', () => {
    const newOptions = imgGenerator.mergeOptions({
      width: 400,
      height: 500,
      abc: 'abc',
    });
    expect(newOptions.width).to.equal(400);
    expect(newOptions.height).to.equal(500);
    expect(newOptions.abc).to.equal('abc');
  });
  it('create instance without options', () => {
    const imgGenerator = new ImgPlaceholder();
    expect(imgGenerator.options.width).to.equal(200);
    expect(imgGenerator.options.height).to.be.undefined;
    expect(imgGenerator.options.abc).to.be.undefined;
  });
  it('create instance with options', () => {
    const imgGenerator = new ImgPlaceholder({
      width: 400,
      height: 500,
      abc: 'abc',
    });
    expect(imgGenerator.options.width).to.equal(400);
    expect(imgGenerator.options.height).to.equal(500);
    expect(imgGenerator.options.abc).to.equal('abc');
  });
});
describe('Options', () => {
  it('no options', () => {
    const url = imgGenerator.generate();
    expect(url).to.equal('https://picsum.photos/200');
  });
  it('only set width to default options', () => {
    const imgGenerator = new ImgPlaceholder({
      width: 400,
    });
    const url = imgGenerator.generate();
    expect(url).to.equal('https://picsum.photos/400');
  });
  it('only set width to generate function', () => {
    const url = imgGenerator.generate({
      width: 300,
    });
    expect(url).to.match(/^https?:\/\/.+300$/);
  });
});
