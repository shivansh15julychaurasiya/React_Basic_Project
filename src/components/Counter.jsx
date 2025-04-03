import {React,useState} from 'react'

export default function Counter() {
    
    const [count,setCount]=useState(0);

    const increment=()=>{
        setCount(count=>count+1);
    }
  return (
    <>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>Counter: {count}</h1>
    <button onClick={increment} style={{ padding: '10px 20px', fontSize: '16px' }}>
      Increment
    </button>
    </div>
    </>
  )
}
