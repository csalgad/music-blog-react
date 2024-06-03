import {useState} from 'react'
import Form from "./Form"
import FormButton from "./FormButton"

function Main(){              
    const [userName, setUserName] = useState('');

    const handleNameSubmit = (name) => {
        setUserName(name);
    };

    const title = (name) => (
        <>
        <h1>Hello {name}!</h1>
        <br></br>
        <h2>Contact Us</h2>
        </>   
    );

    return (
        <>
            <main>
                 {title(userName)}                                  
                 <Form></Form>
                 <FormButton handleButtonClick={handleNameSubmit}></FormButton>
            </main>
        </>        
    )        
}

export default Main;