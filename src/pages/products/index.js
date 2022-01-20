import Link from "next/link";


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
  <dvi key={item.key}>
  <li key={item.key}> 
  <Link key={item.key} href={`products/${item.name}`}>{item.name}</Link>
  </li> <span key={item.key}>{`price is ${item.price} `}</span>
  </dvi>)});


return (
<div>
<div>Hello wellcome to our product list</div>
{generateItem}
</div>
);
}

export default Products;