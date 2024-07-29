import "./styles/loading.css";

const loader = document.createElement("div");
loader.className = "loader";

Array.from({ length: 3 }).forEach(() => {
  const newDiv = document.createElement("div");
  newDiv.className = "list";
  loader.appendChild(newDiv);
});
document.body.prepend(loader);

// // adding new function prototype
// Array.prototype.square = function () {
//   return this.map((number) => number ** 2);
// };

// console.log([1, 2, 3].square());

const text = `<p>haloo <s>heheheh</p><p><s>gimana ya</s><p>`;

loader.innerHTML = text;
const list = loader.getElementsByTagName("p");
for (let idx = 0; idx < list.length; idx++) {
  const element = list[idx];
  console.log(element.innerText);
}
