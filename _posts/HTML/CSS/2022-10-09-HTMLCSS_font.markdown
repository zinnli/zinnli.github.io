---
layout: post
title: HTML | 폰트 변경
date: 2022-10-09 13:30:30 +0900
categories: [HTML/CSS]
---

내가 아는 두가지 폰트 사이트
(대부분 무료 / 눈누의 경우 하단의 라이센스 요약 확인 필요)<hr/>

1. [구글웹 폰트](https://fonts.google.com/?subset=korean&preview.size=24)
2. [눈누 웹폰트](https://noonnu.cc/font_page?commit=filter&search=&search=&editor=&category_style_ids%5B%5D=1&order_by=pd)

<br>

 <p style='font-size:30px;'>웹 폰트 적용 방법 2가지</p>
 <hr/>

1. link를 통해 적용
2. @import를 통해 적용

<br>

> # link를 통해 적용

1.  원하는 글꼴 선택

2.  우측의 +Select this style 선택<br>
    <img src='https://velog.velcdn.com/images/hyunjin0376/post/b7abc289-7f16-417b-a7ee-4db61a5eaf80/image.png' alt='link-sel'/><br>

3.  link의 내용 전체 복사(link rel~ 전부)<br>
    <img src='https://velog.velcdn.com/images/hyunjin0376/post/868b4791-cac0-4f08-b478-3a58fa29b3c4/image.png' alt='link-copy'/><br>

4.  html - head > title 다음 부분에 붙여넣기<br>
    <img src='https://velog.velcdn.com/images/hyunjin0376/post/dfbcf6f0-c092-431b-bf24-25f3d9debf05/image.png' alt='link-in'/><br>

5.  css 부분 복사<br>
    <img src='https://velog.velcdn.com/images/hyunjin0376/post/8097b5f3-44e0-4210-acc3-00451ad59800/image.png' alt='css-copy'/><br>

6.  css - \*{여기!} 에 넣어주기<br>
    <img src='https://velog.velcdn.com/images/hyunjin0376/post/daf05750-81ee-44e0-8fc7-6498e699f722/image.png' alt='css-in'/><br>

<br><br>

> # @import를 통해 적용

1.  위와 동일
2.  위와 동일
3.  @import 복사 (눈누의 경우 웹폰트로 사용 부분)<br>

    - 구글 웹폰트<br>
      <img src='https://velog.velcdn.com/images/hyunjin0376/post/5b12fc30-104e-456e-887d-c119c719dd31/image.png' alt='import-copy-google'/>
    - 눈누 웹폰트(웹폰트로 사용 전체)<br>
      <img src='https://velog.velcdn.com/images/hyunjin0376/post/129cc8b6-01b1-42c0-bdf7-2c25b4370ba3/image.png' alt='import-copy-noonnu'/><br>

4.  html의 style태그(구글) / stylesheet 상단에 입력(눈누)<br>

    - html의 style태그<br>
      <img src='https://velog.velcdn.com/images/hyunjin0376/post/051a5967-d840-40c2-8ab5-8c907e2948cc/image.png' alt='import-html-style'/>
    - stylesheet 상단<br>
      <img src='https://velog.velcdn.com/images/hyunjin0376/post/fb89f317-f299-4781-9ed0-4178204a145c/image.png' alt='import-stylesheet'/><br>

5.  \*{여기!} (or 원하는 부분에)font-family:'이름!' 입력<br>
    \*\*눈누의 경우 구글처럼 따로 분리되어 적혀있지않기 때문에 font-family 부분 복사하여 원하는 부분에 넣기!<br>

    <img src='https://velog.velcdn.com/images/hyunjin0376/post/daf05750-81ee-44e0-8fc7-6498e699f722/image.png' alt='css-in'/><br>

<hr>
블로그 이전 전에 작성한 폰트 변경 자료
