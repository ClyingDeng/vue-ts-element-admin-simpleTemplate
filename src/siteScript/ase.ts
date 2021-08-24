import CryptoJS from 'crypto-js/crypto-js';

const KEY = CryptoJS.enc.Utf8.parse('_aes_secret_key_');
const IV = CryptoJS.enc.Utf8.parse('_aes_secret_iv__');

/**
 * 加密
 * @param word      数据源
 * @param keyStr    可不传
 * @param ivStr     可不传
 * @returns {*|string}
 * @constructor
 */
const Encrypt = (word: any, keyStr?: any, ivStr?: any) => {
  let key = KEY;
  let iv = IV;
  if (keyStr) {
    key = CryptoJS.enc.Utf8.parse(keyStr);
    iv = CryptoJS.enc.Utf8.parse(ivStr);
  }

  let srcs = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  // console.log("-=-=-=-", encrypted.ciphertext)
  return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
};

/**
 * 解密
 * @param word    数据源
 * @param keyStr   可不传
 * @param ivStr    可不传
 * @returns {any}
 * @constructor
 */
const Decrypt = (word: any, keyStr?: any, ivStr?: any) => {
  let key = KEY;
  let iv = IV;

  if (keyStr) {
    key = CryptoJS.enc.Utf8.parse(keyStr);
    iv = CryptoJS.enc.Utf8.parse(ivStr);
  }
  let decrypt = CryptoJS.AES.decrypt(word.data, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  let decryptedStr = CryptoJS.enc.Utf8.stringify(decrypt).toString();
  return JSON.parse(decryptedStr);
};

export { Decrypt, Encrypt };
