import React, { useState } from 'react'
import './App.css';
import Itemrow from './Itemrow.jsx';
import dataAll from'./data.js';

function App() {
  const [itemrow, setItemrow] = useState(dataAll);
  const date = new Date();
  const today = date.toLocaleDateString();
  const todoNum = dataAll.length;
  const inputRef= React.createRef();//=document.querySelector('input') 셀렉터 설정
  function submit(e){
    e.preventDefault();//서브밋의 기본 새로고침 기능을 막는 함수
    const newItem=inputRef.current.value;
    newItem != ''&& dataAll.push({id:Date.now(),name:newItem,count:0});
    //date.now 는 1970년 이후 지난 시간을 밀리초단위로 반환
    setItemrow([...dataAll]);
    inputRef.current.value='';
    inputRef.current.focus();
    console.log(dataAll);
  }
  return (
    <div className="App">
      <header>오늘의 운동 {todoNum}개 {today}</header>
      <div className="items">
        {
          itemrow.map((e) => {
            return <Itemrow key={e.id} dataE={e} dataAll={dataAll} setItemrow={setItemrow}/>
          })
        }
        {/* 배열을 사용할때에는 반드시 키값을 부여해야 리액트가 작동을 잘함(단 키값으로 배열의 인덱스값은 안됨) */}
      </div>
      <footer>
        <form onSubmit={submit} >
          <input type="text" className="addInput" placeholder="todo" ref={inputRef}/>
          {/* ref={inputRef}=document.querySelector('input'); */}
          <button className="btnadd">추가</button>
        </form>
      </footer>
    </div>
  );
}

export default App;
