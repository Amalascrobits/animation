import React from 'react'

const Self = () => {

    React.useEffect(() => {
        const interval = setInterval(() => {
          console.log('This will run every second!');
        }, 5000);
        return () => clearInterval(interval);
      }, []);
const visible1=()=>{
    document.getElementById("1").style.visibility="visible";
}
setTimeout(visible1(),1000);
// const hide1=()=>{
//     document.getElementById("2").style.visibility="hidden";
// }
// setTimeout(hide1(),7000);

// const visible2=()=>{
//     document.getElementById("2").style.visibility="hidden";
// }
// setTimeout(visible2(),3000);
// const hide2=()=>{
//     document.getElementById("2").style.visibility="visible";
// }
// setTimeout(hide2(),7000);

  return (
<>
<div className="container" style={{display:"flex",marginTop:"7rem",marginLeft:"19rem"}}>
<div className='f' id='1' style={{height:"20rem",visibility:"hidden",width:"20rem",border:"2px solid red",backgroundColor:"red"}}>first</div>
<div className='f' id='2' style={{height:"20rem",width:"20rem",border:"2px solid green",backgroundColor:"green"}}>Second</div>
</div></>
  )
}

export default Self