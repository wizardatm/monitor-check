const textHud = document.getElementById('text-area');
const footer = document.getElementById('footer');
let body = document.getElementsByTagName('body'); 

let changeFunc = function changeColor(){ 
    let result = '';
    let symbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "a", "b", "c", "d", "e", "f" ];

         for (i = 0; i < 6; i++){
            random = Math.floor(Math.random() * symbols.length);
            result += symbols[random]
        } 

    document.getElementsByTagName('body')[0].style.backgroundColor = "#" + result;
    
    hideHud();
}

document.onclick = changeFunc;

function deleteHud(){

  if (textHud != null && footer != null) {
    textHud.remove();
    footer.remove();4

    }
}

function revealHud(){

  if (document.querySelectorAll( 'body > div' )[0].style.display = 'none'
  &&  document.querySelectorAll( 'body > div' )[1].style.display == 'none')
    document.querySelectorAll( 'body > div' )[0].style.display = 'inline';
    document.querySelectorAll( 'body > div' )[1].style.display = 'inline';

}

function hideHud(){

  if (document.querySelectorAll( 'body > div' )[0].style.display != 'none'
  &&  document.querySelectorAll( 'body > div' )[1].style.display != 'none')
    document.querySelectorAll( 'body > div' )[0].style.display = 'none';
    document.querySelectorAll( 'body > div' )[1].style.display = 'none';

}

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


window.addEventListener('keypress', event => {
  if (event.keyCode === 32 || event.keyCode === 13){
    changeFunc();

  } else if ( event.keyCode === 49){
    document.getElementsByTagName('body')[0].style.backgroundColor =  '#f00';
    hideHud();

  } else if ( event.keyCode === 50){
    document.getElementsByTagName('body')[0].style.backgroundColor =  '#0f0';
    hideHud();
  }
  else if ( event.keyCode === 51){
    document.getElementsByTagName('body')[0].style.backgroundColor =  '#00f';
    hideHud();

  } else if ( event.keyCode === 52){
    document.getElementsByTagName('body')[0].style.backgroundColor =  '#fff';
    hideHud();

  } else if ( event.keyCode === 53){
    document.getElementsByTagName('body')[0].style.backgroundColor =  '#000';
    hideHud();

  } else if ( event.keyCode === 48){
    document.getElementsByTagName('body')[0].style.backgroundColor =  '#fff';
    revealHud();
  } 
})