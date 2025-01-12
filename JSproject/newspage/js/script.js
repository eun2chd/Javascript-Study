// 실시간 날짜 및 시간 표시
function updateTime() {
  const currentTime = document.getElementById("current-time");
  const now = new Date();
  const formattedTime = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분`;
  currentTime.textContent = formattedTime;
}
setInterval(updateTime, 1000); // 1초마다 업데이트

// 카테고리 버튼 활성화 토글
function toggleCategory(button) {
  button.classList.toggle('active');
}

// 즐겨찾기 토글
function toggleFavorite(star) {
  star.classList.toggle('favorite');
}
