
function Wrapper({text="hello",children}) {
  return (
    <div style={{padding:'20px',backgroundColor: '#f0f0f0'}}>
        <h2>Wapper Component</h2>
        {children}
        {text}
    </div>
  )
}

export default Wrapper