import React from 'react'

class Navigation extends React.Component{

    render(){
        return(
            <nav>
                <ul className="navbar">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="specialOfTheDay.html">Special Of The Day</a></li>
                    <li><a href="specialOfTheWeek.html">Special Of The Week</a></li>                
                    <li><a href="specialOfTheMonth.html">Special Of The Month</a></li>
                    <li><a href="aboutUs.html">About Us</a></li>
                    <li><a href="contact.html">Contact Us</a></li>            
                </ul>                
                <br/>
            </nav>
        );
    }
}

export default Navigation;