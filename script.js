form.onclick = function(event) {
    event.target.style.backgroundColor = 'yellow';
    console.log(event.currentTarget)
    // chrome needs some time to paint yellow
    setTimeout(() => {
      alert("target = " + event.target.tagName + ", this=" + this.tagName);
      event.target.style.backgroundColor = ''
    }, 0);
  };

// 버튼 요소를 가져옵니다.
var button = document.getElementById('myButton');

// 첫 번째 이벤트 핸들러를 할당합니다.
button.addEventListener('click', function(event) {
    console.log('첫 번째 이벤트 핸들러');
});

// 두 번째 이벤트 핸들러를 할당합니다.
button.addEventListener('click', function(event) {
    console.log('두 번째 이벤트 핸들러');
    // 이 이벤트 핸들러 이후에 할당된 다른 이벤트 핸들러의 실행을 중지합니다.
    event.stopImmediatePropagation();
});

// 세 번째 이벤트 핸들러를 할당합니다.
button.addEventListener('click', function(event) {
    console.log('세 번째 이벤트 핸들러');
});

// 이벤트 흐름
for(let elem of document.querySelectorAll('*')) {
  elem.addEventListener("click", e => alert(`캡쳐링: ${elem.tagName}`), true);
  elem.addEventListener("click", e => alert(`버블링: ${elem.tagName}`));
}
