const numObject = {
    airtel: [
        '0701',
        '0708',
        '0802',
        '0808',
        '0812',
        '0901',
        '0902',
        '0904',
        '0907'
    ],
    mtn: [
        '07025',
        '07026',
        '0703',
        '0704',
        '0706',
        '0803',
        '0806',
        '0810',
        '0813',
        '0814',
        '0816',
        '0906',
        '0913'
    ],
    globacom: [
        '0705',
        '0805',
        '0807',
        '0811',
        '0815',
        '0905',
        '0915'
    ],
    smile: [
        '07020',
    ],
    starcomms: [
        '07028',
        '07029',
    ],
    ZoomMobile: [
        '0707',
    ],
    Ntel: [
        '0804'
    ],
    _9mobile: [
        '0809',
        '0817',
        '0818',
        '0909',
        '0908'
    ]
}

let arr;
const inputNum = document.querySelector('#num-input');
const output = document.querySelector('#output');

var objectFlattener = Object.keys(numObject).reduce((r, k) => {
    let flattened = r.concat(numObject[k]);
    return arr = flattened;
}, []);



inputNum.addEventListener('keypress', (e) => {
    console.log(typeof(inputNum.value), inputNum.value);
    if (inputNum.value.length + 1 === 4) {
        console.log(check('070123'), 'search');
    }

});




function check(num) {
    let numb = num;

    const search = arr.filter(a => {
        if (numb === a) {
            return 'yes';
        } else {
            return false;
        }
    })

    if (!search[0]) {
        return 'Invalid prefix';
    } else {
        return search[0];
    }

}












// Prefix Network
// 0701 Airtel Nigeria
// 07020 Smile
// 07025 MTN Nigeria(formerly Visafone)
// 07026 MTN Nigeria(formerly Visafone)
// 07027 Multi - Links
// 07028 Starcomms
// 07029 Starcomms
// 0703 MTN Nigeria
// 0704 MTN Nigeria(formerly Visafone)
// 0705 Globacom
// 0706 MTN Nigeria
// 0707 ZoomMobile(formerly Reltel)
// 0708 Airtel Nigeria
// 0709 Multi - Links
// 0802 Airtel Nigeria
// 0803 MTN Nigeria
// 0804 Ntel
// 0805 Globacom
// 0806 MTN Nigeria
// 0807 Globacom
// 0808 Airtel Nigeria
// 0809 9 mobile
// 0810 MTN Nigeria
// 0811 Globacom
// 0812 Airtel Nigeria
// 0813 MTN Nigeria
// 0814 MTN Nigeria
// 0815 Globacom
// 0816 MTN Nigeria
// 0817 9 mobile
// 0818 9 mobile
// 0819 Starcomms
// 0909 9 mobile
// 0908 9 mobile
// 0901 Airtel Nigeria
// 0902 Airtel Nigeria
// 0903 MTN Nigeria
// 0904 Airtel Nigeria
// 0905 Globacom
// 0906 MTN Nigeria
// 0907 Airtel Nigeria
// 0915 Globacom
// 0913 MTN Nigeria