---
layout: post
title: JavaScript | DOM, Serverless
date: 2022-10-09 22:00:30 +0900
category: JavaScript
---

# - DOM, Serverless -

<br/>

## **DOM**(Document Object Model)

: 문서 객체 모델

HTML, XML 문서의 프로그래밍 인터페이스

<br/>

#### DOM의 특징

- 문서의 `구조화된 표현`(structured representation)을 제공
- 프로그래밍 언어가 DOM 구조에 접근할 수 있는 방법을 제공하여 그들이 문서 구조, 스타일, 내용 등을 변경할 수 있게 해줌
- 웹페이지를 스크립트, 프로그래밍 언어들에서 사용될 수 있게 연결시켜주는 역할을 함
- 동일한 문서를 표현, 저장, 조작하는 방법을 제공함
- 웹페이지의 객체 지향 표현

  <br/>

#### DOM의 단점

- DOM 접근 메서드를 통해 document 객체들을 전부 훑으며 원하는 태그를 찾는 현상
- 위의 이유로 메모리 누수 & 시간이 늘어남
- DOM 업데이트에 잦은 오류를 발생시킬 수 있음

  <br/>

### Virtual DOM (가상 DOM)

: 실제 DOM에서 처리하는 방식이 아닌 Virtual DOM과 메모리에서 미리 처리하고 저장한 후 실제 DOM과 동기화
(DOM의 단점을 해결하기 위해 나타남)

- 해당 DOM을 컴포넌트 단위로 쪼개어 HTML 컴포넌트 조립품처럼 다루는 개념
- 데이터 업데이트 -> 변화 전, 후 가상돔끼리 비교 -> 바뀐 부분만 실제 돔에 적용

<br/>

## **Serverless** <span style="font-size: 13px">(서버리스)</span>

: 특정 작업을 수행하기 위해 컴퓨터나 가상머신에 서버를 설정하고 이를 통해 처리하는 것이 아님(= 직역은 '서버가 없다'라는 뜻이지만 `실제로 서버가 없는 것이 아님`)
<br/>

- 대신 BaaS(Backedn as a Service) or Faas(Function as a Service)에 의존하여 작업을 처리함

1. `데이터 관리`
   (db -> 요청에 따른 데이터 가공 -> 응답)

2. `헬스체크`
   ( 미리 답이 정해진 일정한 규칙을 실행시켜 장애의 유무를 결정하고, 필요할 때는 장애 단위를 분리시키는 자기 진단 기능.)

3. `데이터 관리`
   (db -> 요청에 따른 데이터 가공 -> 응답)

<hr>

<br/>
*참고 <br/>

<https://www.howdy-mj.me/dom/what-is-dom> <br/>

<https://doqtqu.tistory.com/316><br/>

<https://velog.io/@getupngo/WIL%ED%95%AD%ED%95%B499-2%EC%A3%BC%EC%B0%A8-DOM%EA%B3%BC-%EC%84%9C%EB%B2%84%EB%A6%AC%EC%8A%A4>

<br/>
