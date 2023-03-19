
function gameWord() {
let game = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
game = list.sort(() => Math.random() - 0.5);
alert(game)
let elementOne=(prompt("Чему равнялся первый элемент массива?"))
elementOne=elementOne.toLowerCase()
let elementTwo=(prompt("Чему равнялся последний элемент массива?"))
elementTwo=elementTwo.toLowerCase()
if (elementOne.toLowerCase()===game[0] && elementTwo.toLowerCase()===game[6]) {
  return alert("Вы угадали");
} 
else if (elementOne.toLowerCase()===game[0]||elementTwo.toLowerCase()===game[6]) {
  return alert ("Вы угадали один из двух правильных ответов");
}
else {
  return alert ("Вы не угадали ни одного правильного ответа");
}
}


function season () {
    let number=Number(prompt("Укажите месяц времени года — число от 1-12."));
      if (number===1 || number===2 || number===12) {
        return alert("Время года зима");
      } 
      else if (number===3 || number===4 || number===5) {
        return alert ("Время года весна");
      }
      else if (number===6 || number===7 ||number===8) {
        return alert ("Время года лето");
      }
      else if (number===9 || number===10 ||number===11) {
        return alert ("Время года осень");
      }
      else {
        alert ("Вы ввели параметр который не относится ко времени года");
      }
  }
