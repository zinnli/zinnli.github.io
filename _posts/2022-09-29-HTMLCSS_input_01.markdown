---
layout: post
title: HTML | input 정리
date: 2022-09-29 23:30:30 +0900
category: HTML/CSS
---

## Label

label : input 태그의 의미 정의를 위한 태그
label 부분을 클릭했을 경우 해당 입력창/박스 등이 활성화 됨

```

<label for = 'a'> b </label>
<input type = 'text' id='a' name='a'>

```

→ label 의 for= 'a' 와 input id = 'a'
같은 a값을 줘야함
<br>

## Password

password 최소/최대 비밀번호 길이
minlength/maxlength
<br>

## Button input 차이점

-    button : 스스로 닫지않는 tag
     → 하위 태그 추가 가능 So 자유로운 스타일 변경 가능
-    input : 스스로 닫는 tag

### button type 속성값

(입력하지 않으면 submit)
: submit / reset / button

-    submit : 폼제출
-    reset : 폼작성내용 초기화
-    button : 자체 이벤트 x / click 이벤트와 같이 사용하는 경우가 많음(JS와 함께 사용되는 경우 많음)

## input type='range'

hash marks 입력 방법

-    input 에서 <list='x'>

```

 -<input type='range' list='x'>
  <datalist id='x'>
	<option value='a'>
	<option value='b'>
	<option value='c'>
  </datalist>

```

위처럼 입력하면 range 하단에 단위 막대 넣을 수 있음!

<br/>
<hr>

<br/>
근데 위의 내용들을 알고 있는 상태에서 파이참에서 게시판 형식으로 입력값을 주고 유효성 검사를 하는 과정을 거쳤었다.
<br/>
원래 알고 있기론 form으로 input을 감싸준 상태라면 자동으로 유효성 검사가 되는 것으로 알고 있었는데,
<br/>
파이썬으로 코드를 짜서 몽고DB에 저장하는 형식으로 코드를 짰을 때는 입력하지 않았을 때 입력하라는 문구는 뜨지만 몽고DB에 입력값들이 남아있는 경우가 생겼다.
<br/>

어떨 때 기록이 남는건지 구분이 되지않아 많이 찾아봤는데 아직 구글링 실력이 좋지 않은지 찾기가 너무 어렵다 :(

쉽지않은 코딩의 세계

<br/>
<br/>
<br/>

(잘못된 부분이 있다면 메일로 연락주세요.)
