import CryptoJS from 'crypto-js';
import { ENCRYPTION_KEY } from '../configs/crypto';


export const decryptText = (encryptedText) => {
  try {
     if (!encryptedText || !encryptedText.includes(':')) {
      return encryptedText;
    }

     const [ivHex, encrypted] = encryptedText.split(':');
    
     const iv = CryptoJS.enc.Hex.parse(ivHex);
    
     const key = CryptoJS.enc.Utf8.parse(ENCRYPTION_KEY.padEnd(32).slice(0, 32));
    
     const decrypted = CryptoJS.AES.decrypt(
      encrypted,
      key,
      { 
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      }
    );
    
     return decrypted.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error('Decryption error:', error);
    return 'Error decrypting message';
  }
};

export default decryptText;