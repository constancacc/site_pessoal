
/*------------index---------------------------
nota: o ronaldo está a funcionar*/

document.addEventListener('click', (e) => {
    createElement(e.clientX, e.clientY);
  });

  function createElement(x, y) {
    //console.log(1); -> saber se o ficheiro está a funcionar

    const img = document.createElement('img');
    img.src ='img/siu.png';
    img.classList.add('add');
     

    img.style.left = `${x - 25}px`; // Adjust for the center of the circle
    img.style.top = `${y - 25}px`; // Adjust for the center of the circle

    document.body.appendChild(img);
  }
