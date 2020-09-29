function calculateSquare(number) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(function(){
      if(typeof number !== 'number') {
        return reject(new Error('Argument of type number is expected'));
      }
      const result = number**2;
      return resolve(result);
    }, 3000);
  });
  return promise;
}

export default calculateSquare;