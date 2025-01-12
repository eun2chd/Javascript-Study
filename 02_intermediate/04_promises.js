const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data loaded!');
    }, 2000);
  });
};

fetchData()
  .then(data => {
    console.log(data); // 'Data loaded!' (2초 후 출력)
  })
  .catch(err => {
    console.error(err);
  });
