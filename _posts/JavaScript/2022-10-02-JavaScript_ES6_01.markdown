---
layout: post
title: Java Script |  ES6 정리
date: 2022-10-02 14:00:30 +0900
categories: [Programming Language, JavaScript]
tag: [es6]
---

## ES와 ES6에 대해서

ES = ECMAScript 의 약자<br/>

**JavaScript(1996년 제작)** : 언어<br/>
**ECMA Script(1997년 제작)** : 규격 표준(=스펙)<br/>
=> 서로가 기반으로 함<br/>

\*ECMA-262 : 흔히 자바스크립트라고 부름<br/>

**ES5(2009년 출시)**<br/>
: 이전 버전보다 더 철저한 오류 검사를 제공<br/>
오류 경향이 있는 구조를 피하는 하부집합인 'strict mode'를 추가<br/>
ES3의 규격에 있는 수많은 애매한 부분을 명확히 함<br/>

**ES6(2015년 출시)<br/>**
(ECMA-262 표준의 제 6판 - 6번째 ES)<br/>
: 클래스와 모듈같은 복잡한 응용 프로그램을 작성하기 위한 새로운 문법 추가<br/>
(이러한 문법의 의미는 5판의 strict mode와 같은 방법으로 정의됨)
ES5 보다 간결해진 문법<br/>

++ 다양한 브라우저 간의 호환성 문제로 ES6의 사양을 준수하지 않는 경우, Babel이 작성된 코드를 ES5 코드로 바꿔주는 역할을 해줌<br/>

<br/>

## **1. 변수 선언 키워드**<br/>

- `ES5` : var ({ }에 상관없이 스코프가 실행됨)<br/>

- `ES6` : const/let 변수 설정 가능<br/>
  (var보다 예측 가능한 코드 제작 가능)<br/>
  - const : 변수재할당 불가능<br/>
  - let : 변수 재할당 가능<br/>

## **2. 템플릿 리터럴**

- `ES5`: 더하기(+) 연산자 사용하여 문자열 연결함

```javascript
// ES5
var str = "World!";
var word = "Hello" + str;
```

- `ES6` : ``(back tick)으로 사용
  ${ } 중괄호 앞 달러 표시로 자바스크립트 표현식 사용 가능

```javascript
// ES6
let str = "World!";
let word = `Hello ${str}`;
```

## **3. 객체 리터럴**

: 객체를 정의할 때 직접 속성명과 속성값을 각각 문자로 적어서 객체를 정의하는 것<br/>
-> `ES6`에서는 이 객체 리터럴이 좀 더 편하게 향상 됨<br/>
==> 향상된 객체 리터럴<br/>

- 속성명과 속성값의 변수명이 같다면, 하나만 기입가능

```javascript
// ES5
var name = "jinn";
var obj = {
  age: "27",
  name: name, // 여기서 Name이라는 속성명(key값)의 값(value값)으로 변수 name을 지정
};
```

```javascript
// ES6
constname = "jinn";
const obj = {
  age: "27",
  name, // 한번만 적어도 name:name 처럼 동작함
};
```

- 메소드 속성을 정의할 때 function( ) 키워드 생략 가능

```javascript
// ES5
var obj = {
  prop: "something",
  method: function () {
    // 반드시 메서드일 경우 function() 키워드 필요
    console.log("이것은 메소드입니다");
  },
};
```

```javascript
/// ES6
const obj = {
  porp: "somethind",
  method() {
    // 바로 함수명 입력
    console.log("이것은 메서드입니다.");
  },
};
```

## **4. 화살표 함수**

`ES5`

```javascript
// ES5
function plusFn(a, b) {
  return a + b;
}
```

`ES6`

- 화살표 함수로 함수 표현식 사용 가능
- 화살표 함수 추가 -> 간결한 함수 설정 : 가독성 및 유지 보수성이 상승
- 화살표 함수에서 함수의 본문에 return만 있는 경우 return과 { } 생략 가능(같이 생략해야함)
- return문에서 소괄호 사용 가능

++ map, filter, reduce 등의 내장 함수와 사용 가능

```javascript
// ES6
// 함수 표현식 - 화살표 함수
const plusFn = (a, b) => {
  return a + b;
};
// 함수 표현식 - 화살표 함수 (생략형)
const plusFn = (a, b) => a + b;
```

## **5. 구조 분해 할당**

: 비구조화를 통해 배열/객체 값을 새 변수에 쉽게 할당할 수 있음

```javascript
//ES5
const contacts = {
  name : 'jinn'
  age : '27'
};

let name = contacts.name;
let age = contacts.age;
```

```javascript
//ES6
const contacts = {
  name : 'jinn'
  age : '27'
};

let {name, age} = contacts;
console.log(name);
console.log(age);
```

<br/>

<hr>

<br/>

참조 <br/>
<https://egas.tistory.com/71> <br/>
<https://hanamon.kr/javascript-es6-%EB%AC%B8%EB%B2%95/> <br/>
<https://wormwlrm.github.io/2018/10/03/What-is-the-difference-between-javascript-and-ecmascript.html> <br/>

<br/>
이해를 한 내용들 위주로 하여 작성하였으며, 추가로 변한 내용들은 이후에 이해하면 추가할 예정
<br/>
<br/>
<br/>

(잘못된 부분이 있다면 메일로 연락주세요.)
