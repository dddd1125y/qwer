const buttons = document.querySelectorAll('.option-btn');
const resultMessage = document.getElementById('result-message');
const restartBtn = document.getElementById('restart-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.textContent;

    if (answer === '뉴진스') {
      resultMessage.textContent = '정답입니다!';
      resultMessage.style.color = 'green';
    } else {
      resultMessage.textContent = '땡! 다시 시도해보세요.';
      resultMessage.style.color = 'red';
    }

    restartBtn.style.display = 'inline-block';
    buttons.forEach(btn => btn.disabled = true);
  });
});

restartBtn.addEventListener('click', () => {
  resultMessage.textContent = '';
  restartBtn.style.display = 'none';
  buttons.forEach(btn => btn.disabled = false);
});
