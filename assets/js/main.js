$(document).ready(function(){

  var randomNum1;
  var randomNum2;
  var randomNum3;
  var randomNum4;
  var randomNum5;

  $('#start').click(function(){
    generateNumbers();
    showNumbers(randomNum1, randomNum2, randomNum3, randomNum4, randomNum5, '#display');
    $('#start').hide();
    setTimeout(function(){
      hideNumbers('#display');
    }, 5000);
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
});