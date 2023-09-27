

alert('Assalomu aleykum saytga xush kelibsiz !')


var elTitle = document.querySelector('.Title');
var elNumber = document.querySelector('.number');
var elBtn = document.querySelector('.Btn');

var a = 500 * 11000;
var b = 250 * 11000;
var c = 120 * 13000;

var v = (a + b + c);
elTitle.textContent= "sayohat uchun yetarli mablag' - " + v +"so'm";
elBtn.addEventListener('click', function() {
    if (elNumber.value > v) {
        elTitle.textContent ="Tabriklayman sayohat uchun mablag' yetdi, sizning pulingiz -" + elNumber.value + "so'm";
    } else {
        elTitle.textContent ="Afsuski sayohat uchun mablag' yetmaydi, sizning pulingiz -" + elNumber.value + "so'm";
    }
});