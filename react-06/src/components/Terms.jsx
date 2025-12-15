function Terms() {
    const [checked,setchecked] = useState(false);
  return (
    <div>
        <label>
            <input type='checkbox' checked={checked} onChange={(e)=>setchecked(e.target.checked)}/>
            동의합니다.
        </label>
        <p>상태:{checked ?"ON" : "OFF"}</p>
    </div>
  )
}

export default Terms;