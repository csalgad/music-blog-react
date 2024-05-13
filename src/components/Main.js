function Main(){
    const title = <h2>Contact Us</h2>;
    /*const form = <form>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="fullname" required></input>                
                    <br></br>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="emailaddress" required></input>
                    <br></br>
                    <label for="phone">Phone:</label>
                    <input type="tel" id="phone" name="phonenumber"></input>
                    <br></br>
                    <label for="location">Location:</label>
                    <select id="location" name="locationSelection"></select>
                    <br></br>                      
                    <label for="message">Message</label>
                    <textarea id="message" name="message" maxlength="500" required></textarea>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>;*/
                
    const inputLabel = (forInput, labelString) => {
        return(
            <label htmlFor={forInput}>{labelString}</label>
        );
    };

    const inputField = (inputType, inputId, inputName, required) => {
        if(required){
            return(
                <input type={inputType} id={inputId} name={inputName} required></input>
            );
        }
        else{
            return(
                <input type={inputType} id={inputId} name={inputName}></input>
            );
        }
    }

    const form2 = <form>
                    {inputLabel('name','Name: ')}
                    {inputField('text','name','fullname', true)}
                    <br></br>
                    {inputLabel('email','Email: ')}
                    {inputField('email','email','emailaddress', true)}
                    <br></br>
                    {inputLabel('phone','Phone: ')}
                    {inputField('text','name','fullname', false)}
                    <br></br>
                    {inputLabel('location','Location: ')}
                    <select id="location" name="locationSelection"></select>
                    <br></br>
                    {inputLabel('message','Message: ')}
                    <textarea id="message" name="message" maxlength="500" required></textarea>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>;

    return (
        <>
            <main>
                 {title}
                 {form2}
            </main>
        </>        
    )        
}

export default Main;