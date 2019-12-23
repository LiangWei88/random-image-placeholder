/**
 * 图片占位符类
 *
 * @class ImgPlaceholder
 */
class ImgPlaceholder {
  /**
     *Creates an instance of ImgPlaceholder.
     * @param {object} options
     * @memberof ImgPlaceholder
     */
  constructor(options) {
    const defaultOptions = {
      source: 'https://picsum.photos',
      width: 200,
    };
    this.options = this.mergeOptions(defaultOptions);
    this.options = this.mergeOptions(options);
  }
  /**
     * 创建 url
     *
     * @param {object} options
     * @return {string} 图片地质
     * @memberof ImgPlaceholder
     */
  generate(options) {
    this.options = this.mergeOptions(options);
    return `${this.options.source}/${this.options.width}`;
  }
  /**
     * 合并新 options
     *
     * @param {object} options
     * @return {object} 新配置对象
     * @memberof ImgPlaceholder
     */
  mergeOptions(options) {
    return Object.assign({}, this.options || {}, options);
  }
}

exports = module.exports = ImgPlaceholder;
