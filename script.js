(function () {
  // Countdown
  var target = new Date('2026-09-25T16:30:00-03:00').getTime();
  var days = document.getElementById('days');
  var hours = document.getElementById('hours');
  var minutes = document.getElementById('minutes');
  var seconds = document.getElementById('seconds');

  function update() {
    var diff = target - Date.now();
    if (diff <= 0) {
      days.textContent = '0';
      hours.textContent = '00';
      minutes.textContent = '00';
      seconds.textContent = '00';
      return;
    }
    days.textContent = Math.floor(diff / 86400000);
    hours.textContent = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0');
    minutes.textContent = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
    seconds.textContent = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);

  // Modal
  var overlay = document.getElementById('modal-overlay');
  var btnOpen = document.getElementById('btn-regalo');
  var btnClose = document.getElementById('modal-close');

  btnOpen.addEventListener('click', function () {
    overlay.classList.add('active');
  });

  btnClose.addEventListener('click', function () {
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) overlay.classList.remove('active');
  });

  // Copy buttons
  overlay.addEventListener('click', function (e) {
    var btn = e.target.closest('.modal-copy');
    if (!btn) return;
    navigator.clipboard.writeText(btn.getAttribute('data-copy')).then(function () {
      btn.textContent = '¡Copiado!';
      btn.classList.add('copied');
      setTimeout(function () {
        btn.textContent = 'Copiar';
        btn.classList.remove('copied');
      }, 1500);
    });
  });
})();
