

const buttons = document.querySelectorAll(".calc-btn"); // Получили все кнопки
const workPlace = document.querySelector(".calc-work-text");// Получили рабочую область


const destroydButtons = document.querySelectorAll(".calc-action-destroyd");

const num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const action = ['+', '-', '/', '*'];
const action_result = '=';

let a;
let b = 5;

/* Используем метод forEach для перебора значение NodeList - списка кнопок, который мы получили */
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Ввод обычных чисел
        if(num.includes(button.textContent)){
            workPlace.append(button.textContent);
        }

        // Ввод знаков действий
        if(action.includes(button.textContent)){
            if(workPlace.textContent == `
                    
                `){} // Почему-то поле не пустое до начала ввода, поэтому так мы проверяем что мы не можем использовать кнопки действий
            else {
                if(!action.includes(getLastSymbol()) ){ // Проверяем что последний символ на экране не был действием
                    // a = workPlace.textContent; // Сохраняем значения до знака действия
                    workPlace.append(button.textContent);
                }
            }
        }

        // Ввод стирающих действий
        if(button.querySelector == destroydButtons){
            console.log('Опа!');
        }

        // Вывод результата
        if(button.textContent == action_result){
            var expression = workPlace.textContent;
            expression = expression.split(' ').join('').trim(); // Удаляем "медвежью услугу" пустые строки, которые по умолчанию есть.
            const result = new Function(`return ${expression}`)();
            
            console.log(expression);
            console.log(result);

            workPlace.textContent = result;
        }
    });
});

function getLastSymbol(){
    return workPlace.textContent.slice(-1);
}