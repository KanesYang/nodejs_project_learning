'use strict';
const qr = require('qr-image');
const fs = require('fs');

//node qr "encode" this string "" qrImage.png

let dataToEncode = process.argv[2] || null;
let outImage = process.argv[3] || null;

if(dataToEncode !== null && outImage !== null){
    qr.image(dataToEncode, {
        type: 'png',
        size: 20
    }).pipe(fs.createReadStream(outImage));

    console.log("QR generated");
}
