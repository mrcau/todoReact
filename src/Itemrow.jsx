import React, { useState } from 'react'

function Itemrow(pr) {
  //pr 데이터 변수에 저장
   const dataAll = pr.dataAll;
   const dataE=pr.dataE;
   const setItemrow = pr.setItemrow;
   // pr 데이터 한번에 name,count 변수에 저장
   const {name,count} = pr.dataE;

   // 함수 정의
   function plus(){
     const index = dataAll.indexOf(dataE);
     dataAll[index].count++;
     setItemrow([...dataAll]);
   }

   function minus(){
    //const dataAllcopy = [...dataAll];
    const index = dataAll.indexOf(dataE);
    dataAll[index].count>0&&dataAll[index].count--;
    setItemrow([...dataAll]);
  }

  function del(){
    const delindex = dataAll.findIndex(x=>x.id==dataE.id);
    dataAll.splice(delindex,1);
    setItemrow([...dataAll]);
    //splice(제거할인덱스,제거할개수,교체할아이템)
    // const delItem = dataAllcopy.filter(x=>x.id!==dataE.id);
    
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
              <button className="btndel" onClick={del}>삭제</button>
            </div>
          </div>
          <hr/>
      </div>
  )
}
// onClick에 바로 함수를 해도 되지만 이렇게 되면 클릭할때 마다 함수를 새로 만들기 때문에 미리 정의해서 사용하는것이 좋음
export default Itemrow
