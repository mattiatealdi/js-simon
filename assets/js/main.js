$(document).ready(function(){

  var randomNum1;
  var randomNum2;
  var randomNum3;
  var randomNum4;
  var randomNum5;

  var user1;
  var user2;
  var user3;
  var user4;
  var user5;

  $('#start').click(function(){
    generateNumbers();
    showNumbers(randomNum1, randomNum2, randomNum3, randomNum4, randomNum5, '#display');
    $('#start').hide();
    setTimeout(function(){
      hideNumbers('#display');
    }, 5000);

    clearInterval(function(){
      getUserNumbers();
    },8000);


    if(randomNum1 == user1 || randomNum1 == user2 || randomNum1 == user3 || randomNum1 == user4 || randomNum1 == user5){
      console.log("hai indovinato il primo numero");
    }

    if(randomNum2 == user1 || randomNum2 == user2 || randomNum2 == user3 || randomNum2 == user4 || randomNum5 == user5){
      console.log("hai indovinato il secondo numero");
    }
    if(randomNum3 == user1 || randomNum3 == user2 || randomNum3 == user3 ||randomNum3 == user4 || randomNum3 == user5 ){
      console.log("Hai indovinato il terzo numero");
    }
    if(randomNum4 == user1 || randomNum4 == user2 || randomNum4 == user3 || randomNum4 == user4 || randomNum4 == user5){
      console.log("Hai indovinato il quarto numero");
    }
    if(randomNum5 == user1 ||randomNum5 == user2 || randomNum5 == user3 || randomNum5 == user4 ||randomNum5 == user5){
      console.log("hai indovinato il quinto numero");
    }


  });


  function generateNumbers(){
    randomNum1 = Math.ceil(Math.random() * 100);
    randomNum2 = Math.ceil(Math.random() * 100);
    randomNum3 = Math.ceil(Math.random() * 100);
    randomNum4 = Math.ceil(Math.random() * 100);
    randomNum5 = Math.ceil(Math.random() * 100);
  }

  function showNumbers(num1, num2, num3, num4, num5, target){
    $(target).text('' + num1 + ' '+ '' + num2 + ' ' + '' + num3 + ' '+ num4 + ' '+ num5);
  }

  function hideNumbers(target){
    $(target).hide();
  }

  function getUserNumbers(){
    user1 = parseInt(prompt("Inserisci un numero: "));
    user2 = parseInt(prompt("Inserisci un numero: "));
    user3 = parseInt(prompt("Inserisci un numero: "));
    user4 = parseInt(prompt("Inserisci un numero: "));
    user5 = parseInt(prompt("Inserisci un numero: "));

  }


});