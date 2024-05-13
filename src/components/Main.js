function Main(){
    return (
        <>
            <main>
                 <h2>Contact Us</h2>
                 <form>
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
                 </form>
            </main>
        </>        
    )        
}

export default Main;