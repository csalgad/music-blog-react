function Header(){
    const anchorTop = <a id="top" name="start"></a>;
    const title = <div class="title">
                    <h1>Hause Special &reg;</h1>
                    <h2>Music Blog</h2>
                    </div>;
    const navigation = <nav>
                            <ul class="navbar">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="specialOfTheDay.html">Special Of The Day</a></li>
                                <li><a href="specialOfTheWeek.html">Special Of The Week</a></li>                
                                <li><a href="specialOfTheMonth.html">Special Of The Month</a></li>
                                <li><a href="aboutUs.html">About Us</a></li>
                                <li><a href="contact.html">Contact Us</a></li>             
                            </ul>                
                            <br/>
                        </nav>; 

    return (
        <>
            <header>
                {anchorTop}
                {title} 
                <br/>                
                {navigation}
            </header>                
        </>
    )
}

export default Header;