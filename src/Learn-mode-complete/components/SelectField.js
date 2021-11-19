import { Controller, useForm, FormProvider } from 'react-hook-form'
import { InputLabel, TextField, MenuItem, Select } from '@material-ui/core'
import { FormControl } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'

const SelectField = (props) => {
    const { label, options } = props;
    const [value, setValue] = useState("")

    const handleChange = () => {}

    return (
        <div >
            <FormControl size="small" fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={handleChange}>
                <MenuItem>Option1</MenuItem>
                <MenuItem>Option2</MenuItem>
                <MenuItem>Option3</MenuItem>
            </Select>
            </FormControl>
        </div>
    )
}

export default SelectField
