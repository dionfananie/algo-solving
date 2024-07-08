export function setupCounter(element: HTMLButtonElement) {
  let counter = 5;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 6));
  setCounter(5);
}
