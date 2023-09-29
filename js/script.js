alert('Assalomu aleykum saytga xush kelibsiz !');

var elTitle = document.querySelector('.Title');
var elNumber = document.querySelector('.number');
var elBtn = document.querySelector('.Btn');

var a = 500 * 11000;
var b = 250 * 11000;
var c = 120 * 13000;
var v = a + b + c;
var remainingAmount = v - elNumber.value;
// var d = v - elNumber.value
elTitle.textContent = "sayohat uchun yetarli mablag' :    " + v + " so'm";

elBtn.addEventListener('click', function() {
    if (elNumber.value > v || elNumber.value == v) {
        elTitle.textContent = "Tabriklaymiz, sayohat uchun yetarli mablag'ingiz bor! Sizning pulingiz: " + elNumber.value + " so'm";
        elBtn.disabled = true;
    } else {
        elTitle.textContent = "Afsuski, sayohat uchun mablag' yetarli emas. Sizning pulingiz: " + elNumber.value + " so'm     ,";
        var qoldi = v - elNumber.value;
        if (qoldi > 0) {
            elTitle.textContent += "  Sizga yana : " + qoldi + " so'm   "+"yetmadi";
        }
    }
});