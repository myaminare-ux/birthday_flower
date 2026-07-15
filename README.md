# 탄생화 앱(vr.home_work)
* 제작 시작 : 2026.07.11 / pm.15:30 ~ pm.18:39
    * 2026.07.12 / am.11:50 ~ pm.14:21
    * 2026.07.13 / pm.21:32 ~ pm.21:44
## 제작 작업 순서
1. 탄생화 앱(vr.home_work)의 html, css, js 파일 각각 만들기
### HTML
#### head 태그에 필요한 속성 입력
1. meta : kw/desc
2. link : favicon/css(reset.css, home_work.css 연결)
3. script : src(home_work.js 연결), defer
4. favicon에 들어갈 이미지 선택 -> 붙여넣기
5. meta : kw/desc에 들어갈 문구 작성
6. title 작성
#### body 태그에 필요한 태그 입력
1. 메인 화면 : `main>div.title+div.contents`
    1. main : .title>p+h1
        * `div.contnets를 form으로 변경` : 사용자가 입력하고 제출하는 구역이기 때문
    2. from 속성=값(action, method, name) 입력
        * from : `fieldset>legend+input+button`
    3. input : 속성=값(name, id, autofocus, autocomplete, required, maxlength, placeholder) 입력
    4. button : 속성=값(type, id) 입력
2. 결과 버튼 클릭 시 실행되는 팝업 : `main>div.result_popup>p*2+h2>em`
    * p 두 개에 class 부여(month, flower_lang)
3. 결과 팝업 뒷배경 : `div.popup_bg`
### CSS
#### 피그마를 바탕으로 디자인하기
1. 주석으로 공통, 타이틀, 폼, 팝업, 팝업 뒷배경 단락 나누기
2. 단락을 토대로 `선택자 {}` 입력
    1. main : 크기, 최소 높이, 마진(웹 기준 가운데), 배경 이미지(사이즈, 반복X)
    <!-- e : 2026.07.11 -->
    2. tilte : 패딩, flex 선언(메인축 세로 정렬, 교차축 가운데 정렬), gap
        * p, h1 : 글자 크기, 자간, 두께
    3. form : 패딩
        * fieldset : flex 선언(메인축 세로 정렬, 메인축/교차축 가운데 정렬), gap
        * input/button 공통 : 크기, 높이, 외곽선 모서리 반경, 자간
        * input : 글자 정렬(가운데), 외곽선, 글자 크기
        * input-placeholder : 글자 색(#aaa) 임의 부여(피그마에 따로 부여된 색 없음)
        * input-focus : 외곽선 색
        * button : 배경색, 글자색, 글자 두께
    4. popup : 배경색, 크기, 높이, flex 선언(메인축 세로 정렬, 메인축/교차축 가운데 정렬), gap
        * month/flower/h2/em 공통 : 글자 크기, 두께, 자간
        * h2 : 글자 크기, 행간, 두께, 정렬(가운데)
        * em : 글자 크기
    5. popup-position
        * popup를 부유시키기 위해 position 사용
        * popup의 position 기준을 main에 설정 -> main을 기준으로 popup 위치 이동
    6. popup_bg : 배경색, 크기/높이(100%)
        * bg를 부유시키기 위해 postion 사용(가까운 postion을 가진 부모 기준에 맞춰 좌표 적용) -> popup을 기준으로 bg 위치 이동
        * popup/bg에게 z-index(중첩 순서) 부여
### JS
#### html, css를 바탕으로 js 짜기
1. 주석으로 객체 등록, 변수, 스타일, 함수 단락 나누기
2. 객체 등록
    * 팝업창, 팝업 뒷배경 등록
3. 변수 입력
    * console에서 보일 수 있도록 console.log(객체명) 입력
4. 스타일 입력
    * 팝업창, 뒷배경 스타일을 none으로 변경
5. 함수 입력
    * 팝업창, 뒷배경의 속성값 none을 본래의 태그 속성으로 변경 
6. 해당 html 태그에 onclick 속성 입력(input, button, popup_bg)
    * 속성값으로 함수명() 입력
    <!-- e : 2026.07.12 / 2026.07.13--> 
6. 해당 html 태그에 onclick 속성 입력
    * 속성값으로 함수명() 입력
<!-- e : 2026.07.21 -->
## 문제 상황
### html
1. input 태그에 글자 제한 속성(maxlength=2)을 넣었으나 입력했을 때 2글자를 넘어가는 오류 발생
    * min/max 값으로 고쳐봐도(min=1/max=2) 2자리 수를 넘어가는 오류 발생
### css
1. input 입력 시 외곽선 색을 변경하고 싶어 placehold에 외곽선 색을 부여했지만 입력 전부터 색이 변경되어 있음
### js
1. 변수 user_month_m가 개발자 도구에서 ull로 나오는 걸 발견
2. 입력창 클릭 시 12가 나올 수 있도록 스타일 placeholder의 내용을 12로 바꿔서 함수(show{placeholder=12}, hide{placeholder=태어난 달을 입력해주세요})를 작성 후 입력창의 html에 onclick 속성을 부여 했으나, 입력창이 12로 변경되지 않음

## 해결
### html
1. input 태그의 type 속성을 number -> text 로 변경
### css
1. input-foucs 속성 부여
### js
1. 객체 등록시 id(#)를 class(.)로 오타 발견 -> id(#)로 변경
2. 함수에서 입력창의 12를 value(기본값)으로 변경 -> 입력창에 onclick 속성 부여 -> 입력창 클릭 시 12로 변경됨
