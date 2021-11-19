window.onload = () => {
  let arrayElem = [];
  var tabla = document.getElementsByClassName('periodic-table');

  //cargar json
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType('application/json');
  xobj.open('GET', './js/PeriodicTableJSON.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == '200') {
      let json = JSON.parse(xobj.responseText);
      arrayElem = json.elements;
      let todo = '';

      arrayElem.forEach((element) => {
        var IdElem = '';
        switch (element.name) {
          case 'Hydrogen':
            ClaseElem = 'hydrogen';
            break;
          case 'Helium':
          case 'Boron':
          case 'Aluminium':
          case 'Cerium':
          case 'Thorium':
            IdElem = element.name.toLowerCase();
            break;
        }
        var ClaseElem = '';
        switch (element.category) {
          case 'noble gas':
            ClaseElem = 'noble-gas';
            break;
          case 'diatomic nonmetal':
            ClaseElem = 'diatomic-nonmetal';
            break;
          case 'alkali metal':
            ClaseElem = 'alkali';
            break;
          case 'Hydrogen':
            ClaseElem = 'hydrogen';
            break;
          case 'alkaline earth metal':
            ClaseElem = 'alkaline';
            break;
          case 'lanthanide':
            ClaseElem = 'lanthanide';
            break;
          case 'actinide':
            ClaseElem = 'actinide';
            break;
          case 'metalloid':
            ClaseElem = 'metalloid';
            break;
          case 'polyatomic nonmetal':
            ClaseElem = 'polyatomic-non-metal';
            break;
          case 'post-transition metal':
            break;
          case 'transition metal':
            break;
          default:
            ClaseElem = 'unknown';
            break;
        }

        //console.log(element.number + ' ' + element.symbol);
        todo += `<li id="${IdElem}" class="${ClaseElem}" data-id="${element.number}" data-sym="${element.symbol}" data-name="${element.name}" data-desc="${element.summary}">
            <abbr title="${element.name}">${element.symbol}</abbr>
        </li>`;
      });

      //crear evento
      tabla[0].innerHTML = todo;
      let elem = document.getElementsByTagName('li');
      for (let x = 0; x < elem.length; x++) {
        elem[x].addEventListener('click', (e) => {
          let nomb = elem[x].dataset.name;
          let sim = elem[x].dataset.sym;
          let desc = elem[x].dataset.desc;
          document.getElementById('txtElemento').innerHTML = nomb;
          document.getElementById('txtSimbolo').innerHTML = sim;
          document.getElementById('txtDescr').innerHTML = desc;
        });
      }
    }
  };
  xobj.send(null);
};
