---
layout: post
title: React | Lifecycle, Hooks
date: 2022-10-16 22:00:30 +0900
category: React
---

# - Lifecycle, Hooks -

<br/>

### **LifeCycle**

: 생명주기 메소드(클래스형 컴포넌트에서 주로 사용)
<br/>
컴포넌트가 브라우저상에 나타남 -> 업데이트 -> 사라짐

<br/>=> 이때 호출되는 메서드
<br/>
<br/>

#### react의 lifecycle

<br/>

![image](https://user-images.githubusercontent.com/102575747/196040931-4af0c622-7740-4686-a765-7814b240d015.png)

<br/>

<span style='font-size: 13px'>(제일 자주 나오는 이미지)</span>

<br/>
위의 변화가 발생할 때마다 생명주기 메소드가 호출됨
<br/>

1.   **생성될 때(마운트)** : DOM이 생성되고 웹브라우저 상에서 나타남

2.   **업데이트할 때(업데이트)**

     -    props가 바뀔 때
     -    state가 바뀔 때
     -    부모 컴포넌트가 리렌더링 될 때
     -    this.forceUpdate로 강제로 렌더링을 트리거할 때

3.   **제거할 때(언마운트)** : DOM에서 제거됨

<br/>

#### Lifecycle method

1.   **생성될 때(마운트)**

     -    construcor : 컴포넌트가 만들어지면 가장 먼저 실행되는 메서드
     -    getDerivedStateFromProps : props로 받아온 것을 stae에 넣어주고 싶을 때 사용 (컴포넌트가 처음 렌더링 되기 전에 호출 / 이후 리렌더링 되기 전에도 매번 실행)
     -    render : 컴포넌트를 렌더링하는 메서드
     -    componentDivMount : 첫번째 렌더링 후에 호출되는 메서드

          <br/>

2.   **업데이트할 때(업데이트)**

     -    getDerivedStateFromProps : 컴포넌트의 props나 state가 바뀌었을 때도 호출됨
     -    shouldComponentUpdate : 컴포넌트가 리렌더링 할지 말지를 결정(최적화 할 때 사용)
     -    render : 컴포넌트를 렌더링하는 메서드
     -    getSnapshotBeforeUpdate : 컴포넌트에 변화가 일어나기 직전의 DOM 상태를 가져와서 특정 값을 반환(componentDidUpdate 함수에서 받아와서 사용)
     -    componentDidUpdate : 리렌더링이 마치고, 화면에 우리가 원하는 변화가 모두 반영되고 난 뒤 호출되는 메서드(getSnapshotBeforeUpdate 에서 반환한 값을 조회)

          <br/>

3.   **제거할 때(언마운트)**

     -    componentWillUnmount : 컴포넌트가 화면에서 사라지기 직전에 호출(DOM에 직접 등록했었던 이벤트를 제거)
          <br/>
          <br/>

---

### Hook

-    Hooks는 리액트 v16.8에 새로 도입된 기능.
-    함수형 컴포넌트에 사용되는 몇 가지 기술을 Hook이라고 함.
-    리액트 훅은 함수형 컴포넌트가 클래스형 컴포넌트의 기능을 사용할 수 있도록 해주는 기능.
-    함수형 컴포넌트에서도 상태 관리를 할 수 있는 useState, 그리고 렌더링 직후 작업을 설정하는 useEffect등의 기능 등을 제공.

   <br/>
   함수 컴포넌트도 클래스 컴포넌트처럼 사용 가능
   <br/>
   ⇒ 같은 Hook을 여러번 호출 가능
   <br/>
   ⇒ 몸통 안 복합 실행문의 { }에서는 사용할 수 없음(js의 black scope는 block외에는 사용 불가)
   <br/>
   ⇒ 비동기 함수는 콜백함수로 사용할 수 없음
<br/>
<br/>

#### 지원하는 Hooks

-    `useState` : 컴포넌트의 state 관리(상태에 따라 다른 화면 출력)
-    `useEffect` : 렌더링 이후에 실행할 코드를 만들 수 있음 → 변수가 변경될때마다 특정기능이 작동하도록 할 수 있음
-    `useContext` : 부모 컴포넌트와 자식 컴포넌트 간의 변수와 함수를 전역적으로 정의
-    `useReducer` : state 업데이트 로직을 reducer 함수에 따로 분리할 수 있음
-    `useRef` : 컴포넌트나 HTML 요소를 레퍼런스로 관리 가능
-    `forwardRef` : useRef로 만든 레퍼런스를 상위 컴포넌트로 전달가능
-    `useImperativeHandle` : useRef로 만든 레퍼런스 상태에 따라 실행할 함수를 정의할 수 있음
-    `useMeomo`, `useCallback` : 의존성 배열에 적힌 값이 변할 때만 값, 함수를 다시 정의할 수 있음(재렌더링시 x)
-    `useLayoutEffect` : 모든 DOM 변경 후 브라우저가 화면을 그리기 전에 실행되는 기능을 정할 수 있음
-    `useDebugValue` : 사용자 정의 Hook의 디버깅을 도와줌

<br/>
<br/>
<hr/>

<br/>
<br/>
출처
<br/>
<http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/>
<br/>
<https://react.vlpt.us/basic/25-lifecycle.html>
