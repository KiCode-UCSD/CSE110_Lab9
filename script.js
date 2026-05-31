//script.js

TrackJS.track('Testing TrackJS!');

class TypeError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "TypeError"; // (2)
  }
}

class UndefinedError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "UndefinedError"; // (2)
  }
}

window.onerror = function (message, source, lineno, colno, error) {
    //console.error(`Global error caught: ${message} at ${source}:${lineno}:${colno}`, error);
    // Optionally, handle the error (e.g., log to server, show alert, etc.)
    console.log("global error caught.")
};

let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    try {
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    }
    catch (err) {
        if (err instanceof ReferenceError) {
            throw new TypeError("Cannot perform operation on incompatible type");
        }
        if (err instanceof SyntaxError) {
            if (firstNum.type === undefined || secondNum.type === undefined) {
                throw new UndefinedError("One or more inputs undefined");
            }
        }
    }
    finally {
        console.info("running finally...");
    }
});

//const errBtnSection = document.querySelector("#error-btns");
let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

errorBtns.forEach(e => e.addEventListener('click', function(){ consoleButtonHandler(e) }));

function consoleButtonHandler(btn) {
    if (btn.innerHTML === "Console Log") {
        console.log("This is a console log message.");
    }
    else if (btn.innerHTML === "Console Error") {
        console.error("This is an error button. It causes errors.");
    }
    else if (btn.innerHTML === "Console Count") {
        console.count('% time used clicking this');
    }
    else if (btn.innerHTML === "Console Warn") {
        console.warn("This is your last warning...");
    }
    else if (btn.innerHTML === "Console Assert") {
        console.assert();
    }
    else if (btn.innerHTML === "Console Clear") {
        console.clear();
    }
    else if (btn.innerHTML === "Console Dir") {
        console.dir(errorBtns);
    }
    else if (btn.innerHTML === "Console dirxml") {
        console.dirxml(errorBtns);
    }
    else if (btn.innerHTML === "Console Group Start") {
        console.group('ConsoleCon:');
    }
    else if (btn.innerHTML === "Console Group End") {
        console.groupEnd();
    }
    else if (btn.innerHTML === "Console Table") {
        var people = [
        {
            first: 'Audria',
            last: 'Montalvo',
            type: 'TA'
        },
        {
            first: 'Thomas',
            middle: 'A.',
            last: 'Powell',
            type: 'Professor',
        },
        {
            first: 'Ki',
            last: 'Diaz',
            type: 'Student'
        }
        ];
        console.table(people);
    }
    else if (btn.innerHTML === "Start Timer") {
        console.time('speedrun');
    }
    else if (btn.innerHTML === "End Timer") {
        console.timeEnd('speedrun');
    }
    else if (btn.innerHTML === "Console Trace") {
        const firstCircle = () => { secondCircle(); };
        const secondCircle = () => { thirdCircle(); };
        const thirdCircle = () => { fourthCircle(); };
        const fourthCircle = () => { fifthCircle(); };
        const fifthCircle = () => { sixthCircle(); };
        const sixthCircle = () => { seventhCircle(); };
        const seventhCircle = () => { console.trace(); };
        firstCircle();
    }
    else if (btn.innerHTML === "Trigger a Global Error") {
        console.cause("error");
    }
    else {
        console.log("Button press not recognized: " + btn.innerHTML);
    }
}
