/*------------Projetos--------------------------
adição dos Projetos ao clicar no background*/

document.addEventListener('click', (e) => {
    createElement(e.clientX, e.clientY);
  });

  function createElement(x, y) {

    var Icons = new Array();

    for(let i=0; i<12; i++){
      Icons[i]="../img/projetos/"+i+".png";
    }

    var random = Math.floor(Math.random() * Icons.length); //randomizar imagem a adicionar
    

    const img = document.createElement('img'); //criar a imagem
    img.src = Icons[random];
    img.classList.add('add_proj');
     
    /*Ajustar posição da imagem ao rato*/

    img.style.left = `${x - 25}px`; 
    img.style.top = `${y - 25}px`; 

    document.body.appendChild(img);
  }
