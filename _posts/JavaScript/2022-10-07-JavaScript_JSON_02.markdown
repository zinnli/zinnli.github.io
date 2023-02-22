---
layout: post
title: Java Script | JSON 정리
date: 2022-10-07 14:00:30 +0900
categories: [JavaScript]
tag: [json, object literal]
---

# JSON(JavaScript Object Notation)

: 애플리케이션 간에 `객체 데이터를 주고받는` 경량 텍스트 포맷

## **1) JSON의 제약**

- 객체 리터럴, 배열 리터럴, 문자열, 소수점 숫자, true, false, null을 값으로 사용

- 모든 문자열은 큰따옴표로 구분(작따 x)
- 모든 프로퍼티의 이름은 큰따옴표로 구분
- 맨 끝에 쉼표 x, 요소 생략 x

<br/>

#### **\* 객체 리터럴/배열 리터럴**

1.  **객체 리터럴**
    : { }(중괄호)로 묶인 0개 이상의 `객체의 프로퍼티명과 관련 값의 쌍`을 콤마로 구분한 리스트

```javascript
ex) const 변수명 = { a: "hi", b: 42, c: {}};
```

2. **배열 리터럴** : [ ](대괄호] 안에 ,(쉼표)로 배열요소를 구분해 `나열하여 선언`함

```javascript
ex) const 배열명 = [element1, element2, ...];
```

<br>

## **2) JSON의 문자열 예제**

```javascript
 {"name" : "Harry Smith", "age" : 42, "lucky numbers" : [17.29], "lucky" : false}
```

#### **\*\* Method**

( HTTP로 `서버와 통신할 때` 자주 사용함)

1. **JSON.stringify()** : 자바스크립트 `객체를 JSON 문자열로` 변환(= 객체를 string으로 변환)

```javascript
 ex) JSON.stringify(
  {name : [ 'Harry', undefined, 'Smith'], age: undefined})
→ '{"name" : ["Harry", null, "Smith"]}'
```

2. **JSON.parse()** : `JSON 문자열을 자바스크립트 객체`로 피싱(= string을 실제로 활용할 수 있는 배열로 변환)
   ex)

```javascript
JSON.parse('[1, 5, "false"]') → [1, 5, "false"]
```

<br>
<hr>
출처
[도서] 무던한 개발자를 위한 모던한 자바스크립트<br>
 mdn web docs
 
 : <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse>

<br/>
<br/>
볼 때마다 새로운 JSON.. 이전 블로그에서 작성한 부분 가져옴
<br/>
