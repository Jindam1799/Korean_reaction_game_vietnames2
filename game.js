import { level1Data, storyData, fillerPool } from './data.js';

let currentIdx = 0;
let lives = 3;
let timeLeft = 60;
let timerInterval;
let currentLang = 'vn';

// 전역 함수 등록
window.switchLang = (lang) => {
  currentLang = lang;
  document.getElementById('btn-ko').classList.toggle('active', lang === 'ko');
  document.getElementById('btn-vn').classList.toggle('active', lang === 'vn');
  updateUI();
};

window.startGame = () => {
  document.getElementById('rules-modal').classList.add('hidden');
  loadQuestion();
  startTimer();
};

function updateUI() {
  const data = storyData[currentLang];
  // 이 부분에서 오프닝 텍스트를 채워줍니다.
  document.getElementById('story-text').innerHTML = data.story;
  document.getElementById('start-btn-text').innerText = data.start;
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timeLeft = 60;
  document.getElementById('time-left').innerText = timeLeft;
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById('time-left').innerText = timeLeft;
    if (timeLeft <= 0) handleWrong();
  }, 1000);
}

function loadQuestion() {
  if (currentIdx >= 10) return endGame();
  const data = level1Data[currentIdx];
  document.getElementById('text-a').innerText = data.a;
  document.getElementById('tran-a').innerText = data.av;
  document.getElementById('text-b').innerText = data.b;
  document.getElementById('tran-b').innerText = data.bv;
  document.getElementById('lives-display').innerText = '💜'.repeat(lives); // 하트 색상 변경

  let choices = [data.ans[0]];
  while (choices.length < 4) {
    let rand = fillerPool[Math.floor(Math.random() * fillerPool.length)];
    if (!choices.includes(rand)) choices.push(rand);
  }
  choices.sort(() => Math.random() - 0.5);

  const btnGrid = document.getElementById('button-grid');
  btnGrid.innerHTML = '';
  choices.forEach((choice) => {
    const btn = document.createElement('button');
    btn.className = 'choice-card'; // 스타일 구분을 위해 클래스명 살짝 변경 가능
    btn.innerText = choice;
    btn.onclick = () => checkAnswer(choice, data.ans);
    btnGrid.appendChild(btn);
  });
}

function checkAnswer(choice, correctList) {
  if (correctList.includes(choice)) {
    showFeedback('correct');
    currentIdx++;
    setTimeout(() => {
      loadQuestion();
      startTimer();
    }, 1000);
  } else {
    handleWrong();
  }
}

function showFeedback(type) {
  const msg = document.getElementById('feedback-msg');
  msg.innerText =
    type === 'correct'
      ? storyData[currentLang].correct
      : storyData[currentLang].wrong;
  msg.className = type;
  setTimeout(() => {
    msg.className = '';
  }, 1000);
}

function handleWrong() {
  lives--;
  document.getElementById('lives-display').innerText = '💜'.repeat(lives);
  showFeedback('wrong');
  if (lives <= 0) setTimeout(showGameOverScreen, 1000);
  else startTimer();
}

function showGameOverScreen() {
  clearInterval(timerInterval);
  const data = storyData[currentLang];
  document.getElementById('game-over-title').innerText = data.gameOverTitle;
  document.getElementById('game-over-desc').innerText = data.gameOverDesc;
  document.getElementById('restart-btn-text').innerText = data.restart;
  document.getElementById('game-over-modal').classList.remove('hidden');
}
function endGame() {
  clearInterval(timerInterval);

  // 게임 화면 숨기기
  document.getElementById('game-play-area').classList.add('hidden');
  document.getElementById('button-grid').classList.add('hidden');
  document.getElementById('quiz-header').classList.add('hidden');
  document.getElementById('lives-display').classList.add('hidden');

  const res = document.getElementById('result-display');
  res.classList.remove('hidden');

  // 리포트 제목 생성
  res.innerHTML = `<h2>REVIEW</h2>`;

  // 각 문제별 결과 카드 생성
  level1Data.forEach((d) => {
    const card = document.createElement('div');
    card.className = 'report-card'; // CSS 클래스와 매칭

    // 정답이 채워진 최종 문장 만들기
    const finalSentence = d.b.replace('__', d.ans[0]);

    card.innerHTML = `
      <small>${d.a}</small>
      <strong>${finalSentence}</strong>
    `;
    res.appendChild(card);
  });

  // 다시 시작 버튼 생성
  const restartBtn = document.createElement('button');
  restartBtn.className = 'main-btn';
  restartBtn.innerText = 'RESTART GAME';
  restartBtn.onclick = () => location.reload();
  res.appendChild(restartBtn);
}
// 초기 실행
updateUI();
