
/*case 1
const arr = [1, 2, 3, 4];
let arr2 = [];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    arr2[i] = arr[i] * arr[i];
    sum += arr2[i];
}
console.log(arr2);
console.log(sum);
*/

/*case 2
function RandomMax(max) {
    return Math.round(Math.random() * max);
}

let arr1 = [];
let arr2 = [];
for (let i = 0; i < 5; i++) {
    arr1[i] = RandomMax(10);
    while (arr1[i] === 3) {
        arr1[i] = RandomMax(10);
    }
    arr2[i] = arr1[i] * 1.1;
}

console.log(arr1);
console.log(arr2);
*/

/*case 3

function Dividend() {
    let salary = +prompt('ЗП за год');
    let boolen = confirm('хотите перевести в доллары?');

    if (boolen) {
        alert(`${salary * 1.04} руб.`);

    } else {
        alert(`${salary * 1.08} руб.`);

    }
}
Dividend();
*/

/*case 4

let age = +prompt('Ваш возраст');

if (age >= 20 && age <= 100) {
    switch (age % 10) {
        case 1:
            console.log(`${age} год`);
            break;
        case 2: case 3: case 4:
            console.log(`${age} года`);
            break;
        default:
            console.log(`${age} лет`);
            break;
    }
} else {
    console.log('Ввели некорретное значение');
}
*/

/*case 5

let arr1 = [];

for (let i = 0; i < 3; i++) {
    for (let y = 0; y < 3; y++) {
        arr1.push(y+1);
    }
}
console.log(arr1);
*/


