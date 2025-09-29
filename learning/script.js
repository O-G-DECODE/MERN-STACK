function date() {
            document.getElementById('home').innerHTML = Date();
        }
function onebutton(){
    let demo = document.getElementById("demo")
}
 function hide() {
    const button = document.getElementById('btn')
            if (button.innerHTML === 'button hide' ){
             document.getElementById('demo').style.display='none';
             button.innerHTML = 'button show';
        } else {
            if (button.innerHTML === 'button show'){
                show();
              button.innerHTML = 'button hide';

        }
    }
 function show() {
             document.getElementById('demo').style.display='block';
        }     

}

function add() {
    let x = Number(document.getElementById("inp1").value);
    let y = Number(document.getElementById("inp2").value);
    let sum = x + y;
    document.getElementById("out").value = sum;
}

function swap(){
    let a = document.getElementById("inpo").value;
    let b = document.getElementById("inpt").value;

    document.getElementById("inpo").value = b;
    document.getElementById("inpt").value = a;

}



// if (condition == "10") - check only the value
// if (condition === "10") - check the value and datatype is equal


// creating a button with if condition , which show show and hide with if condition


// Assignment personal website and push to github.