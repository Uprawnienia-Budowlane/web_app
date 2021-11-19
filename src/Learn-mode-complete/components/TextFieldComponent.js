import { FormControl, TextField } from '@material-ui/core'
import React from 'react'

const TextFieldComponent = () => {

    const handleChange = () => {

    }

    return (
        <div>
            <FormControl>
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
