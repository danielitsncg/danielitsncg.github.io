window.onload = () => {
  let usuario = JSON.parse(localStorage.getItem('usuario'));
  document.getElementById('imgUser').src = './img/' + usuario.imagen;
  let arrayTw = [];
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', './js/tweets.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status=='200') {
      arrayTw = JSON.parse(xobj.responseText);
      console.log(arrayTw);
      crearPost();
    }
  };
  xobj.send(null);

  //console.log(usuario);
  // document.getElementById("usuario").innerHTML = "Hola " + usuario.nombre;
  let txtTweet = document.getElementById("txtTweet");
  let btnTweet = document.getElementById("btnTweet");
  btnTweet.addEventListener('click', (evt) => {
    if (txtTweet.value.trim() != " ") {
      let obj = {
        img: usuario.imagen,
        nombre: usuario.nombre,
        mensaje: txtTweet.value,
        username: usuario.username,
      };
      arrayTw.push(obj);
      crearPost();
    }
  });
  txtTweet.addEventListener('keyup', (evt) => {});
  function crearPost() {
    var todo = "";

    arrayTw.forEach(el => {
        comentarios = " ";
        
        el.comentarios.forEach(co => {
            comentarios += `<div class="comentarios">
        <div>
            <img src="img/${co.img}" alt="" class="imgUser">
        </div>
        <div>
            <h2> 
                <span>${co.nombre}</span>
                <span>@${co.username}</span>
            </h2>
            <div class="textTweet">
                ${co.comentario}
            </div>
        </div>
    </div>`;
        });
        todo += `<div class="post">
        <div>
            <img src="img/${el.img}" alt="" class="imgUser">
        </div>
        <div>
            <h2> 
                <span>${el.nombre}</span>
                <span>@${el.username}</span>
            </h2>
            <div class="textTweet">
                ${el.tweet}
            </div>
            <div class="icons">
                <h2>
                    <span>
                        <i class="far fa-heart"></i>
                        ${el.likes}
                    </span>
                </h2>
                <h2>
                    <span>
                        <i class="fas fa-share"></i>
                        ${el.retweets}
                    </span>
                </h2>
            </div>
            <div class="comentarios">
                ${comentarios}
            </div>
        </div>
    </div>`;
    });
    document.getElementById("posts").innerHTML = todo;
}
}
//1
