// utils.js
function generateNonceStr(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let nonceStr = '';
    for (let i = 0; i < length; i++) {
        nonceStr += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return nonceStr;
}