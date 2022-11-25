let res = 0;

let cM = function func2(id){

    let ID = 'amount-' + id;
    let amount = document.getElementById(ID);
    if(this.count != 0 || this.count > 0){
        res -= this.cost;
        this.count -= 1;
    }
    console.log(this.count);
    resultat.innerHTML = ` <h1> ИТОГОВАЯ ЦЕНА : = ${res} </h1> `;
    amount.innerHTML = `${this.count}`;
};

let cP = function func1(id){

    let ID = 'amount-' + id;
    let amount = document.getElementById(ID);
    res += this.cost;
    this.count += 1;
    console.log(this.count);
    resultat.innerHTML = ` <h1> ИТОГОВАЯ ЦЕНА : = ${res} </h1> `;
    amount.innerHTML = `${this.count}`;
};

let iP = function inputPlus(id){

    let ID = 'amount-' + id;
    let amount = document.getElementById(ID);
    let counter = document.getElementById(id);
    this.count += +counter.value;
    res += +counter.value * this.cost;
    counter.value = ``;
    resultat.innerHTML = ` <h1> ИТОГОВАЯ ЦЕНА : = ${res} </h1> `;
    amount.innerHTML = `${this.count}`;
};

let iM = function inputMinus(id){

    let ID = 'amount-' + id;
    let amount = document.getElementById(ID);
    let counter = document.getElementById(id);
    if(this.count != 0 || this.count > 0){
        res -= this.cost * this.count;
        this.count = 0;
    }
    counter.value = ``;
    resultat.innerHTML = ` <h1> ИТОГОВАЯ ЦЕНА : = ${res} </h1> `;
    amount.innerHTML = `${this.count}`;
};

