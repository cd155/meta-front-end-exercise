import{useState} from 'react'

function ModeToggle() {
  const[statusDes, setStatusDes] = useState("Light Mode is On")
  const[status, setStatus] = useState(true)

  function clickHandler() {
    if (status == true) {
      setStatusDes("Dark Mode is On")
    }
    else {
      setStatusDes("Light Mode is On")
    }
    setStatus(!status)
  }

  return (
    <div>
      <h1>{statusDes}</h1>
      <button onClick={clickHandler}>
        click me
      </button>
    </div>
  )
}

export default ModeToggle