/*case 1
const arr = [];
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}

for (let item in numbers) {
    if (numbers[item] >= 3) {
        arr.push(numbers[item]);

    }
}
console.log(arr);
*/


/*case 2
const today = {
    day: "thuesday",
    mounth: "jule",
    year: "2022",
}

console.log(`${today.day} — ${today.mounth} — ${today.year}`);
*/

/*case 3

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
const objToday = {};

getProperty = function (propertyName, value) {
    return objToday[propertyName] = value;
};


for (let i = 0; i < en.length; i++) {
    getProperty(en[i], ru[i]);
}
console.log(objToday);
*/

/*case 4

const week = {
    mon: "понедельник",
    tue: "вторник",
    wed: "среда",
    thu: "четверг",
    fri: "пятница",
    weekend: {
        sat: "суббота",
        sun: "воскресенье",
    }
}

let day = prompt('Введите день недели');
day = day.toLowerCase();

if (day.length > 2) {

    for (const item in week) {
        if (week[item] === day) {
            alert('Будний день!');

        }
    }

    for (const item in week.weekend) {
        if (week.weekend[item] === day) {
            alert('Выходной день!');

        }
    }
} else {
    day = Math.round(day);
    switch (day) {
        case 1:
            alert('Понедельник');
            break;
        case 2:
            alert('Вторник');
            break;
        case 3:
            alert('Среда');
            break;
        case 4:
            alert('Четверг');
            break;
        case 5:
            alert('Пятница');
            break;
        case 6:
            alert('Суббота');
            break;
        case 7:
            alert('Воскресенье');
            break;

        default:
            alert('Вы ввели неккоретное значение');
            break;
    }
}
*/

/*case 5

const numbers = {
    key1: {
        keyin1: 1,
        keyin2: 2,
        keyin3: 3,
    },
    key2: {
        keyin1: 4,
        keyin2: 5,
        keyin3: 6,
    },
}
let sum = Number();

for (const item in numbers.key1) {
    sum += numbers.key1[item];
}
for (const item in numbers.key2) {
    sum += numbers.key2[item];
}

console.log(sum);
*/

/*case 6

monthOfYear = {
    ru: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь',],
    en: ['january', 'February', 'March', 'april', 'may', 'june', 'jule', 'august', 'septamber', 'october', 'november', 'december',],
}

let language = prompt('Введите ru или en');
language = language.toLowerCase();
let month = prompt('Введите номер месяца, который вы хотите вывести');

if (language === 'ru') {

    alert(monthOfYear["ru"][month - 1]);

} else if (language === 'en') {

    alert(monthOfYear["en"][month - 1]);

} else {
    alert('Вы ввели некорректное значение');
}
*/






//Игры на сайте


//Игра1
let season;
const yearMounth = () => {
    let m = Number(prompt('Введите значение месяца'));
    if (m > 0 && m < 13) {
        if (m < 3 || m === 12) {
            season = 'Зима';
            alert(season);
            console.log(season);
        } else if (m < 6) {
            season = 'Весна';
            alert(season);
            console.log(season);

        } else if (m < 9) {
            season = 'Лето';
            alert(season);
            console.log(season);

        } else {
            season = 'Осень';
            alert(season);
            console.log(season);
        }

    } else {
        alert('Некорректное значение');
    }

}

//Игра 2
let lowwords = [];
let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

const guessWord = () => {

    words = words.sort(() => Math.random() - 0.5);
    alert(words);

    for (let i = 0; i < words.length; i++) {
        lowwords[i] = words[i].toLowerCase();
    }

    console.log(lowwords);

    let first = String(prompt('Какое было первое слово?'));
    first = first.toLowerCase();
    console.log(first);

    let last = String(prompt('Какое было последнее слово?'));
    last = last.toLowerCase();
    console.log(last);

    if (first === lowwords[0] && last === lowwords[lowwords.length - 1]) {
        alert('Вы молодец!');
    } else if (first === lowwords[0] || last === lowwords[lowwords.length - 1]) {
        alert('Вы близки к победе!');

    } else {
        alert('Вы ответили неверно :(');
    }

}

//Игра 3
let objRiddle = {
    answer: "утюг",
    help: ['Связано с одеждой', 'Работает от электричества'],

}

let i = 1;
let j = 2;
let k = 0;

const riddle = () => {
    do {
        let userAnswer = prompt('В Полотняной стране, по реке Простыне, Плывет пароход, То назад, то вперед, А за ним такая гладь — Ни морщинки не видать');
        userAnswer = userAnswer.toLocaleLowerCase();
        if (userAnswer === objRiddle.answer) {
            alert('Вы угадали!');
            break;
        } else if (i === 3) {
            alert('Вы проиграли');
            break;
        } else {
            alert(`Вы неугдали попробуйте снова ${j} раз(а)`);
            alert(`Подсказка:${objRiddle["help"][k]}`);
            i++;
            j--;
            k++;
        }

    } while (i <= 3);

}











const outputNumbers = (n) => {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr[i] = 'together';
        } else if (i % 3 === 0) {
            arr[i] = 'blockX';
        } else if (i % 5 === 0) {
            arr[i] = 'musivY';
        } else {
            arr[i] = i;
        }

    }
    arr.shift();
    return arr;
}

console.log(outputNumbers(27));
