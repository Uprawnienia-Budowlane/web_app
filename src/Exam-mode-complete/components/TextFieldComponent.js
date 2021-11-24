import { FormControl, TextField } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { handleAmountChange } from "../redux/actions";


const TextFieldComponent = () => {
    const dispatch = useDispatch();
    const handleChange = (e) => {
      dispatch(handleAmountChange(e.target.value));
    };
  

    return (

        
        <div>
            <FormControl fullWidth>
                <TextField 
                onChange={handleChange}
                variant="outlined"
                label="liczba pytań"
                type="number"
                size="small"
                />
            </FormControl>
        </div>
    )
}

export default TextFieldComponent
