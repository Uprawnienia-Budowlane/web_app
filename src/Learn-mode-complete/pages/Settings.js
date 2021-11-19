
import React from 'react'
import SelectField from '../components/SelectField'
import TextFieldComponent from '../components/TextFieldComponent'

import { Button } from '@material-ui/core'
import { FormControl } from '@material-ui/core'

const Settings = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
           <FormControl size="small" fullWidth onSubmit={handleSubmit}>
               <SelectField label="Specjalność"/>
               <SelectField label="Podkategoria"/>
               <SelectField label="Poziom trudności"/>
               <TextFieldComponent />
               <Button variant="outlined">Zacznij próbny test</Button>
           </FormControl>
        </div>
    )
}

export default Settings
