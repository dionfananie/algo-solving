import "./styles/style.css";
import "./styles/loading.css";
// import "./scroll.css";
// import "./rectangleMouseMove.ts";

const loader = document.createElement("div");
loader.className = "loader";

Array.from({ length: 3 }).forEach(() => {
  const newDiv = document.createElement("div");
  newDiv.className = "list";
  loader.appendChild(newDiv);
});
document.body.prepend(loader);

// adding new function prototype
Array.prototype.square = function () {
  return this.map((number) => number ** 2);
};

console.log([1, 2, 3].square());
