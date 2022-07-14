import React from 'react'
import { Box, TextField } from '@mui/material'
interface inputPropsType {
    field: string,
    label: string,
    type: string,
    value: string,
    onChange: (text: string | boolean, field: "name" | "email" | "password" | "cpassword" | "terms" | "privacy") => void,
    error: boolean,
    helperText: string | undefined
}
const InputComponent = (props: inputPropsType) => {
    return (
        <Box width={"90%"}>

            <TextField
                fullWidth
                name='name'
                label="Name"
                required variant="outlined"
                // type="text" value={inputs.name}
                type="text" value={props.value}
                onChange={(e) => props.onChange(e.target.value, "name")}
                error={props.error}
                helperText={props.helperText}
            // helperText={validInputCheck.isNameValid ? undefined : helperTextValue}

            />
        </Box>

    )
}

export default InputComponent