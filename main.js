const x_width = window.innerWidth;
const x_Height = window.innerHeight;
const x_centro = x_width / 2;
const y_centro = x_Height / 2;
const frames = 3000;
const mh = document.getElementById("desenho").setAttribute("height", x_Height);
const mw = document.getElementById("desenho").setAttribute("width", x_width);
const mc = document.getElementById("cara_fundo")
mc.setAttribute("cy", y_centro);
mc.setAttribute("cx", x_centro);
const mb = document.getElementById("cara_fundo")
mb.setAttribute("cy", y_centro);
mb.setAttribute("cx", x_centro);
desenho();

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function cria_linha(subdivide) {
  let lista = [];
  const tamanho = subdivide/2
  for (let index = 0; index < subdivide; index++) {

    lista.push({ x: index - tamanho/2, y: index - tamanho/2 });
  }
  return lista;
}

function desenha_olho_esq(lista, frame, id) {
  pontos = "";
  const tamanho = lista.length
  
  for (let index = 0; index < tamanho; index++) {
    const p = lista[index];
    let theta = index/2 - tamanho

    nx =  (Math.cos((theta+frame))* index)+80;
    ny = (Math.sin((theta+frame))* index)+50;
    pontos += `${nx + x_centro},${-ny + y_centro} `;
  }

  document.getElementById(id).setAttribute("points", pontos);
}

function desenha_olho_dir(lista, frame, id) {
  pontos = "";
  const tamanho = lista.length
  
  for (let index = 0; index < tamanho; index++) {
    const p = lista[index];
    let theta = index/2 - tamanho

    nx = (Math.cos((theta-frame))* index)-80;
    ny =  (Math.sin((theta-frame))* index)+50;
    pontos += `${nx + x_centro},${-ny + y_centro} `;
  }

  document.getElementById(id).setAttribute("points", pontos);

}function desenha_cara(lista,  id) {
  pontos = "";
  const tamanho = lista.length
  
  for (let index = 0; index < tamanho; index++) {
    const p = lista[index];
    let theta = index/10 - tamanho/4

    nx = Math.cos(theta)*200;
    ny = Math.sin(theta)*200;
    pontos += `${nx + x_centro},${-ny + y_centro} `;
  }

  document.getElementById(id).setAttribute("points", pontos);
}
function desenha_boca(lista,frame, id) {
  pontos = "";
  const tamanho = lista.length
  
  for (let index = 0; index < tamanho; index++) {
    const p = lista[index];
    let theta = index/2 - tamanho/4

    nx = theta*8;
    ny = Math.sin(theta)*Math.sin(frame)*6 - 80;
    pontos += `${nx + x_centro},${-ny + y_centro} `;
  }

  document.getElementById(id).setAttribute("points", pontos);
}
async function anima(frames) {
  var olho = cria_linha(50);
  var cabeca = cria_linha(100)
  desenha_cara(cabeca, "cara");
  
  for (let index = 0; index < frames; index++) {
    desenha_olho_esq(olho, index, "olho_esq");
    desenha_olho_dir(olho, index, "olho_dir");
    desenha_boca(olho, index,"boca")
   
    await sleep(200);
  }
}

function desenho() {
  
  anima(frames);
}
