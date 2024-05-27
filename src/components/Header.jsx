import Title from "./Title";
import Navigation from "./Navigation";

function Header(){
    const anchorTop = <a id="top" name="start"></a>

    return (
        <>
            <header>
                {anchorTop}
                <Title></Title>
                <br/>                                
                <Navigation></Navigation>
            </header>                
        </>
    )
}

export default Header;