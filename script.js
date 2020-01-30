
// HOMEWORK-4.1
button1.onclick=function(){
    var name = prompt('Введите имя');
    var yob = +prompt('Введите год рождения');

// If (isNaN(YOB)) { 
// alert('Введите правльное значение!');
// } 
    
//If(yob > 2020) { 
  //  alert('Введите правльное значение!');
//}else{
    console.log(name + ', ваш возраст ' + (2020-yob));
}

    
    
// HOMEWORK-4.2
button2.onclick=function(){
    function random(min, max){
        return Math.floor(Math.random() * (max + 1 - min) + min);
    }

    var problems = +prompt('Количество примеров')
    let Num1 = +prompt('min');
    let Num2 = +prompt('max');

    for (let i=0; i<problems; i++){
        let randomNum1 = random(Num1, Num2);
        let randomNum2 = random(Num1, Num2);
        let Answer = +prompt(randomNum1 + ' + ' + randomNum2);
        //console.log(Answer);
        console.log('Ваш ответ: ' + Answer + '. Это ' + (Answer == (randomNum1 + randomNum2) ? ' правильный ответ':' неправильный ответ. Правильный ответ: ' + (randomNum1 + randomNum2)));
    }
    }