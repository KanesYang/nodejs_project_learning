'use strict';

const Enigma = require('./enigma');
const eng = new Enigma('magrathea');

let encodeString = eng.encode('Dont panic');
let decodeString = eng.decode(encodeString);

console.log("encoded: ", encodeString);
console.log("decoded: ", decodeString);

let qr = eng.qrgen("http://www.npmjs.com", "outImage.png");

qr ? console.log("QR code created") : console.log("QR code failed");