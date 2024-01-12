const price = 100;
const discount = 20;
const total = price - (price * discount / 100);

if (total >= 90) {
    alert("Не берём!")
} else if(total < 80) {
    alert("Дайте два!")
} else {
    alert("Берём!")
}