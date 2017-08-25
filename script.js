window.onload = function(){
  runThis();
}
function runThis() {
  let palColors = ['deeppink', 'pink', 'red', 'darkred', 'firebrick',
                   'white', 'darkorange', 'tomato', 'gold', 'yellow',
                   'peachpuff', 'maroon', 'brown', 'chocolate', 'green',
                   'darkgreen', 'lime', 'teal', 'blue', 'navy',
                   'lightskyblue', 'indigo', 'purple', 'gray', 'black' ];
  let currentColor = palColors[0];
  let toggleClick = false;
  window.addEventListener('mousedown', function(){
    toggleClick = true;
  })
  window.addEventListener('mouseup', function(){
    toggleClick = false;
  })

  function makeGrid(){
    for (let i = 0; i < 2000; i++) {
      let newDiv = document.createElement('div');
      document.getElementsByClassName("container")[0].append(newDiv);
      decorateSquare(newDiv);
      newDiv.addEventListener('click', function(ev){
        let clicked = ev.target;
        clicked.style.backgroundColor = currentColor;
      })
      newDiv.addEventListener('mouseenter', function(ev){
        let clicked = ev.target;
        if(toggleClick){
          clicked.style.backgroundColor = currentColor;
        }
      })
    }
  }

    function makePalette(){
      for (let i = 0; i < 25; i++) {
        let colorDiv = document.createElement('div');
        document.getElementsByClassName('container')[0].append(colorDiv);
        decoratePalette(colorDiv);
        colorDiv.style.backgroundColor = palColors[i];
        colorDiv.addEventListener('click', function(ev){
          let clicked = ev.target;
          currentColor = clicked.style.backgroundColor;
          currentColorDiv.style.backgroundColor = currentColor;
        })
        colorDiv.addEventListener('mousedown', function(ev){

        })
    }
  }

    function decorateSquare(sq){
      sq.style.border = '.5px solid lightgray';
      sq.style.width='9px';
      sq.style.height='9px';
      sq.style.position='relative';
      sq.style.float='left';
    }

    function decoratePalette(div){
      div.style.border = '.5px solid lightgray';
      div.style.margin = '5px 2px';
      div.style.borderRadius = '50%';
      div.style.height = '16px';
      div.style.width = '16px';
      div.style.postition = 'relative';
      div.style.float = 'left';
    }

    let currentColorDiv = document.createElement('div');
    document.getElementsByClassName("container")[0].append(currentColorDiv);
    currentColorDiv.innerHTML = "<h3>The background of this is the color you're rocking right now.</h3>";
    currentColorDiv.style.backgroundColor = currentColor;


  makeGrid();
  makePalette();
}
