import React from 'react'

class TextArea extends React.Component {
    render(){
        const { textId, textName, textLength, required } = this.props;

        return(
            <textarea id={textId} name={textName} maxLength={textLength} required={required}></textarea>
        );
    }
}

export default TextArea