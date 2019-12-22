const btn = document.getElementById('btn');


btn.addEventListener('click', function () {
  var num = parseInt(document.getElementById('num').value);
  var penultimo = 0,
      ultimo = 1
  if(num === ultimo){
    element = document.createElement('h2');
    content = document.createTextNode(ultimo);
    element.appendChild(content);
    document.body.appendChild(element);

  }else if (num === 2) {
    var fiboUno = document.createElement('h2'),
        fiboDos = document.createElement('h2')
    content1 = document.createTextNode(penultimo);
    content2 = document.createTextNode(ultimo);
    fiboUno.appendChild(content1);
    fiboDos.appendChild(content2);
    document.body.appendChild(fiboUno);
    document.body.appendChild(fiboDos);
  }
  if(num > 2){
    document.getElementById('lol').innerHTML= penultimo
    document.getElementById('loll').innerHTML= ultimo
    for(i =2; i < num; i++){
      var f = penultimo + ultimo;
      var fiboResultado = document.createElement('h2');
      var contentResultado = document.createTextNode(f);
      fiboResultado.appendChild(contentResultado);
      document.body.appendChild(fiboResultado);
      penultimo = ultimo;
      ultimo = f
    }
  }
  document.getElementById('mostrar').innerHTML = penultimo + ultimo;
});