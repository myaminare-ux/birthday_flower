# 탄생화 앱(vr.home_work)
* 제작 시작 : 2026.07.11 / pm.15:30 ~ pm.18:39
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


## 문제 상황
1. input 태그에 글자 제한 속성(maxlength=2)을 넣었으나 입력했을 때 2글자를 넘어가는 오류 발생
    * min/max 값으로 고쳐봐도(min=1/max=2) 2자리 수를 넘어가는 오류 발생
### 해결
1. input 태그의 type 속성을 number -> text 로 변경