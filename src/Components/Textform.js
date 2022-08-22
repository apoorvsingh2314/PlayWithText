import React,{useState} from 'react'

export default function Textform(props) {

  
  const handleUpClick = ()=>{
    let newText = text.toUpperCase()
    setText(newText)
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase()
    setText(newText)
  }

  const handleClClick = ()=>{
    let newText = ""
    setText(newText)
  }

  const handleCoClick = ()=>{
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value)
  }

  const handleExClick = ()=>{
   let newText = text.split(/[ ]+/);
   setText(newText.join(" "));
  }
  
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const [text ,setText] = useState("");


  return (
    <>
    <div className='container' style={{background:props.mode==='light'?'dark':'light',color:props.mode==='dark'?'white':'black',fontFamily:'Georgia, serif'}}>
      <h2>{props.heading}</h2>
       <div className="mb-3">
       <textarea className="form-control" id="mybox" rows="8" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#0b0b45':'white',color:props.mode==='dark'?'white':'black'}} value={text}></textarea>
       </div>
       <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>ToUpperCase</button>
       <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>ToLowerCase</button>
       <button className="btn btn-primary mx-1 my-1" onClick={handleClClick}>Clear Text</button>
       <button className="btn btn-primary mx-1 my-1" onClick={handleCoClick}>Copy Text</button>
       <button className="btn btn-primary mx-1 my-1" onClick={handleExClick}>Remove Extra Space</button>

</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
  <h2><b>Your Text Summary</b></h2>
  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
  <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
  <h3>Summary</h3>
  <p>{text.length>0?text:"Enter Your Text "}</p>
</div>
    </>
  )
}
