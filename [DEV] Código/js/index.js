
/*------------Index--------------------------
adição de ícones ao clicar no background*/

document.addEventListener('click', (e) => {
    createElement(e.clientX, e.clientY);
  });

  function createElement(x, y) {

    var Icons = new Array();

    for(let i=0; i<10; i++){
      Icons[i]="img/icones/"+i+".png";
    }

    var random = Math.floor(Math.random() * Icons.length); //randomizar o ícone a adicionar

    const img = document.createElement('img'); //criar a imagem
    img.src = Icons[random];
    img.classList.add('add');
     

    /*Ajustar posição da imagem ao rato*/
    img.style.left = `${x - 25}px`; 
    img.style.top = `${y - 25}px`; 

    document.querySelector("body").appendChild(img);
  }
