import CryptoJS from 'crypto-js';

const ENCRYPTION_KEY = import.meta.env.VITE_ENCRYPTION_KEY;

const decryptText = (encryptedText) => {
  try {
    if (!encryptedText || !encryptedText.includes(':')) return encryptedText;
    
    const [ivHex, encrypted] = encryptedText.split(':');
    const iv = CryptoJS.enc.Hex.parse(ivHex);
    
    if (!ENCRYPTION_KEY) throw new Error('Encryption key is missing');
    
    // Используем ключ в таком же формате, как в бэкенде
    const paddedKey = ENCRYPTION_KEY.padEnd(32).slice(0, 32);
    const key = CryptoJS.enc.Hex.parse(CryptoJS.enc.Utf8.parse(paddedKey).toString(CryptoJS.enc.Hex));
    
    const decrypted = CryptoJS.AES.decrypt(
      { ciphertext: CryptoJS.enc.Hex.parse(encrypted) },
      key,
      { iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }
    );
    
    const result = decrypted.toString(CryptoJS.enc.Utf8);
    if (!result) throw new Error('Decryption resulted in empty string');
    
    return result;
  } catch (error) {
    console.error('Ошибка дешифрования:', error);
    return 'Error while decrypting';
  }
};

export default decryptText;
