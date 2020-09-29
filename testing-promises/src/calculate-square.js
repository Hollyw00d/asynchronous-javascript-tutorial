function calculateSquare(number) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof number !== 'number') {
        return reject(new Error('Argument of type number is expected'));
      }
      const result = number**2;
      return resolve(result);
    });
  });
  return promise;
}

export default calculateSquare;