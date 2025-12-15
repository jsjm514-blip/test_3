import {useState} from "react";
function Subject() {
    const [type,setType]=useState('react')
    const [word,setWord]=useState('')
    const handleInput = (e) => {
        SkeletonInput(e.target.value);
    };
  return (
    <>
    <input
        type="text"
        value={word}
        onChange={handleInput}
      />
      <p>입력한 값 : {word}</p>
    <hr />
      <select value={type} onChange={(e)=>setType(e.target.value)}>
        <option value="react">React</option>
        <option value="Javascript">JavaScript</option>
        <option value="css">CSS</option>
      </select>
      <p>선택과목 : {type}</p>
    </>
  )
}

export default Subject