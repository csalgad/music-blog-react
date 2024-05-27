import React, { useState } from 'react'
import InputField from './subcomponents/InputField';
import InputLabel from './subcomponents/InputLabel';

const FormInputFields = (props) => {    
    const { inputFields } = props;

    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <>
        {inputFields.map((field) => 
            (
                <>
                <InputLabel key={field.id + 'l'} forInput={field.forInput} labelString={field.labelString}/>                                
                {
                    (field.Id === 1)?
                    (<InputField key={field.id + 'f'} inputType={field.inputType} inputId={field.id} inputName={field.inputName} required={field.required} value={name} onChange={handleChange}/>):
                    (<InputField key={field.id + 'f'} inputType={field.inputType} inputId={field.id} inputName={field.inputName} required={field.required}/>)
                }                                    
                <br></br>
                </>
            )
        )}
        </>
    )
};

export default FormInputFields;