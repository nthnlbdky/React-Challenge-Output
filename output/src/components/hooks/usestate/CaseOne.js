import React, {useState} from "react"
const CaseOne = () => {
    const [count, setCount] = useState(0)

    const decrementCount = () =>{
        setCount(prevCount => prevCount - 1)
    }

    const incrementCount = () =>{
        setCount(nextCount => nextCount + 1)
    }
    

    return (
        <div>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}

export default CaseOne
