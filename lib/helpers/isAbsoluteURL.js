'use strict';

/**
 * Determines whether the specified URL is absolute
 * 确定指定的URL是否是绝对的
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  // 如果URL以“<scheme>://”或“//”(协议相对URL)开头，则认为该URL是绝对的。
  // RFC 3986将方案名定义为以字母开头和后面的字符序列
  // 字母、数字、加号、句号或连字符的任意组合。
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};
