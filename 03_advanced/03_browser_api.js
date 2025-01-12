// 1. 로컬 스토리지 (LocalStorage)
localStorage.setItem('name', 'Alice');
const name = localStorage.getItem('name');
console.log(name); // Alice

// 2. Geolocation API
navigator.geolocation.getCurrentPosition(position => {
  console.log('Latitude:', position.coords.latitude);
  console.log('Longitude:', position.coords.longitude);
}, error => {
  console.error('Error fetching location', error);
});

// 3. Fetch API (AJAX 요청)
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// 4. DOM 조작
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  alert('Button clicked!');
});
