---
layout: post
title: React | Redux TodoList 코드리뷰
date: 2022-10-13 21:00:30 +0900
categories: [React]
---

# **React로 TodoList 만들기**

<br/>

지난주에 진행했던 TodoList를 redux로 구현하는 과제를 일주일동안 진행했다!
<br/>

이번 리뷰도 지난번처럼 => '내가 작성 + 주위에 물어보고 작성 + 기술매니저님 조언' 으로 이루어진 코드이며 <br/>아래의 내용들은 현재는 이해하고 있지만 시간이 지나면 잊을 것 같아서 이해할 수 있도록 기록으로 남겨두려고 한다.<br/><br/>
진행 순서<br/> : 이전에 했던 코드 -> 리듀서로 먼저 함수 작성 + 각 component 정리 -> state, props에 해당하는 부분들(쓰이지x) 정리
<br/>
<br/>
이해를 돕기 위해 아래는 해당 웹을 구동했을 때의 gif
<br/><br/>

![final_redux](https://user-images.githubusercontent.com/102575747/195410591-bc0b717c-a047-46c7-b375-cb9b807576c7.gif)

<br/>

Todo List 링크
<br/>

<https://homeworkredux.vercel.app/>

<br/>

---

<br/>
들어가기 전에..
<br/>

`설치한 패키지`
<br/>

- yarn add styled-components // styled 컴포넌트로 css파일 분리하지않고 진행
- yarn add redux react-redux // redux 관련 패키지

<br/>

++ 이전에 작성한 todoList와 같은 부분은 설명을
<br/>
<br/>

---

### **`/src/redux/config/configStore.js`**

### **`configStore.js`**

<br/>

```react
import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/Todos";

const rootReducer = combineReducers({
     Todos: todos,
     // Feeds: feeds, ... 의 형식으로 추가됨 / 양 옆의  같으면 생력가능
});
const store = createStore(rootReducer);

export default store;
```

<br/>

redux store에는 하나의 reducer만 연결할 수 있기때문에 combineReducers를 이용하여 통합함.

<br/><br/>

<hr/>

### **`/src/index.js `**

### **`index.js`**

<br/>

```react
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import store from "./redux/config/configStore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
     //.
     ¹<Provider store={store}>
          <App />
     </Provider>
);

```

<br/>

1. App을 Provider로 감싸주고, configStore에서 export default 한 store를 넣어줌

<br/>

<hr/>

### **`/src/shared/Router.js `**

### **`Router.js`**

<br/>

```react
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../component/pages/Home";
import Detail from "../component/pages/Detail";

const Router = () => {
     return (
          <BrowserRouter>
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="Detail" element={<Detail />} />
                    ¹<Route path="Detail/:id" element={<Detail />} />
               </Routes>
          </BrowserRouter>
     );
};

export default Router;
```

<br/>

1. detail에서 id값에 따라 다른 페이지가 될 수 있도록 Detail/:id로 들어감

<br/>
** 상세페이지도 따로 들어가기때문에 router로 해당 부분 나눠줌

<br/><br/>

<hr/>

### **`/src/App.js `**

### **`App.js`**

<br/>

```react
import React from "react";
import "./App.css";

import Router from "./shared/Router";

function App() {
     return <Router />;
}

export default App;
```

<br/>
router와 연결
<br/><br/>
<br/>

<hr/>

### **`/src/component/pages/Home.jsx `**

### **`Home.js`**

<br/>

```react
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../component/pages/Home";
import Detail from "../component/pages/Detail";

const Router = () => {
     return (
          <BrowserRouter>
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="Detail" element={<Detail />} />
                    ¹<Route path="Detail/:id" element={<Detail />} />
               </Routes>
          </BrowserRouter>
     );
};

export default Router;
```

<br/>
<br/>

**각 컴포넌트들을 연결시켜주는 Home 페이지**

<br/>
<hr/>

### **`/src/redux/modules/Todos.js `**

### **`Todos.js`**

**redux의 모듈 전체 코드 redux 전역 상태 관리**

<br/>

```react
// 액션 생성 함수
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLESTATE_TODO = "TOGGLESTATE_TODO";

// 액션 함수
let id = 2;
export const addTodo = (payload) => {
     return {
          type: ADD_TODO,
          ¹id: id++,
          payload,
     };
};

export const deleteTodo = (payload) => {
     return {
          type: DELETE_TODO,
          payload,
     };
};

export const toggleStateTodo = (payload) => {
     return {
          type: TOGGLESTATE_TODO,
          payload,
     };
};

// 초기값
²const initialState = [
     {
          id: 1,
          title: "리액트 강의보기",
          body: "챕터 1부터 챕터 12까지 학습",
          isDone: false,
     },
     {
          id: 2,
          title: "점심 먹기",
          body: "점심 뭐먹지..?",
          isDone: false,
     },
];
```

<br/>

**redux의 모듈의 액션 생성 함수 / 액션 함수 / 초기값**

1. 요소마다 증가하는 id 값
2. 주어진 값이 있어서 초기값으로 배열을 먼저 줌

<br/>

```react
//리듀서
¹const Todos = (state = initialState, action) => {
     switch (action.type) {
          case ADD_TODO:
               ²return state.concat({ ...action.payload, id: id });
          case DELETE_TODO:
               ³return state.filter((todo) => todo.id !== action.payload);
          case TOGGLESTATE_TODO:
               ⁴return [
                    ...state.map((todo) => {
                         ⁵if (todo.id === action.payload) {
                              ⁶return { ...todo, isDone: !todo.isDone };
                         }
                         ⁷return todo;
                    }),
               ];
          ⁸default:
               return state;
     }
};

export default Todos;
```

<br/>

**redux의 모듈의 리듀서 -- 각각의 상태를 어떻게 변화시킬지 관리해주는 정보**

1. return의 결과값 == state값
2. concat은 기존 배열을 복사한 후 요소를 추가하여 새 배열을 리턴함 불변성때문에 형태는 유지 -> payload값 추가됨
3. id가 같지 않은 것만 필터링함 (= 삭제 버튼 클릭한거 외의 요소만 있는 배열 출력)
4. initialState 값과 형태를 맞춰줘야 하기 때문에 [] 표현
5. map을 통해 하나씩 비교 했을 때 요소의 id와 클릭한 요소의 id가 같다면
6. 같은 요소들은 isDone을 반대로 바꿔줌
7. 나머지는 원래대로 출력됨
8. default 상태이면 기존의 state값 반환(기본적으로 항상 유지해야함)

<br/>

<hr/>
<br/>

_\*\* 여기서부턴 component들인데 여기서부턴 styled-component사용으로 태그들 이름을 조금 수정한 상태_
<br/>
<br/>

### **`src / component / layout / Layout.jsx`**

### **`Layout.js`**

<br/>

```react
import React from "react";
import styled from "styled-components";

function Layout({ children }) {
     return <LayoutContainer>{children}</LayoutContainer>;
}

export default Layout;
```

<br/>

<hr/>

### **`src / component / form / Form.jsx`**

### **`Form.js`**

<br/>

```react
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
¹import { addTodo } from "../../redux/modules/Todos";

function Form() {
     const initialState = {
          id: 0,
          title: "",
          body: "",
          isDone: false,
     };

     const [todo, setTodo] = useState(initialState);

     const onChangeHandler = (e) => {
          const { name, value } = e.target;
          ²setTodo({ ...todo, [name]: value });
     };
 ³const dispatch = useDispatch();

     const onSubmitHandler = (e) => {
          e.preventDefault();
          if (todo.title === "" || todo.body === "") return;
          ⁴dispatch(addTodo({ ...todo }));
          setTodo(initialState);
     };
```

<br/>

```react
// addTodo에 해당하는 reducer
case ADD_TODO:
               return state.concat({ ...action.payload, id: id });
```

<br/>

**onChangeHandler, onSubmitHandler - change 핸들러는 이전과 동일 / submit 핸들러는 redux 사용**

1. reducer에서 작성한 액션 함수를 불러옴
2. 요소들의 name에 따른 값들이 todo에 들어가서 setTodo를 통해 배열이 만들어짐
3. 리듀서의 addTodo에 todo 요소를 넣어줌(리듀서에서 id값이 주어짐)

<br/>

```react
  return (
          <InputForm onSubmit={onSubmitHandler}>
               <InputMain>
                    <label>
                         제목{" "}
                         <input
                              type="text"
                              name="title"
                              value={todo.title}
                              onChange={onChangeHandler}
                         ></input>
                    </label>
                    <label>
                         내용{" "}
                         <input
                              type="text"
                              name="body"
                              value={todo.body}
                              onChange={onChangeHandler}
                         ></input>
                    </label>
               </InputMain>
               <button>추가하기</button>
          </InputForm>
     );
}

export default Form;
```

<br/>

**return값은 이전과 동일**

<br/>
<br/>
<hr/>

### **`src / component / list / List.jsx`**

### **`List.js`**

<br/>

```react
import React from "react";
import Todo from "../todo/Todo";
import styled from "styled-components";
¹import { useSelector } from "react-redux";

function List() {
     ²const Todos = useSelector((state) => state.Todos);
     ³const workingList = Todos.filter((item) => item.isDone === false);
     const doneList = Todos.filter((item) => item.isDone === true);
```

<br/>

**workingList/doneList 함수**

1.  useSelector = 스토어 조회
2.  등록한 데이터를 가져옴(store 조회)
3.  등록한 데이터들의 각 요소의 isDone이 false인 요소들 걸러냄
    <br/>
    <br/>

```react
return (
          <ListContainer>
               <h2 className="list-title">Working..✍🏻</h2>
               <StyleList>
                    {workingList.map((doList) => (
                         <Todo
                              ¹doList={doList} //props
                              ²key={doList.id}
                         />
                    ))}
               </StyleList>
               <h2 className="list-title">Done..!</h2>
               <StyleList>
                    ³{doneList.map((doList) => (
                         <Todo doList={doList} key={doList.id} />
                    ))}
               </StyleList>
          </ListContainer>
     );
}

export default List;
```

<br/>

**working과 done 유무에 따라 나눠진 list(return 부분)**

1. doList는 list와 todo를 연결해주는 props
2. todo 의 리스트를 변경해주기 위해 사용
3. 함수단에서 필터된 doneList에 있는 요소를 하나씩 전달받아 <Todo/> 컴포넌트로 된 배열을 만듬

<br/>

<hr/>

### **`src / component / todo / Todo.jsx`**

### **`Todo.jsx`**

<br/>

```react
import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
¹import { deleteTodo, toggleStateTodo } from "../../redux/modules/Todos";

²function Todo({ doList }) {
     const dispatch = useDispatch();

     const onDelHandler = (del) => {
          dispatch(deleteTodo(del));
     };

     const onEditHandler = (edit) => {
          dispatch(toggleStateTodo(edit));
     };
```

<br/>

```react
// deletTodo 해당하는 reducer(onDelHandler)
 case DELETE_TODO:
               return state.filter((todo) => todo.id !== action.payload);

// toggleTodo에 해당하는 reducer(onEditHandler)
case TOGGLESTATE_TODO:
     return [
          ...state.map((todo) => {
               if (todo.id === action.payload) {
                    return { ...todo, isDone: !todo.isDone };
               }
                return todo;
          }),
     ];
```

<br/>

**onDelHandler, onEditHandler - redux 사용 / 상세페이지 이동 링크(함수부분)**

1. reducer에서 작성한 액션함수를 가져옴
2. List에서 props 가져옴

<br/>

```react
     return (
          <ListTodo>
               <STupside>
                    ¹<Link to={`/Detail/${doList.id}`} className="link">
                         상세보기
                    </Link>
               </STupside>
               <h3>{doList.title}</h3>
               <p>{doList.body}</p>
               <div>
                    ²<Btn onClick={() => onDelHandler(doList.id)}>삭제하기</Btn>
                    <Btn onClick={() => onEditHandler(doList.id)}>
                         {doList.isDone ? "취소" : "완료"}
                    </Btn>
               </div>
          </ListTodo>
     );
}

export default Todo;
```

<br/>

**onDelHandler, onEditHandler - redux 사용 / 상세페이지 이동 링크(return부분)**

1. url에 각 doList의 id값이 들어가도록 함
2. id값을 비교해서 삭제/수정(reducer에 해당 id를 넣었다고 생각해보기!)

<br/>
<br/>

<hr/>

### **`/src/component/pages/Detail.jsx`**

### **`Detail.js`**

<br/>

```react
import React from "react";
import styled from "styled-components";

¹import { useNavigate } from "react-router-dom";
²import { useParams } from "react-router-dom";
³import { useSelector } from "react-redux";

const Detail = () => {
     ⁴const navigate = useNavigate();
     ⁵const { id } = useParams();
     ⁶const Todos = useSelector((state) => state.Todos);
     ⁷const todo = Todos.filter((item) => item.id === Number(id));
```

<br/>

**Todo 아이템의 상세보기를 클릭했을 때 나타나는 페이지(함수 부분)**

1. 4번과 함께 사용 - 다른 페이지로 보내고자 할 때 사용
2. 5번처럼 사용 - path에 있는 id값을 조회할 수 있게 해주는 훅
   여기서는 객체형태--url 주소 id 부분 --> 활용하여 각각 다른 페이지를 만들기 위해 사용함<br/>
3. 6번처럼 사용 - useSelector는 store 조회
4. Todos의 요소의 id와 url의 id값이 같은 요소들로 이루어진 todo<br/>
   useParams의 id는 문자열이기 때문에 Number로 숫자로 변환시켜줌

```react
     return (
          <STdetail>
               <div>
                    <h3>ID : {id}</h3>
                    <button
                         ¹onClick={() => {
                              navigate("/");
                         }}
                    >
                         이전으로
                    </button>
               </div>
               ²<h1>{todo[0].title}</h1>
               <p>{todo[0].body}</p>
          </STdetail>
     );
};
```

<br/>

**Todo 아이템의 상세보기 페이지(return 부분)**

1. 이전으로 클릭시 "/" path로 이동
2. todo 배열의 요소는 1개뿐임 -> 0번째 배열의 값들을 가져옴(함수단에서 필터로 하나만 걸러냈기 때문에)

<br/>

\*\* **_여기서 잠깐!@@_**

<br/>

```react
//오류
const todoIndex = Number(id) - 1;
<h1>{Todos[todoIndex].title}</h1>

//해결
const todo = Todos.filter((item) => item.id === Number(id));
<h1>{todo[0].title}</h1>
```

<br/>
처음에 했던 방식 --> id가 1부터 시작했기때문에 id에서 1을 빼는 형식으로 Todos의 내용을 가져올 수 있게 코드를 짰었지만!,<br/>
이전에 작성한 todo 아이템을 삭제하면 뒤에 입력한 todo 아이템들이 출력되지않는 것을 발견했고 id를 확인했을 때 url의 id는 그대로지만 상세보기 페이지의 id는 삭제한 todo의 갯수만큼 줄어든 것을 알 수 있었고,<br/>
해당부분은  filter로 배열에서 하나의 요소만 빼와서 해당 id에 맞는 내용들만 가지고 올 수 있도록 했음

<br/>

<br/>

<hr/>

<br/><br/>

이번주도 쉽지않은 일주일이었다... 진짜 눈물 줄줄 흘리면서 공부함 ㅎ.. 그래도 매주 조금씩 지식이 느는거 생각하면 뿌듯한 것 같기도 하고.. 내일부터 redux toolkit 한다던데 지금 redux도 애매모호한데 이거 괜찮은겅가,,??🤔
