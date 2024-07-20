import "./style.css";

const box: HTMLDivElement | null = document.querySelector(".box");
console.log(box);

function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}
function remap(v: number, a: number, b: number, c: number, d: number) {
  return ((v - a) / (b - a)) * (d - c) + c;
}
window.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const rect = box?.getBoundingClientRect();
  const boxLeft = (rect?.left || 0) + (rect?.width || 0) / 2;
  const boxRight = rect?.right || 0;
  const boxTop = (rect?.top || 0) + (rect?.height || 0) / 2;
  const boxBottom = rect?.bottom || 0;
  console.log(e);

  // console.log(`mouse: ${mouseX} - ${mouseY}`);
  // console.log(
  //   `box: box left: ${boxLeft} box right: ${boxRight} - boxTop:${boxTop} boxBottom: ${boxBottom}`
  // );
  // if (
  //   mouseX > boxLeft &&
  //   mouseX < boxRight &&
  //   mouseY > boxTop &&
  //   mouseY < boxBottom
  // )
  //   console.log("inside box");
  // else console.log("outside box");

  const x = boxLeft - mouseX;
  const y = boxTop - mouseY;
  const distance = Math.sqrt(x * x + y * y);
  const progress = distance / 200;
  const clampProgress = clamp(progress, 0, 1);
  const inverseProgress = 1 - clampProgress;
  const scale = remap(inverseProgress, 0, 1, 1, 2);
  const opacity = remap(inverseProgress, 0, 1, 0.5, 1);
  const rotation = remap(inverseProgress, 0, 1, 0, 360);
  // console.log("distance: ", distance);
  // console.log("clampProgress: ", clampProgress);
  box.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
  box.style.opacity = opacity;
});
