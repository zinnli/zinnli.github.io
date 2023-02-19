---
layout: post
title: React | rc-slider
date: 2022-11-16 22:00:30 +0900
categories: [React]
---

# - RC-Slider -

<br/>

### ** RC-Slider**

: input을 양방향 range로 작업하고 싶어 방법을 찾다가 간단한 라이브러리로 구현이 가능한 부분을 찾게 되어 rc-slider를 활용하게 되었다

- 설치방법

   <br/>

  ```react
  npm install rc-slider
  yarn add rc-slider
  ```

<br/>

- 사용방법

     <br/>

  ![image](https://user-images.githubusercontent.com/102575747/202210087-d2602efc-9a61-4bd0-999a-3ac85f59a0a2.png)

     <br/>

  ```react
  import "./index.css"; //css변경시 node_moudules에서 빼서 작업해줘야함(.gitignore때문)
  import Slider from "rc-slider";

  const markers = {
            0: "0",
            1: "1시간",
            2: "2시간",
            3: "3시간",
            4: "4시간",
            5: "5시간",
            6: "6시간 이상",
      };

        <Slider
            range //range버튼을 두 개로 만들어줌
            min={0} //시작 지점 지정
            max={6} //마지막 지점 지정
            step={1} //몇칸씩 이동할지 설정
            dots={true} //step별로 dot 추가
            marks={markers} //각 dots별 이름 추가
            value={val1}
            onChange={setVal1}
        />
  ```

     <br/>
   \*\*추가!
         <br/>
   만약 slider에서 선택한 값을 보고싶다면? ~~(예시본 사진처럼)~~
         <br/>

  ```react
  const [val1, setVal1] = useState([0, 6]); // 전역관리 -> console찍어보면 배열형태로 선택값이 나타남

  <StFilterSlide>
        <p>
            {val1[0]}~{val1[1]}시간 //화면에 나올 수 있게 해줌
        </p>
        <Slider
            range
            min={0}
            max={6}
            value={val1}
            step={1}
            dots={true}
            name="time"
            marks={markers}
            onChange={setVal1}
        />
  </StFilterSlide>
  ```

     <br/>

  선택값은 2개뿐이므로 배열의 두가지값을 가져와 보여줌

  <br/>

---

  <br/>
  
사이트에 무척 잘 나와있어서 참고하면 참고 많이 될 듯!

  <br/>

이 라이브러리를 사용하지 않는다면 두 개의 인풋을 만들어 이어붙이는 방식으로 사용해야하는데 그렇게 되면 코드가 너무 복잡해질 것 같아 비교적 간단해보이는 라이브러리를 이용하여 만들었다.

  <br/>
range를 양방향으로 사용하고 싶다면 강추 ~~(우리팀에서 작업하기로 했던 부분은 취소되어서 난 필요없어졌다..히히..)~~
  <br/>
  <br/>

[rc-slider 발견 사이트 - click](https://velog.io/@rain98/rc-slider%EB%A1%9C-%EC%96%91%EB%B0%A9%ED%96%A5-range%EB%A7%8C%EB%93%A4%EA%B8%B0)
<br/>

[rc-slider 사이트 - click](https://slider-react-component.vercel.app)
