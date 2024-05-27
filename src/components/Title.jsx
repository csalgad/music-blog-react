import React from 'react'

class Title extends React.Component{
    constructor(props){
        super(props);
        this.state = {name: 'Chris'};
    }

    render(){
        return(
            <div className="title">
                <h1>Hause Special &reg;</h1>
                <h2>Music Blog</h2>
                <br/>
                <h3>Hello {this.state.name} </h3>
            </div>
        );
    }
}

export default Title;