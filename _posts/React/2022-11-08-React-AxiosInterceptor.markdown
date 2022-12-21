---
layout: post
title: React | Axios Interceptor
date: 2022-11-08 22:00:30 +0900
category: React
---

# - Axios Interceptor -

<br/>

### **Axios intercepter**

: then 또는 catch로 처리되기 전에 요청과 응답을 가로챌 수 있음

=> header의 Token을 항상 불러와서 요청하는 것을 인터셉터 추가로 이후 각각 안 넣어줘도 되서 간편해짐
(==> 쉽게 말하면 같은 위치에 공통 코드가 들어가는 경우에 사용하면 편함 + 유지보수가 편함)

<br/>

-    axios 사이트에 나온 방식

```react
// 요청 인터셉터 추가하기
axios.interceptors.request.use(function (config) {
    // 요청이 전달되기 전에 작업 수행
    return config;
  }, function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  });

// 응답 인터셉터 추가하기
axios.interceptors.response.use(function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  }, function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
  });
```

<br/>

-    내가 사용하는 방식

```react
//일반적인 api 선언 방식
const api = axios.create({
    baseURL: "배포주소/api",
})

//env 활용시 아래의 형식으로 api를 선언해주면 됨
const api axios.create({
    baseURL : `${process.env.REACT_APP}/api`
})

api.interceptors.request.use(
    function (config) {
      if (//아래의 url을 제외하고 header의 access_token을 넣어줌
        config.url !== "login" ||
        config.url !== "signup" ||
        ) {config.headers.Authorization = "sessionStorage.getItem("Access_Token")"}
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

//여기에 응답부분의 interceptor를 넣어줘도 되지만 여러 곳에 사용되지 않기때문에 굳이 사용하지 않아도 됨

  export default api;
```

<br/>
++ 사용시 axios 에서는 api를 불러내 url로 구분시켜준다.("login"외의 내용에만 interceptor의 config 부분의 해당 하는 내용들이 들어감)

```react
//redux에서 사용시
export const __name = createAsyncThunk(
  "NAME",
  async (payload, thunkAPI) => {
    try {
      const { data } = await api.get("url");
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
```

<br/>
<hr/>

<br/>
출처

<br/>

<https://axios-http.com/kr/docs/interceptors>

<https://velog.io/@subanggu/axios-interceptor-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0>

항해 99 axios 활용 가이드
