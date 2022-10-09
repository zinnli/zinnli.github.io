---
layout: post
title: React | TodoList 코드리뷰
date: 2022-10-06 16:00:30 +0900
category: React
---

# **React로 TodoList 만들기**

<br/>

과제로 받은 Todo List 만들기를 일주일동안 진행했다<br/><br/>
컴포넌트로 나누는 것을 연습할 겸 정말 각 부분마다 다 컴포넌트로 줬기때문에 파트 별로 다 나눠져 있는 상태이다.<br/>

아래는 해당 코드 리뷰 예정 => '내가 작성 + 주위에 물어보고 작성 + 기술매니저님 조언' 으로 이루어진 코드이며 <br/>아래의 내용들은 현재는 이해하고 있지만 시간이 지나면 잊을 것 같아서 이해할 수 있도록 기록으로 남겨두려고 한다.<br/><br/>

이해를 돕기 위해 아래는 해당 웹을 구동했을 때의 영상
<br/><br/>

![221006_todolist](https://user-images.githubusercontent.com/102575747/194336505-41f5b48c-4413-4bcc-b7f7-3c31e10fcccf.gif)

<br/>

Todo List 링크
<br/>

<https://vercel.com/zinnli/react-fir-homework>

<br/>

<hr/>

### **`App.js`**

<br/>

```javascript

import React from "react";
import "./App.css";
import TodoList from "./component/pages/TodoList";

function ¹App() {
     ²return ³<TodoList />;
}

export default App;

```

<br/>

1. 제일 먼저 App.js 부터 시작
2. 이 부분에 html에 해당하는 내용을 입력
3. 입력된 html 내용들을 각각의 부분에 맞는 형태로 컴포넌트로 짜주고
   -> TodoList 안에 전체적으로 컴포넌트 입력

<br/>
** 과제에서 지정해준 폴더 구조가 있어서 그거에 맞추다 보니 다 쪼개놨음

<br/><br/>

<hr/>

### **`src / component / pages / TodoList.jsx`**

<br/>

**한 페이지를 구성하는 pages 폴더에 있는 TodoList**

<br/>

```react

function TodoList() {
      ¹const [todos, setTodos] = useState([
          {
               id: 0,
               title: "개인과제 제출",
               body: "React 완벽 복습 후 과제 배포까지 완료",
               isDone: false,
          },
          {
               id: 1,
               title: "팀과제 노션에 정리",
               body: "따로 조사한 분량 하나로 정리하여 업로드",
               isDone: false,
          },
     ]);

```

<br/>

1. 초기값 설정 : 기본적으로 입력되어 있는 값들 (Working에 보면 이미 나와있는 리스트)

<br/>

```react

     return (
          ¹<Layout>
               <Header />
               ²<Form setTodos={setTodos} todos={todos} />
               ³<List todos={todos} setTodos={setTodos} />
          </Layout>
     );
}

```

<br/>

**Layout으로 감싼 컴포넌트들**

1. 각 Header , Form, List를 Layout 컴포넌트로 감싸기
2. 2,3은 list > todo 의 버튼 관련 내용들이 form의 내용들을 사용하기 때문에 전체가 오고 갈 수 있도록 todos와 setTodos(props)를 보내줌
   <br/>
   <br/>

<hr/>

### **`src / component / layout / Layout.jsx`**

<br/>

```react

function Layout({ children }) {
      ¹return <div className="layout-container">{children}</div>;
}

```

<br/>

**Layout 컴포넌트**

1. wrapper 컴포넌트로 사용할 경우에는 해당 component 내에 작성된 요소들을 children 이라는 props로 컴포넌트에 전달됨

<br/>

<hr/>

### **`src / component / form / Form.jsx`**

<br/>

```react

function Form({ ¹setTodos, todos }) {
     ²const initialState = {
          id: 0,
          title: "",
          body: "",
          isDone: false,
     };
     ³const [todo, setTodo] = useState(initialState);

```

<br/>

**Form 컴포넌트의 state 값**

1. todoList에서 가져온 props => setTodos, todos
2. 초기값 객체
3. 초기값 설정

<br/>

```react

     const onChangeHandler = ¹(e) => {
          ²const { name, value } = e.target;
          ³setTodo({ ...todo, [name]: value });
     };

```

<br/>

**onChangeHandler : input 값을 입력한 내용들로 배열만듬**

1. input 값의 내용을 e로 받아옴
2. input name : const안의 name ===> title/body에 해당하는 부분<br/>
   input value : const 안의 value ===> value는 입력값 추출
3. 기존의 list == ...todo<br/>
   [name]: value <== input의 name 값과 해당하는 value값<br/>

<br/>

```react

let number = 2;

     const onSubmitHandler = (e) => {
          ¹e.preventDefault();
          ²if (todo.title === "" || todo.body === "") return;
          ³setTodos([...todos, { ...todo, id: number }]);
          ⁴setTodo(initialState);
          ⁵number++;
     };

```

<br/>

**onSubmitHandler : input 값을 입력하면 만들어진 배열이 리스트에 추가되도록 설정**

1. 추가하기 클릭 시 자동 윈도우 새로고침 막기<br/>
2. input이 빈칸일 때 추가하기 입력 안됨<br/>
3. 후자 실행한 것을 ...todos에 넣음<br/><br/>
   여기서 { ...todo, id: number } 의 경우<br/> ==> id 값에 처음에 지정해준 number 값을 넣어줌<br/> ==> 5번으로 onSubmitHandler가 실행될 때마다 id 값이 +1씩 오름<br/>
4. 입력 후 input을 빈칸으로 만들어줌(이후에 또 추가할 수 있도록)<br/>

<br/>

```react

     return (
          <form className="input-form" ³onSubmit={onSubmitHandler}>
               <div className="input-main">
                    <label>
                         제목
                         <input
                              type="text"
                              className="title"
                              name="title"
                              ¹value={todo.title}
                              ²onChange={onChangeHandler}
                         ></input>
                    </label>
                    <label>
                         내용
                         <input
                              type="text"
                              className="text"
                              name="body"
                              ¹value={todo.body}
                              ²onChange={onChangeHandler}
                         ></input>
                    </label>
               </div>
               <button>추가하기</button>
          </form>
     );
}

```

<br/>

**Form에 입력했을 때**

1. 버튼을 눌렀을 때 value값이 없어지게 하기 위해<br/>
2. input 값 입력한 것을 가져옴<br/>
3. 추가하기(onSubmit는 Form 문에서만 사용가능)<br/>

<br/>

<hr/>

### **`src / component / list / List.jsx`**

<br/>

```react

function List({ todos, setTodos }) {
     const workingList = ¹todos.filter((item) => item.isDone === false);
     const doneList = ¹todos.filter((item) => item.isDone === true);

```

<br/>

**workingList/doneList 함수**

1. workingList : isDone=false 인 애들만 뽑아내서 workingList의 배열로 만들어냄<br/>
   doneList : isDone=true 인 애들만 뽑아내서 doneList 배열로 만들어냄
   <br/>
   <br/>

```react

     return (
          <div className="list-container">
               <h2 className="list-title">Working..✍🏻</h2>
               <div>
                    ¹{workingList.map((doList) => (
                         <Todo
                              doList={doList}
                              todos={todos}
                              ²key={doList.id}
                              setTodos={setTodos}
                         />
                    ))}
               </div>

               <h2 className="list-title">Done..!</h2>
               <div>
                    ¹{doneList.map((doList) => (
                         <Todo
                              doList={doList}
                              todos={todos}
                              ²key={doList.id}
                              setTodos={setTodos}
                         />
                    ))}
               </div>
          </div>
     );
}

```

<br/>

**working과 done 유무에 따라 나눠진 list**

1. doList 는 각 workingList/doneList 안의 배열의 요소
2. 이렇게 key를 주지 않으면 웹에서 구동했을 때 console에 빨간 오류코드가 뜸(unique key ...) ==> 구동은 가능함

<br/>

<hr/>

### **`src / component / todo / Todo.jsx`**

<br/>

```react

function ¹Todo({ todos, doList, setTodos }) {
     const ²{ title, body } = doList;

```

<br/>

1. List 에서 가져온 props
2. return 부분의 Form 컴포넌트에서 입력했던 값

<br/>

```react

     const onDelHandler = ¹(Id) => {
          const ²newTodos = todos.filter((item) => item.id !== Id);
          ³setTodos(newTodos);
     };

```

<br/>

**onDelHandler: 삭제하기 버튼 클릭시 해당 todo 삭제**

1. ID = onDelHandler가 돌아갈 때 (doList.id)에 들어가는 값
2. 입력된 doList.id 값을 todos 배열에서 선택한 요소와 비교하여 필터링함<br/> -> id가 같지 않은 경우를 필터링(같지 않은 값이 선택하지 않은 값)<br/>
   (= 삭제 버튼을 누른 todo 이외의 나머지 배열을 도출하기 위해 item.id !== Id 부정연산자 사용)
3. 그 외의 배열의 요소들로 만들어진 배열

<br/>

```react

     const onEditHandler = ¹(Id) => {
          const newTodos = todos.map((item) => {
               ²if (item.id === Id) {
                    item.isDone = !item.isDone;
               }
               return item;
          });
          ³setTodos(newTodos);
     };

```

<br/>

**onEditHandler: 버튼 클릭시 버튼이 취소/완료로 변경됨**

1. ID = onEditHandler가 돌아갈 때 (doList.id)에 들어가는 값
2. item.id 와 doList.id 값 비교<br/>
   id의 값이 같다면 --> isDone 값을 반대로 줌(ex. false -> true) => 취소/완료 버튼 변경 및 위치(아래 위)를 변경할 수 있도록 설정<br/>
   id의 값이 다르다면 --> item 그대로 나옴
3. 위에서 map으로 도출된 결과값

<br/>

```react

     return (
          <div className="list-todo">
               <h3>¹{title}</h3>
               <p>¹{body}</p>
               <div>
                    ²<button onClick={() => onDelHandler(doList.id)}>
                         삭제하기
                    </button>
                    ³<button onClick={() => onEditHandler(doList.id)}>
                         ⁴{doList.isDone ? "취소" : "완료"}
                    </button>
               </div>
          </div>
     );
}

```

<br/>

**todo 카드의 형식 - 입력값들 , 삭제하기 버튼 , 취소/완료 버튼**

1. form에서 추가했던 입력값을 보여줌
2. 삭제하기 버튼을 눌렀을 때 발생하는 코드
3. 취소/완료 버튼을 눌렀을 때 변경되는 버튼(+list에서의 위치)을 발생하는 코드
4. doList의 isDone 값이 true 일 때 '취소', false 일때 '완료'

   <br/>

\*\* **`주의하기`**

```react
// 1. 위 코드의 (2,3)번에서 사용한 함수
onClick={()=> onDelHandler(doList.id)}

// 2. 일반적인 함수
onClick={ }
```

<br/>

2,3번에서 사용한 코드를 일반적인 코드 형식으로 작성하면

: onDelHandler()의 괄호때문에 윈도우가 켜지면서 자동 실행됨 ==> 무한 루프 발생<br/>

그래서 1번째 코드 형식으로 진행함
<br/>

<br/>

<hr/>

<br/><br/>

일주일동안 진행했던 todo list 총 정리<br/>(이해 안되는 부분들은 반복해서(+주위에 물어보면서) 3번정도씩 주석 적으면서 정리한 것 같은데 맞는 방식인지는 모르겠다)

<br/>

(잘못된 부분이 있다면 메일로 연락주세요.)
