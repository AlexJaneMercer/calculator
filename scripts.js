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
        img: "images/0.png",
    
    },
{
    name: "Арамидная ткань",
    cost: 225,
    count: 0,
    img: "images/16.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Армированная изолента",
    cost: 350,
    count: 0,
    img: "images/25.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Брезентовая ткань",
    cost: 250,
    count: 0,
    img: "images/26.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Белая ПВХ изолента",
    cost: 225,
    count: 0,
    img: "images/35.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Баллон для оружейной смазки",
    cost: 350,
    count: 0,
    img: "images/20.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Бронепластина СВМП",
    cost: 600,
    count: 0,
    img: "images/23.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
/*{
    name: "Боковая пластина СВМП",
    cost: 600,
    count: 0,
    img: "",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},*/
{
    name: "Боковая бронепластина из титанового сплава",
    cost: 650,
    count: 0,
    img: "images/22.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Бронепластина из балистической ткани",
    cost: 750,
    count: 0,
    img: "images/21.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
/*{
    name: "Боковая керамическая пластина",
    cost: 800,
    count: 0,
    img: "",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},*/
{
    name: "Клей",
    cost: 250,
    count: 0,
    img: "images/32.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Инструменты для грубой работы",
    cost: 1200,
    count: 0,
    img: "images/41.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Инструменты для тонкой работы",
    cost: 1700,
    count: 0,
    img: "images/40.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Инструменты для калибровки",
    cost: 2000,
    count: 0,
    img: "images/39.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Изолента из лавсана",
    cost: 400,
    count: 0,
    img: "images/30.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Изолента из стекловолокна",
    cost: 500,
    count: 0,
    img: "images/43.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Красная хб изолента",
    cost: 200,
    count: 0,
    img: "images/46.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Масло Русак",
    cost: 250,
    count: 0,
    img: "images/31.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Набор для чистки оружия",
    cost: 250,
    count: 0,
    img: "images/28.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Поврежденная керамическая бронепластина",
    cost: 500,
    count: 0,
    img: "images/42.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
/*{
    name: "Пластина с антирикошетным покрытием",
    cost: 1000,
    count: 0,
    img: "",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},*/
{
    name: "Серая ПВХ изолента",
    cost: 250,
    count: 0,
    img: "images/85.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Самодельная плита из углеродного волокна",
    cost: 400,
    count: 0,
    img: "images/29.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Ткань из РИП-СТОПА",
    cost: 350,
    count: 0,
    img: "images/17.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Ткань из сукна",
    cost: 250,
    count: 0,
    img: "images/24.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
/*{
    name: "Ткань из саржи",
    cost: 500,
    count: 0,
    img: "",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},*/
{
    name: "Ткань изофлекс",
    cost: 400,
    count: 0,
    img: "images/19.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Ткань из серебристкого волокна",
    cost: 400,
    count: 0,
    img: "images/18.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Зеленая ХБ изолента",
    cost: 250,
    count: 0,
    img: "images/44.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Часть автомата",
    cost: 450,
    count: 0,
    img: "images/27.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "------------------ХЛАМ-----------------",
    cost: 0,
    count: 0,
    img: "images/0.png",
},

{
    name: "---------------------------------------------------",
    cost: 0,
    count: 0,
    img: "images/0.png",
},
{
    name: "------------------ДОКУМЕНТЫ И КЕЙСЫ-----------------",
    cost: 0,
    count: 0,
    img: "images/0.png",

},
{
    name: "Административные документы",
    cost: 1250,
    count: 0,
    img: "images/78.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Бумаги с записями",
    cost: 750,
    count: 0,
    img: "images/86.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Внутреннее распоряжение №423",
    cost: 1250,
    count: 0,
    img: "images/77.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "График поставок",
    cost: 1400,
    count: 0,
    img: "images/68.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Документы с уничтоженного блокпоста",
    cost: 2000,
    count: 0,
    img: "images/48.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Документы из Припяти",
    cost: 1500,
    count: 0,
    img: "images/74.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Документы о поставках изделия №62",
    cost: 1500,
    count: 0,
    img: "images/73.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Журнал дежурной смены",
    cost: 750,
    count: 0,
    img: "images/87.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Зеленый кейс",
    cost: 1250,
    count: 0,
    img: "images/37.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Коричневый кейс",
    cost: 950,
    count: 0,
    img: "images/36.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Мини-кейс с пометкой",
    cost: 1800,
    count: 0,
    img: "images/47.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Папка с приказом",
    cost: 1250,
    count: 0,
    img: "images/88.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Приказ №526",
    cost: 1000,
    count: 0,
    img: "images/79.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Распоряжение о переводе",
    cost: 1250,
    count: 0,
    img: "images/80.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Схема путепровода",
    cost: 1000,
    count: 0,
    img: "images/81.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Ржавый кейс",
    cost: 650,
    count: 0,
    img: "images/36.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Синий кейс",
    cost: 1500,
    count: 0,
    img: "images/38.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "------------------ДОКУМЕНТЫ И КЕЙСЫ-----------------",
    cost: 0,
    count: 0,
    img: "images/0.png",

},
{
    name: "---------------------------------------------------",
    cost: 0,
    count: 0,
    img: "images/0.png",
},
{
    name: "------------------ШКУРЫ И ЧАСТИ-----------------",
    cost: 0,
    count: 0,
    img: "images/0.png",

},
{
    name: "Плоть, Собака, Кабан",
    cost: 225,
    count: 0,
    img: "images/52.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Голова Тушкана",
    cost: 250,
    count: 0,
    img: "images/89.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Голова Снорка",
    cost: 600,
    count: 0,
    img: "images/82.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Кожа Карлика",
    cost: 525,
    count: 0,
    img: "images/50.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Коготь Химеры",
    cost: 1500,
    count: 0,
    img: "images/63.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Кожа Бюрера",
    cost: 600,
    count: 0,
    img: "images/54.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Клык Королевского-кабана",
    cost: 975,
    count: 0,
    img: "images/64.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},

{
    name: "Мясо зомби",
    cost: 225,
    count: 0,
    img: "images/56.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Мозг Контролёра",
    cost: 1250,
    count: 0,
    img: "images/65.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Рука Зомби",
    cost: 350,
    count: 0,
    img: "images/57.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Рука Излома",
    cost: 450,
    count: 0,
    img: "images/60.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Рука Полтергейста",
    cost: 750,
    count: 0,
    img: "images/66.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Рука Контролёра",
    cost: 1050,
    count: 0,
    img: "images/59.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Рука Карлика",
    cost: 850,
    count: 0,
    img: "images/57.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Рука Бюрера",
    cost: 800,
    count: 0,
    img: "images/61.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Рука Снорка",
    cost: 400,
    count: 0,
    img: "images/58.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Лапа псевдыча",
    cost: 2000,
    count: 0,
    img: "images/91.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Хвост Пси-Собаки",
    cost: 500,
    count: 0,
    img: "images/62.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Хвост Псевдо-Собаки",
    cost: 350,
    count: 0,
    img: "images/62.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Шкура Псевдо-Собаки",
    cost: 275,
    count: 0,
    img: "images/55.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Шкура Пси-Собаки",
    cost: 350,
    count: 0,
    img: "images/55.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Шкура Излома",
    cost: 305,
    count: 0,
    img: "images/83.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Шкура Химеры",
    cost: 1250,
    count: 0,
    img: "images/67.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Шкура Кровососа",
    cost: 450,
    count: 0,
    img: "images/51.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Шкура Полтергейста",
    cost: 700,
    count: 0,
    img: "images/84.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Шкура Королевского-Кабана",
    cost: 1150,
    count: 0,
    img: "images/52.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Шкура Псевдыча",
    cost: 1500,
    count: 0,
    img: "images/49.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Щупальце Кровососа",
    cost: 700,
    count: 0,
    img: "images/53.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "------------------ШКУРЫ И ЧАСТИ-----------------",
    cost: 0,
    count: 0,
    img: "images/0.png",

},
{
    name: "---------------------------------------------------",
    cost: 0,
    count: 0,
    img: "images/0.png",
},
    
{
    name: "------------------МУСОР И СИГАРЕТЫ-----------------",
    cost: 0,
    count: 0,
    img: "images/0.png",

},
{
    name: "Любые сигареты/монеты",
    cost: 200,
    count: 0,
    img: "images/75.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Банка с краской",
    cost: 250,
    count: 0,
    img: "images/90.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Баллон с газом",
    cost: 350,
    count: 0,
    img: "images/6.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Батарейка",
    cost: 130,
    count: 0,
    img: "images/15.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
    {
    name: "Конденсаторы/Резисторы",
    cost: 300,
    count: 0,
    img: "images/3.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Карты",
    cost: 100,
    count: 0,
    img: "images/1.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Пачка испорченных патронов",
    cost: 150,
    count: 0,
    img: "images/9.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Испорченные пистолетные патроны",
    cost: 80,
    count: 0,
    img: "images/14.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Спички",
    cost: 75,
    count: 0,
    img: "images/76.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Сапоги",
    cost: 150,
    count: 0,
    img: "images/4.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Спальник",
    cost: 240,
    count: 0,
    img: "images/8.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Сумка охотника",
    cost: 1700,
    count: 0,
    img: "images/7.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Текстолит",
    cost: 190,
    count: 0,
    img: "images/2.png",
    
    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Уголь",
    cost: 270,
    count: 0,
    img: "images/5.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "------------------МУСОР И СИГАРЕТЫ-----------------",
    cost: 0,
    count: 0,
    img: "images/0.png",

},
{
    name: "---------------------------------------------------",
    cost: 0,
    count: 0,
    img: "images/0.png",
},
{
    name: "------------------МЕДИЦИНСКИЙ ХЛАМ-----------------",
    cost: 0,
    count: 0,
    img: "images/0.png",
},
{
    name: "Бинт",
    cost: 25,
    count: 0,
    img : "images/92.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Банка старых таблеток",
    cost: 550,
    count: 0,
    img : "images/11.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Старая армейская аптечка",
    cost: 270,
    count: 0,
    img : "images/12.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Старая АИ-2",
    cost: 150,
    count: 0,
    img : "images/93.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Старая Мед. Сумка",
    cost: 1400,
    count: 0,
    img : "",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "Использованный Фельдшерский набор",
    cost: 700,
    count: 0,
    img : "images/13.png",

    counterPlus: cP,
    counterMinus: cM,
    inputPlus: iP,
    inputMinus: iM,
},
{
    name: "------------------МЕДИЦИНСКИЙ ХЛАМ-----------------",
    cost: 0,
    count: 0,
    img: "images/0.png",
},
];


let ul = document.getElementById('list');
let resultat = document.getElementById('resultat');
resultat.innerHTML = ` <h1> ИТОГОВАЯ ЦЕНА : = ${res} </h1> `;


mass.map((person, i) => (
    ul.innerHTML += 
    ` 
        <li class="element"> 
            <img src = ${person.img} class = "image">
            ${person.name} = <div style="display: inline; color:white;"> ${person.cost} rub. </div> 

            . . Количество : <div class="amount" id="amount-${i}"> ${person.count} </div>
                <button class="btn-plus" onClick="mass[${i}].counterPlus(${i})"> +1 </button> 
                <button class="btn-minus" onClick="mass[${i}].counterMinus(${i})"> -1 </button> 
            . . +Несколько : <input id="${i}" type="number"> <button class="btn-plus" onClick="mass[${i}].inputPlus(${i})"> ++ </button> <button class="btn-minus" onClick="mass[${i}].inputMinus(${i})"> Очистить предмет </button> </input> 
        </li>  
    `
));
