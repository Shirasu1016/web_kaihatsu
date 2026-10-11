function scroll() {
    alert('ボタンを押したね？');
}

document.addEventListener('DOMContentLoaded', function() {
  // id指定でボタンを取得
  const btn = document.getElementById('left_button');
  
  // ボタンにクリックイベントを設定
  btn.addEventListener('click', scroll);
});