let mass = [

    {
        name: "------------------ХЛАМ-----------------",
        cost: 0,
        count: 0,
    
    },
{
    name: "Арамидная ткань",
    cost: 225,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Армированная изолента",
    cost: 350,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Белая ПВХ изолента",
    cost: 225,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Баллон для оружейной смазки",
    cost: 350,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Бронепластина СВМП",
    cost: 600,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Боковая пластина СВМП",
    cost: 600,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Бронепластина из балистической ткани",
    cost: 750,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Боковая керамическая пластина",
    cost: 800,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Клей",
    cost: 250,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Инструменты для грубой работы",
    cost: 1200,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Инструменты для тонкой работы",
    cost: 1700,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Инструменты для калибровки",
    cost: 2000,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Изолента из лавсана",
    cost: 400,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Изолента из стекловолокна",
    cost: 500,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Красная хб изолента",
    cost: 200,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Масло Русак",
    cost: 250,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Набор для чистки оружия",
    cost: 250,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Поврежденная керамическая бронепластина",
    cost: 500,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Пластина с антирикошетным покрытием",
    cost: 1000,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Серая ПВХ изолента",
    cost: 250,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Ткань из РИП-СТОПА",
    cost: 350,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Ткань из сукна",
    cost: 250,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Ткань из саржи",
    cost: 500,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Ткань изофлекс",
    cost: 400,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Ткань из серебристкого волокна",
    cost: 400,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Зеленая ХБ изолента",
    cost: 250,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Часть автомата",
    cost: 450,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "------------------ХЛАМ-----------------",
    cost: 0,
    count: 0,
},
{
    name: "---------------------------------------------------",
    cost: 0,
    count: 0,
},
{
    name: "------------------ДОКУМЕНТЫ И КЕЙСЫ-----------------",
    cost: 0,
    count: 0,

},
{
    name: "Административные документы",
    cost: 1250,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Бумаги с записями",
    cost: 750,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Внутреннее распоряжение №423",
    cost: 1250,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "График поставок",
    cost: 1400,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Документы с уничтоженного блокпоста",
    cost: 2000,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Документы из Припяти",
    cost: 1500,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Документы о поставках изделия №62",
    cost: 1500,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Журнал дежурной смены",
    cost: 750,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Зеленый кейс",
    cost: 1250,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Коричневый кейс",
    cost: 950,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Мини-кейс с пометкой",
    cost: 1800,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Папка с приказом",
    cost: 1250,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Приказ №526",
    cost: 1000,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Распоряжение о переводе",
    cost: 1250,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Схема путепровода",
    cost: 1000,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Ржавый кейс",
    cost: 650,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Синий кейс",
    cost: 1500,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "------------------ДОКУМЕНТЫ И КЕЙСЫ-----------------",
    cost: 0,
    count: 0,

},
{
    name: "---------------------------------------------------",
    cost: 0,
    count: 0,
},
{
    name: "------------------ШКУРЫ И ЧАСТИ-----------------",
    cost: 0,
    count: 0,

},
{
    name: "Плоть, Собака, Кабан",
    cost: 225,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Голова Тушкана",
    cost: 200,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Голова Снорка",
    cost: 475,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Кожа Карлика",
    cost: 425,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Коготь Химеры",
    cost: 1500,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Кожа Бюрера",
    cost: 500,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Клык Королевского-кабана",
    cost: 575,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},

{
    name: "Мясо зомби",
    cost: 225,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Мозг Контролёра",
    cost: 1250,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Рука Зомби",
    cost: 350,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Рука Излома",
    cost: 450,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Рука Полтергейста",
    cost: 750,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Рука Контролёра",
    cost: 1250,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Рука Карлика",
    cost: 450,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Рука Бюрера",
    cost: 700,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Рука Снорка",
    cost: 400,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Хвост Пси-Собаки",
    cost: 400,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Хвост Псевдо-Собаки",
    cost: 325,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Шкура Псевдо-Собаки",
    cost: 275,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Шкура Пси-Собаки",
    cost: 350,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Шкура Излома",
    cost: 375,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Шкура Химеры",
    cost: 1250,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Шкура Кровососа",
    cost: 450,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Шкура Полтергейста",
    cost: 600,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Шкура Королевского-Кабана",
    cost: 550,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Щупальце Кровососа",
    cost: 525,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "------------------ШКУРЫ И ЧАСТИ-----------------",
    cost: 0,
    count: 0,

},
{
    name: "---------------------------------------------------",
    cost: 0,
    count: 0,
},
{
    name: "------------------МУСОР И СИГАРЕТЫ-----------------",
    cost: 0,
    count: 0,

},
{
    name: "Любые сигареты",
    cost: 200,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Банка с краской",
    cost: 250,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Спички",
    cost: 75,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Сигара",
    cost: 100,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Сапоги",
    cost: 100,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "------------------МУСОР И СИГАРЕТЫ-----------------",
    cost: 0,
    count: 0,

},
{
    name: "---------------------------------------------------",
    cost: 0,
    count: 0,
},
{
    name: "------------------МЕДИЦИНСКИЙ ХЛАМ-----------------",
    cost: 0,
    count: 0,
},
{
    name: "Бинт",
    cost: 25,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Банка старых таблеток",
    cost: 550,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Старая армейская аптечка",
    cost: 270,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Старая АИ-2",
    cost: 150,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Старая Мед. Сумка",
    cost: 1400,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Использованный Фельдшерский набор",
    cost: 700,
    count: 0,

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "------------------МЕДИЦИНСКИЙ ХЛАМ-----------------",
    cost: 0,
    count: 0,

},
];


let ul = document.getElementById('list');
let resultat = document.getElementById('resultat');
resultat.innerHTML = ` <h1> ИТОГОВАЯ ЦЕНА : = ${res} </h1> `;


mass.map((person, i) => (
    ul.innerHTML += 
    ` 
    <li class="element"> 

    ${person.name} = <div style="display: inline; color:white;"> ${person.cost} rub. </div> 

    . . Количество : <div class="amount" id="amount-${i}"> ${person.count} </div>
        <button class="btn-plus" onClick="mass[${i}].counterPlus(${i})"> +1 </button> 
        <button class="btn-minus" onClick="mass[${i}].counterMinus(${i})"> -1 </button> 
    . . +Несколько : <input id="${i}" type="number"> <button class="btn-plus" onClick="mass[${i}].inputPlus(${i})"> ++ </button> <button class="btn-minus" onClick="mass[${i}].inputMinus(${i})"> Очистить предмет </button> </input> 
        
    </li>  
    `
));