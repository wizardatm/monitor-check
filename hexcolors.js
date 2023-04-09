const textHud = document.getElementById('text-area');
const footer = document.getElementById('footer');

let changeFunc = function changeColor(){ 
    let result = '';
    let symbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "a", "b", "c", "d", "e", "f" ];

         for (i = 0; i < 6; i++){
            random = Math.floor(Math.random() * symbols.length);
            result += symbols[random]
        } 
    document.getElementsByTagName('body')[0].style.backgroundColor = "#" + result;
    if (textHud != null && footer != null) {
        hideHUD();
    }
}

const hideHUD = function(){
    textHud.remove();
    footer.remove();
}

document.onclick = changeFunc;

function runOnKeys(func, ...codes) {
    let pressed = new Set();

    document.addEventListener('keydown', function(event) {
      pressed.add(event.code);

      for (let code of codes) { 
        if (!pressed.has(code)) {
          return;
        }
      }

      pressed.clear();

      func();
    });

    document.addEventListener('keyup', function(event) {
      pressed.delete(event.code);
    });

  }

  runOnKeys(
    () => alert("сделал тимурка wizardatm специально для максимки klade или yact0 и всего белого ветра, привет с кипра"),
    "KeyW",
    "KeyI",
    "KeyZ"
  ); 

document.addEventListener("keydown", (event) => {
    if (event.Code == 32) {
      return;
    }
    changeFunc(); 
  });

