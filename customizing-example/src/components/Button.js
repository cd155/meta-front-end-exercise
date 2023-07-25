function Button() {
  return (
    <button onClick={clickHandler}>
      click me
    </button>
  )
}

export default Button

function clickHandler(){
  console.log("Just clicked")
}