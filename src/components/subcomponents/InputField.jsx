import React from 'react';

class InputField extends React.Component {
  render()  {
    const { inputType, inputId, inputName, required, value, onChange } = this.props;

    if(value != null){
      return(
        <input type={inputType} id={inputId} name={inputName} value={value} onChange={onChange}></input>
      )
    }
    else{
      if(required){
          return(
              <input type={inputType} id={inputId} name={inputName} required></input>
          )
      }
      else{
          return(
              <input type={inputType} id={inputId} name={inputName}></input>
          );
      }
    }
  }
}

export default InputField;