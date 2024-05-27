import InputField from './subcomponents/InputField';
import InputLabel from './subcomponents/InputLabel';
import SelectField from './subcomponents/SelectField';
import TextArea from './subcomponents/TextArea';
import FormInputFields from './FormInputFields';

function Form (){
    const fields = [
        {
            id: 1,
            forInput: 'name',
            labelString: 'Name: ',
            inputType: 'text',
            inputName: 'fullname',
            required: true,
        },
        {
            id: 2,
            forInput: 'email',
            labelString: 'Email: ',
            inputType: 'email',
            inputName: 'emailaddress',
            required: true,
        },
        {
            id: 3,
            forInput: 'phone',
            labelString: 'Phone: ',
            inputType: 'tel',
            inputName: 'phonenumber',
            required: false,
        },
    ];

    const sField = {
        id: 10,
        forInput: 'location',
        labelString: 'Location: ',
        selectName: 'locationSelection',
        required: false,
    }

    const tField = {
        id: 20,
        forInput: 'message',
        labelString: 'Message: ',
        textLength: 500,        
        required: true,
    }

    return(
        <form>
            <FormInputFields inputFields={fields}></FormInputFields>            
            
            <InputLabel forInput={sField.forInput} labelString={sField.labelString}></InputLabel>
            <SelectField selectId={sField.forInput} selectName={sField.selectName}></SelectField>
            <br></br>

            <InputLabel forInput={tField.forInput} labelString={tField.labelString}></InputLabel>
            <TextArea textId={tField.forInput} textName={tField.forInput} textLength={tField.textLength} required={tField.required}></TextArea>
            <br></br>

            <button type="submit">Submit</button>
        </form>                                
    )
}

export default Form;