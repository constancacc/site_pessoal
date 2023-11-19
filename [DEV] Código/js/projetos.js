//------------Projetos--------------------------


document.addEventListener('click', (e) => {
    createElement(e.clientX, e.clientY);
  });

  function createElement(x, y) {

    var Icons = new Array();

    for(let i=0; i<18; i++){
      Icons[i]="../img/projetos/"+i+".png";
    }

    var random = Math.floor(Math.random() * Icons.length);
    console.log(random);
    

    const img = document.createElement('img');
    img.src = Icons[random];
    img.classList.add('add_proj');
     
    /*Ajustar posição da imagem ao rato*/

    img.style.left = `${x - 25}px`; 
    img.style.top = `${y - 25}px`; 

    document.body.appendChild(img);
  }
