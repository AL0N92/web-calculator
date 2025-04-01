

const buttons = document.querySelectorAll(".calc-btn"); // Получили все кнопки
const workPlace = document.querySelector(".calc-work-text");// Получили рабочую область


const destroydButtons = document.querySelectorAll(".calc-action-destroyd");

const num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const action = ['+', '-', '/', '*'];
const action_result = '=';

let countNum = 0;


/* Используем метод forEach для перебора значение NodeList - списка кнопок, который мы получили */
buttons.forEach(button => {
    button.addEventListener('click', () => {
               

        // Ввод обычных чисел
        if(num.includes(button.textContent)){
            if(countNum < 13){
                workPlace.append(button.textContent);
                countNum++;
                console.log(countNum);
            }
            else{
                alert('Вы не можете ввести больше 13 чисел');
            }
        }

        // Ввод знаков действий
        if(action.includes(button.textContent)){
            if(workPlace.textContent == `
                    
                `){} // Почему-то поле не пустое до начала ввода, поэтому так мы проверяем что мы не можем использовать кнопки действий
            else {
                if(!action.includes(getLastSymbol()) ){ // Проверяем что последний символ на экране не был действием
                    // a = workPlace.textContent; // Сохраняем значения до знака действия
                    workPlace.append(button.textContent);
                    if(countNum >= 13){
                        countNum = 0;
                    }
                }
            }
        }

        // Ввод стирающих действий
        if(button.classList.contains('Ac')){
            workPlace.textContent = '';
        }
        if(button.classList.contains('de')){
            workPlace.textContent = workPlace.textContent.slice(0, -1);
        }

        // Ввод точки
        if(button.classList.contains('calc-dot')){
            workPlace.textContent += ".";
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