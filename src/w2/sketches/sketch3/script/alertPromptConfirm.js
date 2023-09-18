alert('안녕하세요');
let userName;
userName = prompt('당신의 이름은?', '홍길동');
let confirmVal = confirm('당신의 이름이 ' + userName + '이/가 맞습니까?');
if (confirmVal == true) {
  alert('환영합니다. ' + userName + '님.');
}
