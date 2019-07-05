const x_width = window.innerWidth;
const x_Height = window.innerHeight;
const x_centro = x_width / 2;
const y_centro = x_Height / 2;
const frames = 60;
const mh = document.getElementById("desenho").setAttribute("height", x_Height);
const mw = document.getElementById("desenho").setAttribute("width", x_width);

desenho();

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function cria_linha(subdivide) {
  let lista = [];
  for (let index = 0; index < subdivide; index++) {
    lista.push({ x: subdivide / 2 - index, y: 0 });
  }
  return lista;
}

function desenha_curva(lista, frame) {
  pontos = "";
  lista.map(p => {
    nx = p.x;
    ny = Math.pow(p.x, frame);
    pontos += `${nx + x_centro},${ny + y_centro} `;
  });
  return pontos;
}
async function anima(frames, lista) {
  for (let index = 0; index < frames; index++) {
    let pontos = desenha_curva(lista, index);
    document.getElementById("linhas").setAttribute("points", pontos);
    await sleep(500);
  }
}

function desenho() {
  var lista = cria_linha(400);
  anima(frames, lista);
}
