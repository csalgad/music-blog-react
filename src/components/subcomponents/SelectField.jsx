import React from 'react'

class SelectField extends React.Component {
    render(){
        const { selectId, selectName } = this.props;

        return(
            <select id={selectId} name={selectName}></select>
        );
    }
}

export default SelectField