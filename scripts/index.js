/* index.js */
// 목적
// 1. 태어난 날 숫자 입력 클릭 시 12로 값이 나오도록 변경하기
// 2. 결과 버튼 클릭 시 팝업창이 나오고, 배경 클릭 시 팝업창이 사라지도록 변경하기
/* 객체 등록 */
const user_birth_m = document.querySelector('#user_birth_m');
const result_popup = document.querySelector('.result_popup');
const popup_bg = document.querySelector('.popup_bg');
/* 변수 */
console.log(user_birth_m);
console.log(result_popup);
console.log(popup_bg);
/* 스타일 */
result_popup.style.display = 'none';
popup_bg.style.display = 'none';
/* user_birth_m.style.placeholder = '12' ; */
/* 함수 */
function popupShow(){
    result_popup.style.display = 'flex';
    popup_bg.style.display = 'block';
}
function popupHide(){
    result_popup.style.display = 'none';
    popup_bg.style.display = 'none';
}
function monthClick_show(){
    user_birth_m.value = '12';
}
/* function monthClick_show(){
    user_birth_m.style.placeholder = '12';
}
function monthClick_hide(){
    user_birth_m.style.placeholder = '태어난 달을 입력해주세요';
} */