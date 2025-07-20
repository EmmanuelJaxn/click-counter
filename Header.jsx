
import {useState} from 'react';


function Header() {

  const [count, setcount] = useState(0);

  const incval = ()=>{
    setcount(count+1)
  }

   const decval = ()=>{
    setcount(count-1)
  }

  return(
    
    <header>
      <h1>Counter App</h1>
               
        <button onClick={incval}>Increase</button>
        <h2>{count}</h2>
        <button onClick={decval}>Decrease</button>
     
    </header>
    
  );
}

export default Header