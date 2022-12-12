import React,{useEffect, useState} from 'react'

function HooksEx() {
  const[count,vasanth]=useState(0)
 let  inc=()=>{
    vasanth(count+1)
  }
  let dic=()=>{
    vasanth(count-1)
  }
  let by5=()=>{
    vasanth(count+5)
  }
  useEffect(()=>{
    //asanth(count+1000000000000)
    document.title="vasanth";
    console.log({count})
  })
  return (
    <div>
     <h1 style={{color:"blue"}}> {count} </h1>
     <br></br>
      <button onClick={inc}style={{backgroundColor:"green"}}>VASANTHi</button><br></br>
      <br></br>
      <button onClick={dic}style={{backgroundColor:"red"}}>VASANTHi</button><br></br>
      <br></br>
      <button onClick={by5}style={{backgroundColor:"yellow"}}>VASANTHi</button>
    </div>
  )
}

export default HooksEx