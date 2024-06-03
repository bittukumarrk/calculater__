
let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = '';

buttons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        if (event.target.innerHTML === 'Del') {
            string = string.substring(0, string.length - 1);
        } else if (event.target.innerHTML === 'CE') {
            string = '';
        } else if (event.target.innerHTML === '=') {
            try {
                string = eval(string).toString();
            } catch (error) {
                string = 'Error';
            }
        } else {
            string += event.target.innerHTML;
        }
        display.value = string;
    });
});
