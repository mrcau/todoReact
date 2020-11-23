import React, { useState } from 'react'
import './App.css';
import Itemrow from './Itemrow.jsx';
import dataAll from'./data.js';

function App() {
  const [itemrow, setItemrow] = useState(dataAll);
   
  return (
    <div className="App">
      <header>TODO</header>
      <div className="items">
        {
          itemrow.map((e) => {
            
            return <Itemrow key={e.id} dataE={e} dataAll={dataAll} setItemrow={setItemrow}/>
          })
        }
        {/* 배열을 사용할때에는 반드시 키값을 부여해야 리액트가 작동을 잘함(단 키값으로 배열의 인덱스값은 안됨) */}
      </div>
      <footer><input type="text"/>
      <button className="btnadd">추가</button>
      </footer>
    </div>
  );
}

export default App;
