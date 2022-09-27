import React from 'react'

export default function Friends(props) {
    const [text, setText] = React.useState("");
    const [desc, setDesc] = React.useState("we don't need many friends, we need only one friend which is to stand with us in our bad situation");
    const changeText = ()=>{
        if(text==="azad" || text==="Azad Kumar" || text==="azad kumar" || text==="Azad"){
            setText("Ponung Mize")
            setDesc("Ponung is is calm and chill girl and Sir I am trying to know more about her")
        }
        else{
            setText("Azad Kumar")
            setDesc("azad is a very good boy. He is helping in nature. he respects every deserving people and ignores bulsit people")
        }
    }
    const handleChange = (e)=>{
        setText(e.currentTarget.value);
    }
    return (
        <>
            <div className='container my-3'>
                <h3>Enter Your Name - {props.checkFreinds}</h3>
                <div className="form-group my-3">
                    <textarea onChange={handleChange} placeholder="Enter Your Name Please" className="form-control" value={text} id="textArea" rows="4"></textarea>
                </div>
                <button className='btn btn-primary' onClick={changeText}>Find Your Best Friend</button>
            </div>
            <div className='container'>
                <p>{desc}</p>
                <p>{text.split(" ").length} words and {text.length} characters</p>
            </div>
        </>
    )
}