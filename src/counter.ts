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

// console.log(gcdOfStrings("ABABAB", "ABAB"));

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

/**
 * reverse vowel
 * @param {string} s
 * @return {string}
 * level easy
 */
var reverseVowels = function (s: string) {
  const vowel = ["a", "i", "u", "e", "o"];
  const vow = s.match(/[aeiou]/gi);
  console.log("vow: ", vow);

  const arr = s.split("");
  const vowelFind = [];
  for (let i = 0; i < arr.length; i++) {
    if (vowel.indexOf(arr[i].toLowerCase()) >= 0) {
      vowelFind.push(arr[i]);
    }
    console.log("vowelFind: ", vowelFind);
  }
  let finalString = "";
  for (let x = 0; x < arr.length; x++) {
    if (vowel.indexOf(arr[x].toLowerCase()) >= 0) {
      finalString += vowelFind.pop();
    } else {
      finalString += arr[x];
    }
    console.log("final: ", finalString);
  }
  return finalString;
};

// console.log(reverseVowels("aA"));

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums: number[]) {
  const n = nums.length;
  const answer = new Array(n).fill(1);

  // Calculate left products and store in the output array
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = leftProduct;
    leftProduct *= nums[i];
  }
  console.log(answer);

  // Calculate right products on the fly and multiply with left products in the output array
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return answer;
};

// console.log(productExceptSelf([1, 2, 3, 4]));

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums: number[]) {
  let countZero = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      countZero.push(0);
      nums.splice(i, 1);
      i--;
    }
  }
  nums.push(...countZero);
  return nums;
};

// console.log(moveZeroes([0, 0, 1]));

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s: string, t: string) {
  let find = 0;
  for (let idx = 0; idx < t.length; idx++) {
    const elm = t[idx];
    console.log("elm; ", elm);
    console.log("find: ", s[find]);
    console.log("==========================");

    if (s[find] === elm) find++;
  }

  return find === s.length;
};

// console.log(isSubsequence("ace", "abzcccccddde"));

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr: number[]) {
  const mappingScore: number[] = [];
  for (let idx = 0; idx < arr.length; idx++) {
    const element = arr[idx];
    if (!mappingScore[element]) {
      mappingScore[element] = 1;
    } else mappingScore[element] = mappingScore[element] + 1;
  }
  console.log(mappingScore);

  const check = [...new Set(mappingScore)];
  console.log(check);

  return check.length === mappingScore.length;
};
// not solved
// console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s: string) {
  const newArr: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") newArr.pop();
    else newArr.push(s[i]);
  }

  return newArr.join("");
};

// console.log(removeStars("leet*cod*"));

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s: string) {
  const stack: string[] = [];
  for (const char of s) {
    console.log("char: ", char);
    if (char !== "]") {
      stack.push(char);
      continue;
    }
    let cur = stack.pop();
    let str = "";
    while (cur !== "[") {
      str = cur + str;
      cur = stack.pop();
    }
    console.log("str: ", str);
    console.log("cur: ", cur);

    let num = "";
    cur = stack.pop();
    while (!Number.isNaN(Number(cur))) {
      num = cur + num;
      cur = stack.pop();
    }
    stack.push(cur);
    stack.push(str.repeat(Number(num)));
    console.log("stack: ", stack);
  }
  return stack.join("");
};

// console.log(decodeString("3[a2[c]]"));
