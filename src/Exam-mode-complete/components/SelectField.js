import { Controller, useForm, FormProvider } from 'react-hook-form'
import { InputLabel, TextField, MenuItem, Select } from '@material-ui/core'
import { FormControl } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  handleCategoryChange,
  handleDifficultyChange,
  handleTypeChange,
} from "../redux/actions";

const SelectField = (props) => {
    const { label, options } = props;
    const dispatch = useDispatch()
    const [value, setValue] = useState("")

    const handleChange = (e) => {
        setValue(e.target.value)
        switch (label) {
            case "Category":
              dispatch(handleCategoryChange(e.target.value));
              break;
            case "Difficulty":
              dispatch(handleDifficultyChange(e.target.value));
              break;
            case "Type":
              dispatch(handleTypeChange(e.target.value));
              break;
            default:
              return;
          }
    }

    return (
        <div >
            <FormControl size="small" fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={handleChange}>
                {options.map(({id, name}) => (
                    <MenuItem value={id} key={id}>{name}</MenuItem>
                ))}
            </Select>
            </FormControl>
        </div>
    )
}

export default SelectField
