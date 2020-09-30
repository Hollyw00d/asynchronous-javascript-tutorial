function getSpecificNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(42), 2000);
  });
}

// Code below works in Node.js
// ONLY because it's in an async IIFE
(async function() {
  const number = await getSpecificNumber();
  console.log(number);
})();