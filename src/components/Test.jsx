import logo from '../logo.svg';

const image = <img src={logo} className="App-logo" alt="logo" />;

const paragraph = <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>;

const anchor = <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>;

function Test(){
    return(
        <>  
            {image}
            {paragraph}
            {anchor}
        </>
    )
}

export default Test;