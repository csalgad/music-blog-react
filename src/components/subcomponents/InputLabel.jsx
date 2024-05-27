import React from 'react';

class InputLabel extends React.Component {
  render() {
    const { forInput, labelString } = this.props;

    return(
        <label htmlFor={forInput}>{labelString}</label>
    ); 
  }
}

export default InputLabel;