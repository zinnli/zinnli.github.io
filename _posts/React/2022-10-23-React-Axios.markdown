---
layout: post
title: React | Axios
date: 2022-10-23 22:00:30 +0900
category: React
---

# - Axios -

<br/>

### **Axios**

: node.js와 브라우저를 위한 Promis 기반의 HTTP 클라이언트
<br/>

#### 설치방법

```react
//yarn
$ yarn add axios

//npm
$ npm install axios
```

<br/>

#### 특징

-    브라우저를 위해 XMLHttpRequests(XHR) 생성 : 서버와 상호작용할 때 사용
-    node.js를 위해 http 요청 생성
-    Promise API를 지원
-    요청 및 응답 인터셉트
-    요청 및 응답 데이터 변환
-    요청 취소
-    JSON 데이터 자동 변환
-    XSRF를 막기위한 클라이언트 사이드 지원

<br/>

여기서 잠깐!!

#### Promise란

-    ES6에서 비동기 처리를 다루기위해 사용되는 객체<br/>
     for 비동기적으로 해야할 작업이 많아진다면 코드의 구조는 깊어져 코드를 읽기 힘들어짐 => 콜백지옥
-    값을 리턴하거나 에러를 발생 시킬 수도 있음

<br/>

```react
//일반 코드
function printLater(number, fn) {
    setTimeout(
        function() { console.log(number); fn(); },
        1000
    );
}

printLater(1, function() {
    printLater(2, function() {
        printLater(3, function() {
            printLater(4); //코드의 구조가 계속해서 깊어짐
        })
    })
})

//Promise 코드
function printLater(number) {
    return new Promise( // 새 Promise 를 만들어서 리턴함
        resolve => {
            setTimeout( // 1초뒤 실행하도록 설정
                () => {
                    console.log(number);
                    resolve(); // promise 가 끝났음을 알림
                },
                1000
            )
        }
    )
}


printLater(1)
.then(() => printLater(2))
.then(() => printLater(3))
.then(() => printLater(4))
.then(() => printLater(5))
.then(() => printLater(6)) //일정한 코드의 구조
```

<br/>

#### Axios 커스텀 인스턴스

<br/>

```react
export const axiosInstance = axios.create({
     baseURL: "http://localhost:3001",
});
```

<br/>

#### Axios 생성

-    요청보내기

```react
import axios from "axios";

// axios는 axios.요청타입으로 요청을 보낼 수 있어요. 이 방식을 별칭 메서드라고 불러요.
// 예시)
// axios.get(url, config)
// axios.post(url, data, config)

// 어떤 요청을 보낼 지, 별칭 메서드 사용
axios.post('/cat', // 미리 약속한 주소
{name: 'perl', status: 'cute'}, // 서버가 필요로 하는 데이터를 넘겨주고,
{headers: { 'Authorization': '내 토큰 보내주기' },} // 누가 요청했는 지 알려줍니다. (config에서 해요!)
).then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});

```

-    기능별 api 객체 생성

```react
export const authApi = {
    // e.g) 회원 가입
    signup: someData =>
        instance.post("api/user", {
					someData: someData,
					someOtherData: someOtherData
        }),

    // e.g) 유저 프로필 변경
    editUserProfile: (someData) =>
        instance.put(`api/user/${userId}`, {
					someData: someData,
					someOtherData: someOtherData
 }),
```

<br/>

#### Axios 인터셉트

: 요청을 보내기 전에 같은 요청이 가지 않았는지 확인 / 요청에 실패하면 가로채서 재요청을 보냄

<br/>

-    전역으로 axios 객체 생성

```react
import axios from "axios";

...

const instance = axios.create({
	baseURL: "요청보낼 서버 도메인" // 요청을 www.aa.com/user로 보낸다면, www.aa.com까지 기록
});

// 가지고 있는 토큰 입력
// 로그인 전이면 토큰이 없으니 못 넣음
// 그럴 땐 로그인 하고 토큰을 받아왔을 때 넣어줌
instance.defaults.headers.common["Authorization"] = USER_TOKEN;

export default instance;
```

-    axios 객체 사용

```react
import instance from "../../shared/Request";

...

// 어떤 미들웨어
const getSomeData = () => {
	return function(dispatch){

		// 만들어둔 instance에 보낼 요청 타입과 주소로 요청
		instance.get("/some").then((res) => {
			//요청이 정상적으로 끝나고 응답을 받아왔다면 수행할 작업
		}).catch(err => {
			// 요청이 정상적으로 끝나지 않았을 때(오류 났을 때) 수행할 작업
			console.log("에러");
		})
	}
}
```

<br/>
<hr/>

<br/>
<br/>
출처

<br/>

<https://axios-http.com/kr/docs/intro>

<https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest>

<https://redux-advanced.vlpt.us/2/02.html>

항해 99 axios 활용 가이드

<br/>

++ 사실 찾아본 자료랑 적용해서 사용해본 입력값들이랑 조금 달라서 인지부조화가 온다.. 비교해서 공부도 해봐야할듯
