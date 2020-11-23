import React, { useState } from 'react'

function Itemrow(pr) {
   const dataAll = pr.dataAll;
   const dataE=pr.dataE;
   const setItemrow = pr.setItemrow;
   const {name,count} = pr.dataE;

   function plus(){
     const dataAllcopy = [...dataAll];
     const index = dataAllcopy.indexOf(dataE);
     dataAllcopy[index].count++;
     setItemrow(dataAllcopy);
   }

   function minus(){
    const dataAllcopy = [...dataAll];
    const index = dataAllcopy.indexOf(dataE);
    dataAllcopy[index].count>0&&dataAllcopy[index].count--;
    setItemrow(dataAllcopy);
  }
   //스테이트 어레이 변수는 부분적으로 수정 불가 -> 복제하여 전체 업데이트 해야함
  return (
    
      <div className="itemrow">
          <div className="item">
            <span className="name">{name}</span>
            <span className="counter">{count}</span>
            <div>
              <button className="plus" onClick={plus}>+</button>
              <button className="minus" onClick={minus}>-</button>
              <button className="btndel">삭제</button>
            </div>
          </div>
          <hr/>
      </div>
  )
}

export default Itemrow
