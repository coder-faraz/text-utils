import React, { useState } from "react";
import PropTypes from 'prop-types';
import Alert from './Alert';


export default function Body(props) {

    const [alert, setAlert] = useState(null);   //initial value of alert is null

    let showAlert = (type) => {
        setAlert(type);         //showAlert(type) will create setAlert() & set the corresponding value

        setTimeout(() => {
            setAlert(null);     //automatically hide alert message after 1.5s after setting setAlert() to null
        }, 1500);
    }


    const [text, setText] = useState("");

    let changeHandler = (e) => {
        setText(e.target.value);
    }

    let upperCaseHandler = () => {
        setText(text.toUpperCase());
        showAlert("success");
    }

    let lowerCaseHandler = () => {
        setText(text.toLowerCase());
        showAlert("success");
    }

    let capitalCaseHandler = () => {
        let lowercase = text.toLowerCase();
        let words = lowercase.split(" ");
        let newWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));

        setText(newWords.join(" "));
        showAlert("success");
    }

    let toggleCaseHandler = () => {

        let textArr = [];

        for(let i=0; i<text.length; i++) {
            if(text[i] === text[i].toLowerCase())  textArr.push(text[i].toUpperCase())
            else if(text[i] === text[i].toUpperCase())  textArr.push(text[i].toLowerCase())
        }
        setText(textArr.join(""));   //converts the array back to string after joining each char
        showAlert("success");
    }

    let copyTextHandler = () => {
        let selection = document.getElementById("myBox");

        selection.select();     //select() is used to select the content of an input field
        navigator.clipboard.writeText(selection.value);     //clipboard api of navigator object to access system
                                                            //clipboard  & permission of writeText or readText
        showAlert("success");
    }

    let clearTextHandler = () => {
        setText("");        //clears all the text from the input field
        showAlert("success");
    }

    return (
      <>
      <Alert alerting={ alert }/>
        <div className="container my-2">
            <h2> {props.heading} </h2>
            <textarea id="myBox" rows="6" className={`form-control bg-${props.look} text-${props.look==='light'? 'dark':'light'}`} value={text} onChange={ changeHandler }></textarea>
            <button disabled={text.length===0} className= {`btn btn-${props.look==='light'?'primary':'dark'} my-2`} onClick={ upperCaseHandler }>Convert To Upper Case</button>
            <button disabled={text.length===0} className={`btn btn-${props.look==='light'?'primary':'dark'} my-2 mx-2`} onClick={ lowerCaseHandler }>Convert To Lower Case</button>

            <button disabled={text.length===0} className={`btn btn-${props.look==='light'?'primary':'dark'} my-2 mx-1`} onClick={ capitalCaseHandler }>Convert To Capitalize Case</button>
            <button disabled={text.length===0} className={`btn btn-${props.look==='light'?'primary':'dark'} my-2 mx-1`} onClick={ toggleCaseHandler }>Convert To Toggle Case</button>
            <button disabled={text.length===0} className={`btn btn-${props.look==='light'?'primary':'dark'} my-2 mx-1`} onClick={ copyTextHandler }>Copy To Clipboard</button>

            <button disabled={text.length===0} className={`btn btn-${props.look==='light'?'primary':'dark'} my-2 mx-1`} onClick={ clearTextHandler }>Clear Text</button>
        </div>

        <div className="container my-3">
            <h3> Text Summary</h3>
            <p>{text.split(" ").filter((elem) => elem.length !== 0).length} words &nbsp;and&nbsp; {text.length} characters</p>
        </div>
      </>
    )
}


Body.propTypes = {
    heading: PropTypes.string,
    look: PropTypes.string,
}


