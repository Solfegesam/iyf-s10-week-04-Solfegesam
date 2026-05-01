console.log("=== CHALLENGES ===");

// FizzBuzz
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

// Reverse string
const reverse = str => str.split("").reverse().join("");
console.log(reverse("hello"));

// Largest number
const max = arr => arr.reduce((a, b) => (b > a ? b : a));
console.log(max([1, 5, 9, 2]));

// Remove duplicates
const unique = arr => [...new Set(arr)];
console.log(unique([1, 2, 2, 3, 3]));

// Palindrome
const isPalindrome = str => {
    const clean = str.toLowerCase().replace(/\s/g, "");
    return clean === clean.split("").reverse().join("");
};

console.log(isPalindrome("racecar"));
