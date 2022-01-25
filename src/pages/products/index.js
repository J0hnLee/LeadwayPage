import Link from "next/link";
import ProductItem from "../../productItem/productItem";
import {useEffect,useState,createRef} from 'react';
import { LuckyWheel } from '@lucky-canvas/react'
//TODO: reconstruce this page

const Products =()=>{
  const itemId=[1,2,3]
  const items=[
    {name:'起家雞',price:400 ,key:'kh'},
    {name:'小籠包',price:100 ,key:'kh'},
    {name:'肯德基',price:200, key:'KFC'},
    {name:'麥當勞',price:300,key:'MCD'},
    {name:'MoMo pardise',price:600,key:'MCD'},
  ]
  //const generateItem =itemId.map((id)=> {<li> <Link key={id} href={`products/${id}`}>{id.toString()}</Link></li>});
  const generateItem =items.map((item)=> {return (
    <ProductItem key={item.key} item={item}/>
  )});

  const myLucky = createRef()
  const state = {
    blocks: [{ padding: '13px', background: '#617df2' }],
    prizes: [
      { fonts: [{ text: '起家雞', top: '10%' }], background: '#e9e8fe' },
      { fonts: [{ text: '雞肉飯', top: '10%' }], background: '#b8c5f2' },
      { fonts: [{ text: '涼麵', top: '10%' }], background: '#e9e8fe' },
      { fonts: [{ text: '小籠包', top: '10%' }], background: '#b8c5f2' },
      { fonts: [{ text: 'MoMo', top: '10%' }], background: '#e9e8fe' },
      { fonts: [{ text: '麥當勞', top: '10%' }], background: '#b8c5f2' },
    ],
    buttons: [
      { radius: '50px', background: '#617df2' },
      { radius: '45px', background: '#afc8ff' },
      {
        radius: '40px', background: '#869cfa',
        pointer: true,
        fonts: [{ text: '開始\n抽獎', top: '-20px' }]
      },
    ],
  }







  useEffect(() => {
  fetch('/dummy_data.json')
    .then((res) => {return res.json()})
    .then(res => console.log(res))

  },[])

return (
<div>
<div>Hello wellcome to our product list</div>
{generateItem}

<LuckyWheel
      ref={myLucky}
      width="300px"
      height="300px"
      blocks={state.blocks}
      prizes={state.prizes}
      buttons={state.buttons}
      onStart={() => { // 点击抽奖按钮会触发star回调
        // 调用抽奖组件的play方法开始游戏
        myLucky.current.play()
        // 模拟调用接口异步抽奖
        setTimeout(() => {
          // 假设后端返回的中奖索引是 0
          const index = 3
          // 调用stop停止旋转并传递中奖索引
          myLucky.current.stop(index)
        }, 2500)
      }}
      onEnd={prize => { // 抽奖结束会触发end回调
        console.log(prize)
      }}
    ></LuckyWheel>
</div>
);
}

export default Products;