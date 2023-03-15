
const open = document.querySelector("#open");
const mask = document.querySelector("#mask");
const ul = document.querySelector("#js");

open.onclick = () => {
  mask.classList.remove("hidden");
  mask.classList.add("block");
  ul.classList.add("idou");
  open.classList.add("hidden");
}
mask.onclick = () => {
  mask.classList.add("hidden");
  open.classList.remove("hidden");
}


const button = document.querySelector("#test");
const anime = document.querySelector(".anime");

button.onclick = () => {
  anime.classList.add("oo");

}