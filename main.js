const x_width = window.innerWidth;
const x_Height = window.innerHeight;
const x_centro = x_width / 2;
const y_centro = x_Height / 2;
const frames = 3000;

const olho_dir_x = (theta, frame, index) => {
  return Math.cos(theta - frame) * index + 80;
};

const olho_dir_y = (theta, frame, index) => {
  return Math.sin(theta - frame) * index + 50;
};
const olho_esq_x = (theta, frame, index) => {
  return Math.cos(theta - frame) * index - 80;
};

const olho_esq_y = (theta, frame, index) => {
  return Math.sin(theta - frame) * index + 50;
};

const boca_x = (theta, frame, index) => {
  return theta * 8 + 100;
};

const boca_y = (theta, frame, index) => {
  return Math.sin(theta) * Math.sin(frame) * 6 - 100;
};

const cabeca_x = (theta, frame, index) => {
  return Math.cos(theta) * 200;
};

const cabeca_y = (theta, frame, index) => {
  return Math.sin(theta) * 200;
};
// ######################################################################
start();
desenho();

function desenho() {
  anima(frames);
}
async function anima(frames) {
  //desenha_cara(-50, 50, "cara");
  desenha(-50, 50, cabeca_x, cabeca_y, 1, "cara");
  for (let index = 0; index < frames; index++) {
    desenha(0, 80, olho_esq_x, olho_esq_y, index, "olho_esq");
    desenha(0, 80, olho_dir_x, olho_dir_y, index, "olho_dir");
    desenha(0, 200, boca_x, boca_y, index, "boca");
    await sleep(200);
  }
}
function desenha(min, max, fx, fy, frame, id) {
  pontos = "";
  let nx = 0;
  let nt = 0;
  for (let index = min; index < max; index++) {
    let theta = (index - max) / 8;
    nx = fx(theta, frame, index);
    ny = fy(theta, frame, index);
    pontos += `${nx + x_centro},${-ny + y_centro} `;
  }
  document.getElementById(id).setAttribute("points", pontos);
}

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

//##################################################################
function start() {
  const mh = document
    .getElementById("desenho")
    .setAttribute("height", x_Height);
  const mw = document.getElementById("desenho").setAttribute("width", x_width);
  const mc = document.getElementById("cara_fundo");
  mc.setAttribute("cy", y_centro);
  mc.setAttribute("cx", x_centro);
  const mb = document.getElementById("cara_fundo");
  mb.setAttribute("cy", y_centro);
  mb.setAttribute("cx", x_centro);
}
