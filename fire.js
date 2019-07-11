const x_width = window.innerWidth;
const x_Height = window.innerHeight;
const x_centro = Math.round(x_width / 2);
const y_centro = Math.round(x_Height / 2);
const frames = 3000;
const tamanho_x = 5;
const tamanho_y = 5;
var matriz = [];
start();
atualiza();
function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
//############################# Função inicial#####################################
function start() {
  document.getElementById("desenho").setAttribute("height", x_Height);
  document.getElementById("desenho").setAttribute("width", x_width);
  for (let i = 0; i < tamanho_x; i++) {
    let coluna = [];
    for (let j = 0; j < tamanho_y; j++) {
      coluna.push({ color: "#000000" });
      let rec = document.createElement("rect");
      rec.id = `${i}_${j}`;
      rec.setAttribute("style", "fill: #000000");
      rec.setAttribute("x", x_centro + 10 * i);
      rec.setAttribute("y", y_centro + 10 * j);
      rec.setAttribute("width", 10);
      rec.setAttribute("height", 10);
      document.getElementById("desenho").appendChild(rec);
    }

    matriz.push(coluna);
  }
}
function atualiza() {
  while (true) {
    sleep(1000);
    console.log("atualizou");
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        let cel = document.getElementById(`${i}_${j}`);
        cel.setAttribute("style", "fill: #ff0000");
      }
    }
  }
}
