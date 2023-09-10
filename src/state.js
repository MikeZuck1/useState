import React, { useState } from 'react'; 

function State() {
  const [count, setCount] = useState(0); 

  return (
    <div>
      <p>I've been clicked {count} times!</p>
      <button onClick={() => setCount(count +1)}>
        more
      </button> 
      <button onClick={() => setCount(count -1)}>
        less
      </button> 
    </div>
  )
}

export default State;  
