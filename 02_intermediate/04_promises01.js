const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data loaded!');
    }, 2000);
  });
};

fetchData()
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
