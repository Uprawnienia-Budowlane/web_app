import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

function FormInput({ name, label, required }) {
  const { control } = useFormContext();
  const isError = false;

  return (
      <>
      <div>
      <Controller
        render={({ field }) => <TextField className="--form--input" {...field} />}
        name={name}
        control={control}
        label={label}
        fullWidth
        required={required}
    />
    </div>
    </>
  );
}

export default FormInput;
