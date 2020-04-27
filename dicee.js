var h1 = document.getElementById('h1');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var button1 = document.getElementById('button-1');
var button2 = document.getElementById('button-2');
var ply1 = document.getElementById('ply1');
var ply2 = document.getElementById('ply2');
var P1Name = document.getElementById('Player-1');
var P2Name = document.getElementById('Player-2');
var mybtn = document.getElementById('mybtn');
var total1 = document.getElementById('total1');
var total2 = document.getElementById('total2');
var p1sc = document.getElementById('p1sc');
var p2sc = document.getElementById('p2sc');
var sc11 = document.getElementById('1stSc1');
var sc21 = document.getElementById('2ndSc1');
var sc31 = document.getElementById('3rdSc1');
var sc41 = document.getElementById('4thSc1');
var sc51 = document.getElementById('5thSc1');
var sc61 = document.getElementById('6thSc1');
var sc12 = document.getElementById('1stSc2');
var sc22 = document.getElementById('2ndSc2');
var sc32 = document.getElementById('3rdSc2');
var sc42 = document.getElementById('4thSc2');
var sc52 = document.getElementById('5thSc2');
var sc62 = document.getElementById('6thSc2');
var num1;
var num2;
var count1 = 6;
var count2 = 6;
var totalScore1 = 0;
var totalScore2 = 0;

function play1() {
  if (count1 == 0 && count2 == 0) {
    if (totalScore1 > totalScore2) {
      h1.innerText = ply1.innerText + ' WON!!!';
      h1.style.color = 'rgb(31, 251, 2)';
    } else if (totalScore2 > totalScore1) {
      h1.innerText = ply2.innerText + ' WON!!!';
      h1.style.color = 'rgb(31, 251, 2)';
    }
    button1.innerText = 'Stop!!!';
    button1.style.backgroundColor = 'grey';
    button1.style.transform = 'none';
    button1.style.cursor = 'not-allowed';
  } else if (count1 == 0) {
    button1.innerText = 'Stop!!!';
    button1.style.backgroundColor = 'grey';
    button1.style.transform = 'none';
    button1.style.cursor = 'not-allowed';
  } else if (count1 > 0) {
    num1 = Math.random();

    num1 = Math.floor(6 * num1 + 1);
    totalScore1 = totalScore1 + num1;
    total1.innerText = 'Your total score is: ' + totalScore1;
    var img11 = 'images/dice' + num1 + '.png';
    img1.src = img11;
    h1.innerText = 'Play in Progress';
    switch (count1) {
      case 6:
        sc11.innerText = 'i) ' + num1;
        break;
      case 5:
        sc21.innerText = 'ii) ' + num1;
        break;
      case 4:
        sc31.innerText = 'iii) ' + num1;
        break;
      case 3:
        sc41.innerText = 'iv) ' + num1;
        break;
      case 2:
        sc51.innerText = 'v) ' + num1;
        break;
      case 1:
        sc61.innerText = 'vi) ' + num1;
        break;
    }
    count1--;
  }
}

function play2() {
  if (count1 == 0 && count2 == 0) {
    if (totalScore1 > totalScore2) {
      h1.innerText = ply1.innerText + ' WON!!!';
      h1.style.color = 'rgb(31, 251, 2)';
    } else if (totalScore2 > totalScore1) {
      h1.innerText = ply2.innerText + ' WON!!!';
      h1.style.color = 'rgb(31, 251, 2)';
    }

    button2.innerText = 'Stop!!!';
    button2.style.backgroundColor = 'grey';
    button2.style.transform = 'none';
    button2.style.cursor = 'not-allowed';
  } else if (count2 == 0) {
    button2.innerText = 'Stop!!!';
    button2.style.backgroundColor = 'grey';
    button2.style.transform = 'none';
    button2.style.cursor = 'not-allowed';
  } else if (count2 > 0) {
    num2 = Math.random();

    num2 = Math.floor(6 * num2 + 1);
    totalScore2 = totalScore2 + num2;
    total2.innerText = 'Your total score is: ' + totalScore2;
    var img22 = 'images/dice' + num2 + '.png';
    img2.src = img22;
    h1.innerText = 'Play in Progress';
    switch (count2) {
      case 6:
        sc12.innerText = 'i) ' + num2;
        break;
      case 5:
        sc22.innerText = 'ii)   ' + num2;
        break;
      case 4:
        sc32.innerText = 'iii)  ' + num2;
        break;
      case 3:
        sc42.innerText = 'iv)   ' + num2;
        break;
      case 2:
        sc52.innerText = 'v)   ' + num2;
        break;
      case 1:
        sc62.innerText = 'vi)   ' + num2;
        break;
    }
    count2--;
  }
}

function changeName() {
  var str1 = P1Name.value;
  var str2 = P2Name.value;
  if (str1 != '') {
    ply1.innerText = str1;
    p1sc.innerText = str1 + ' Score';
    button1.innerText = str1 + ' Click Me';
  }
  if (str2 != '') {
    ply2.innerText = str2;
    p2sc.innerText = str2 + ' Score';
    button2.innerText = str2 + ' Click Me';
  }
}

button1.addEventListener('click', play1);
button2.addEventListener('click', play2);

mybtn.addEventListener('click', changeName);
