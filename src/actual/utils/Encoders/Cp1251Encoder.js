export default class Cp1251Encoder {
    static encodeString(string){
        let res = '';
        for (let i = 0; i < string.length; i++) {
            res += this.encodeChar(string.charAt(i));
        }
        return res;
    }

    static encodeChar(c){
        let isKyr = function (str) {
            return /[а-я]/i.test(str);
        }
        let cp1251 = 'ЂЃ‚ѓ„…†‡€‰Љ‹ЊЌЋЏђ‘’“”•–—�™љ›њќћџ ЎўЈ¤Ґ¦§Ё©Є«¬*®Ї°±Ііґµ¶·\
ё№є»јЅѕїАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя';
        let p = isKyr(c) ? (cp1251.indexOf(c) + 128) : c.charCodeAt(0);
        let h = p.toString(16);
        if (h == 'a') {
            h = '0A';
        }
        return '%' + h;
    }
}