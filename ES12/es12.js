// 1. Logical Assignment Operators (||=, &&=, ??=)

// These operators combine logical checks with assignment, simplifying code.

// ||=  Assign if the value is falsy.

let a = 0;

a ||= 42; // Assigns 42 because `0` is falsy

console.log(a); // 42

// &&= Assign if the value is truthy.

let b = 1;

b &&= 42; // Assigns 42 because `1` is truthy

console.log(b); // 42

// ??= Assign if the value is null or undefined.

let c = null;

c ??= 42; // Assigns 42 because `c` is null

console.log(c); // 42




// 2. Numeric Separators (_)

// The _ character can be used as a visual separator in numeric literals to improve readability.

let million = 1_000_000; // Easier to read

let bytes = 0xFF_FF_FF_FF; // Hexadecimal

let bits = 0b1010_1010_1111; // Binary

console.log(million); // 1000000




// 3. String.replaceAll()

// The replaceAll() method replaces all occurrences of a substring, unlike replace(), which replaces only the first occurrence.

let text = "JavaScript is great. I love JavaScript!";

let res = text.replaceAll("JavaScript", "TypeScript");

console.log(result); // "TypeScript is great. I love TypeScript!"

// Note: You can also use regular expressions for global replacements:

let result = text.replace(/JavaScript/g, "TypeScript");
