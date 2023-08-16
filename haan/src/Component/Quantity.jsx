import React from 'react'


const Quantity = ({count,setCount}) => {
    
  // const buttonStyle={
  //   border: none;
  //   backgroundColor: teal;
  //   color: white;
  //   /* border: 1px solid black; */
  //   margin-top: 12px;
  //   padding: 7px 80px;
  //   border-radius: 15px;
  //   cursor: pointer;
  // }

  const handleDec=()=>{
    if(count<=1){
        setCount(null);
    }
    else  
        setCount(count-1);
  }
  const handleInc=()=>{
    setCount(count+1)
  }

  return (
    <div style={{display:"flex",justifyContent:'center',alignItems:'center',gap:'15px'}}>
        <button style={{fontSize:'large',border: 'none',margin: '10px',borderRadius: '15px',textAlign:'center',background:'teal',color: 'white',padding: '10px 15px 10px 15px'}} onClick={handleDec}>-</button>
        <p style={{fontSize:'larger',marginTop:'10px'}}>{count}</p>
        <button style={{fontSize:'large',border: 'none',margin: '10px',borderRadius: '15px',textAlign:'center',background:'teal',color: 'white',padding: '10px 15px 10px 15px'}}  onClick={handleInc}>+</button>
    </div>
  )
}

export default Quantity