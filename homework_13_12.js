let step = 'X'; /*создаем переменную */

function click_square(square_id) {
    document.getElementById(square_id).innerHTML = step; /*присваиваем переменной внутреннее наполнение блока*/
    /*console.log(document.getElementById(square_id).innerHTML);*/ /*проверяем корректность работы кода через консоль*/
    if (step == 'X') { 
        step = '0' /*смена значения переменной*/
        play2(); /*запуск функции объявления хода следующего игрока*/
        winner(); /*запуск функции определения победителя*/
    }
    else if (step == '0') {
        step = 'X'
        play1(); /*запуск функции объявления хода следующего игрока*/
        winner(); /*запуск функции определения победителя*/
    }
}
  

function play1() { /*функция объявления хода следующего игрока 1*/
    player1 = document.getElementById('player_1');
    console.log(document.getElementById('player_1'));
    player2 = document.getElementById('player_2');
    player1.style.visibility = 'visible'
    player2.style.visibility = 'hidden'
    player1.style.zIndex = '10'
    player1.style.left = '5vw'
}
function play2() { /*функция объявления хода следующего игрока 2*/
    player1 = document.getElementById('player_1');
    console.log(document.getElementById('player_1'));
    player2 = document.getElementById('player_2');
    player2.style.visibility = 'visible'
    player1.style.visibility = 'hidden'
    player2.style.zIndex = '10'
    player2.style.right = '5vw'
}
function winner() { /*функция определения победителя*/
    var win1 = document.getElementById('square_1').innerHTML;
    win2 = document.getElementById('square_2').innerHTML;
    win3 = document.getElementById('square_3').innerHTML;
    win4 = document.getElementById('square_4').innerHTML;
    win5 = document.getElementById('square_5').innerHTML;
    win6 = document.getElementById('square_6').innerHTML;
    win7 = document.getElementById('square_7').innerHTML;
    win8 = document.getElementById('square_8').innerHTML;
    win9 = document.getElementById('square_9').innerHTML;
    sq1 = document.getElementById('square_1');
    sq2 = document.getElementById('square_2');
    sq3 = document.getElementById('square_3');
    sq4 = document.getElementById('square_4');
    sq5 = document.getElementById('square_5');
    sq6 = document.getElementById('square_6');
    sq7 = document.getElementById('square_7');
    sq8 = document.getElementById('square_8');
    sq9 = document.getElementById('square_9');
    if (win1 == 'X' && win2 == 'X' && win3 == 'X') {
        winnerOne();
        sq1.style.backgroundColor = 'brown';
        sq2.style.backgroundColor = 'brown';
        sq3.style.backgroundColor = 'brown';
    } else if (win1 == 'X' && win4 == 'X' && win7 == 'X') {
        winnerOne();
        sq1.style.backgroundColor = 'brown';
        sq4.style.backgroundColor = 'brown';
        sq7.style.backgroundColor = 'brown';
    } else if (win1 == 'X' && win5 == 'X' && win9 == 'X') {
        winnerOne();
        sq1.style.backgroundColor = 'brown';
        sq5.style.backgroundColor = 'brown';
        sq9.style.backgroundColor = 'brown';
    } else if (win2 == 'X' && win5 == 'X' && win8 == 'X') {
        winnerOne();
        sq2.style.backgroundColor = 'brown';
        sq5.style.backgroundColor = 'brown';
        sq8.style.backgroundColor = 'brown';
    } else if (win3 == 'X' && win5 == 'X' && win7 == 'X') {
        winnerOne();
        sq3.style.backgroundColor = 'brown';
        sq5.style.backgroundColor = 'brown';
        sq7.style.backgroundColor = 'brown';
    } else if (win3 == 'X' && win6 == 'X' && win9 == 'X') {
        winnerOne();
        sq3.style.backgroundColor = 'brown';
        sq6.style.backgroundColor = 'brown';
        sq9.style.backgroundColor = 'brown';
    } else if (win7 == 'X' && win8 == 'X' && win9 == 'X') {
        winnerOne();
        sq7.style.backgroundColor = 'brown';
        sq8.style.backgroundColor = 'brown';
        sq9.style.backgroundColor = 'brown';
    } else if (win4 == 'X' && win5 == 'X' && win6 == 'X') {
        winnerOne();
        sq4.style.backgroundColor = 'brown';
        sq5.style.backgroundColor = 'brown';
        sq6.style.backgroundColor = 'brown';
    } else if (win1 == '0' && win2 == '0' && win3 == '0') {
        winnerTwo();
        sq1.style.backgroundColor = 'green';
        sq2.style.backgroundColor = 'green';
        sq3.style.backgroundColor = 'green';
    } else if (win1 == '0' && win4 == '0' && win7 == '0') {
        winnerTwo();
        sq1.style.backgroundColor = 'green';
        sq4.style.backgroundColor = 'green';
        sq7.style.backgroundColor = 'green';
    } else if (win1 == '0' && win5 == '0' && win9 == '0') {
        winnerTwo();
        sq1.style.backgroundColor = 'green';
        sq5.style.backgroundColor = 'green';
        sq9.style.backgroundColor = 'green';
    } else if (win2 == '0' && win5 == '0' && win8 == '0') {
        winnerTwo();
        sq2.style.backgroundColor = 'green';
        sq5.style.backgroundColor = 'green';
        sq8.style.backgroundColor = 'green';
    } else if (win3 == '0' && win5 == '0' && win7 == '0') {
        winnerTwo();
        sq3.style.backgroundColor = 'green';
        sq5.style.backgroundColor = 'green';
        sq7.style.backgroundColor = 'green';
    } else if (win3 == '0' && win6 == '0' && win9 == '0') {
        winnerTwo();
        sq3.style.backgroundColor = 'green';
        sq6.style.backgroundColor = 'green';
        sq9.style.backgroundColor = 'green';
    } else if (win7 == '0' && win8 == '0' && win9 == '0') {
        winnerTwo();
        sq7.style.backgroundColor = 'green';
        sq8.style.backgroundColor = 'green';
        sq9.style.backgroundColor = 'green';
    } else if (win4 == '0' && win5 == '0' && win6 == '0') {
        winnerTwo();
        sq4.style.backgroundColor = 'green';
        sq5.style.backgroundColor = 'green';
        sq6.style.backgroundColor = 'green';
    }
}
function winnerOne() { /*функция объявления победителя 1*/
    var winner1 = document.getElementById('winner_x');
    player2 = document.getElementById('player_2');
    back = document.getElementById('back');
    winner1.style.transition = '1s';
    winner1.style.visibility = 'visible';
    winner1.style.zIndex = '5';
    winner1.style.backgroundColor = 'orange';
    player2.style.visibility = 'hidden'
}
function winnerTwo() { /*функция объявления победителя 1*/
    var winner2 = document.getElementById('winner_0');
    player1 = document.getElementById('player_1');
    winner2.style.transition = '1s';
    winner2.style.visibility = 'visible';
    winner2.style.zIndex = '5';
    winner2.style.backgroundColor = 'yellow';
    player1.style.visibility = 'hidden'
}