import React,{useEffect, useState} from 'react'

function Login() {
    const [userName,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const[error,setError]= useState(false);
    useEffect(()=>{
      document.title='vas'
    }
    )
    const formHandler=(event)=>
    {
      event.preventDefault();
      if(userName.length===0 || password.length===0)
      {
        setError(true)
      }
      {
        const loginObj={
          name:userName,
          pwd:password
        }
        if(userName=="vasanth" && password=="vasanth"){
            alert(JSON.stringify(loginObj))
        }
        //if(userName!=='vasanth'&& password!=='vasanth')
        //{
           // setError(false)
  
        //}

        
    }}
  return (
    <div style={{backgroundColor:'#f0f2f5',textAlign:'center',height:'800px'}}>
 <div>
    <h1 style={{color:'blue'}}> facebook</h1>
    <div style={{backgroundColor:'white',width:'300px',marginLeft:'600px',height:'350px',borderRadius:'10px'}}>
    <h2>Login to facebook</h2>
    <div style={{backgroundColor:'#fff9d7',display:'inline-block',paddingRight:'40px',paddingLeft:'40px',paddingTop:'15px'  ,fontFamily:'Helvetica,Arial,sansSerif',paddingBottom:'10px',border:'1px solid',borderColor:'#e2c822',marginBottom:'10px'}}><h7> you must login to continue</h7> </div>
    <form onSubmit={formHandler}>
        Username : <input type="text" value={userName} placeholder="User Name" onChange={(e)=>setUsername(e.target.value)}></input><br/>
        {error===false && userName!=='vasanth'  && userName.length>0 ?
        <label>wrong userName</label>:" "}
        {error && userName.length ===0?
        <label style={{color:'red'}}> name is required</label> :" "}<br></br>
        password : <input type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input><br/>
        {error===false&&password!='vasanth' && password.length>0?
        <label> wrong password</label>:" "}
        {error && password.length ===0?
        <label style={{color:'red'}}> password is required</label> :" "}<br></br>
        <div style={{paddingBottom:'10px'}}><button type="submit" style={{height:'30px',width:'150px',backgroundColor:'blue',color:'white',borderRadius:'5px',borderColor:'blue'}}>Login </button></div>

    </form>
    </div>
   
    </div>
    </div>
   
  )
}

export default Login