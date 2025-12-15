import MyButton from "./components/Button";
import Subject from "./components/Subject";
import Terms from "./components/Terms";
import Wrapper from "./components/Wrapper";

function App() {

  return (
    <>
      <h1>12.15 Monday</h1>
      <Subject />
      <MyButton text="확인" color="blue"/>
      <MyButton text="취소" color="gray"/>
      <Wrapper text="중요">
        <h3>공지사항</h3>
        <p>내일은 화요일입니다.</p>
      </Wrapper>
      <Wrapper>
        <h3>React</h3>
        <p>Javvascript</p>
      </Wrapper>
    </>
  );
}

export default App;
