export function setupCounter(element: HTMLButtonElement) {
  let counter = 5;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 6));
  setCounter(5);
}

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
// merge string alternately

var mergeAlternately = function (word1: string, word2: string) {
  const [wordLoop, wordShort] =
    word1.length > word2.length ? [word1, word2] : [word2, word1];
  let word = "";
  for (let i = 0; i < wordLoop.length; i++) {
    if (wordShort[i]) {
      word = word + word1[i] + word2[i];
    } else word = word + wordLoop[i];
  }
  return word;
};

// console.log(mergeAlternately("abc", "pqr"));

/**
 * Greatest Common Divisor of Strings
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 * @level easy
 */
var gcdOfStrings = function (str1: string, str2: string) {
  // handle the base case
  if (str1 + str2 !== str2 + str1) return "";
  let a = str1.length;
  let b = str2.length;

  // loop (divide) until you find the
  // highest common factor (length of string)
  // like we did in maths
  while (b) {
    let temp = b;
    b = a % b;
    console.log("b", b);

    a = temp;
  }
  return str1.substring(0, a);
};

console.log(gcdOfStrings("ABABAB", "ABAB"));

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 * @level easy
 */
var canPlaceFlowers = function (flowerbed: number[], n: number) {
  if (n < 1) return true;

  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    const prev = flowerbed[i - 1] || 0;
    const curr = flowerbed[i];
    const next = flowerbed[i + 1] || 0;
    console.log("prev: ", prev);
    console.log("curr: ", curr);
    console.log("next: ", next);
    console.log("===========================================");
    console.log(flowerbed);

    if (prev === 0 && curr === 0 && next === 0) {
      flowerbed[i] = 1;
      count++;
    }
  }

  return count >= n;
};
// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));

/**
 * compress string array
 * @param {character[]} chars
 * @return {number}
 * @level medium
 */
var compress = function (chars: string[]) {
  if (chars.length === 1) return 1;

  let countChar = 0;
  for (let i = chars.length - 1; i >= 0; i--) {
    const nextIdx = i + 1;
    const next = chars[nextIdx];
    const curr = chars[i];
    const prev = chars[i - 1] || "";

    if (next === curr) {
      countChar++;
      chars.splice(nextIdx, 1);
      if (prev !== curr) {
        countChar++;
        const displayCountChar = String(countChar);

        chars.splice(nextIdx, 0, ...displayCountChar);
        countChar = 0;
      }
    }
  }
  return chars.length;
};

const arrC = new Array(12).fill("c");
const arr = ["a", "a", "b", "b", ...arrC];
// console.log("result compress: ", compress(arr));
// console.log("newArr: ", arr);
