const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  e.preventDefault(); // 새로고침 막기
  loginForm.classList.add(HIDDEN_CLASSNAME); // form 숨기기
  const username = loginInput.value; // 입력 값 변수로 저장
  localStorage.setItem(USERNAME_KEY, username); // localStorage에 key, value 저장
  paintGreetings(username); // 입력 값을 매개변수로 함수 호출
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`; // 텍스트 추가
  greeting.classList.remove(HIDDEN_CLASSNAME); // 클래스명 제거
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername == null) {
  // localStorage에 이름이 비어 있으면
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // 이름이 있으면
  paintGreetings(savedUsername);
}
