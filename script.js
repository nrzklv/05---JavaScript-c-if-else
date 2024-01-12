// const price = 100;
// const discount = 20;
// const total = price - (price * discount / 100);
//
// if (total >= 90) {
//     alert("Не берём!")
// } else if(total < 80) {
//     alert("Дайте два!")
// } else {
//     alert("Берём!")
// }

// const red = "нет";
// const yellow = "нет";
// if (red === "да") {
//     alert("При красном сигнале стоим - дорогу переходить нельзя!");
// } else if(yellow === "нет") {
//     alert("При жёлтом сигнале нужно приготовиться, но дорогу пока переходить нельзя!");
// } else {
//     alert("Зелёный сигнал - переходим дорогу.");
// }

const signal = "green";
if (signal === "red") {
    alert ("Идти нельзя!");
} else if(signal === "yellow") {
    alert ("Приготовиться...");
} else {
    alert ("Переходим дорогу");
}