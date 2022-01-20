import {useRouter} from 'next/router'

//TODO: reconstruce this page


const ProductItem =()=>{
  const router = useRouter();
  
  console.log(router.pathname);
  console.log(router.query);
  return (<div>this is {router.query.productId} item</div>
  );
  }
  
  export default ProductItem;