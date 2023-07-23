// function expect(value) {
//   return {
//     toBe: (exp) => {
//       if (value === exp) {
//         console.log("pass");
//       } else {
//         console.log(`${value} does not meet ${exp}`);
//       }
//     },
//   };
// }

function sum(a, b) {
  return a + b;
}

// expect(sum(4, 5)).toBe(10);

module.exports = sum;
