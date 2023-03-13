import React, {useState} from 'react'

const StateTest = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        // counter = counter + 1;
        setCounter(counter + 1);
        console.log(counter)
    }

  return (
    <div>
        {counter}
        <button onClick={increment}>Imcrement</button>
    </div>
  )
}

export default StateTest