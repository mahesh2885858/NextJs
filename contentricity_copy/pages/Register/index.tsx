import React, { useState, useReducer } from 'react'
import InputComponent from '../../components/InputForRegistration';
import { Box, Button, TextField, Checkbox, FormControlLabel, Typography, Link as Mlink, InputAdornment, IconButton } from "@mui/material"
import styled from '@emotion/styled'


import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Link from 'next/link'
import Image from 'next/image'
import RegisterReducer from '../../components/RegisterReducer';
import { type } from 'os';
// TEsting UseReducer
export const initialState = {
    inputs: {

        name: '',
        email: "",
        password: "",
        cPassword: "",
        isTermsAccepted: false,
        isPrivacyAccepted: false,
    },

    errors: {

        name: '',
        email: "",
        password: "",
        cPassword: "",
        isTermsAccepted: true,
        isPrivacyAccepted: true,
    }
}
const Register = () => {
    const [state, dispatch] = useReducer(RegisterReducer, initialState)
    const [showPassword, setShowPassword] = useState(false)
    const [showCPassword, setShowCPassword] = useState(false)
    const [errorText, setErrorText] = useState("")
    const [inputs, setInputs] = useState({
        name: '',
        email: "",
        password: "",
        cPassword: "",
        isTermsAccepted: false,
        isPrivacyAccepted: false,
    })
    const [validInputCheck, setValidInputCheck] = useState({
        isNameValid: true,
        isEmailValid: true,
        validEmailFormat: true,
        isPasswordValid: true,
        isCpasswordValid: true,
        termsAccepted: true,
        privacyAccepted: true,


    })
    const helperTextValue = "This field is required"
    const emailExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch({ type: "Submit" })
        // if (!inputs.name) return setValidInputCheck((prev) => ({ ...prev, isNameValid: false }))
        // if (!inputs.email) return setValidInputCheck((prev) => ({ ...prev, isEmailValid: false }))
        // if (!inputs.email.match(emailExp)) return setValidInputCheck((prev) => ({ ...prev, validEmailFormat: false }))
        // if (!inputs.password) return setValidInputCheck((prev) => ({ ...prev, isPasswordValid: false }))
        // if (!inputs.cPassword) return setValidInputCheck((prev) => ({ ...prev, isCpasswordValid: false }))
        // if (!(inputs.password === inputs.cPassword)) return setErrorText("Both passwords did not match")
        // if (!inputs.isTermsAccepted) return setValidInputCheck((prev) => ({ ...prev, termsAccepted: false }))
        // if (!inputs.isPrivacyAccepted) return setValidInputCheck((prev) => ({ ...prev, privacyAccepted: false }))
    }
    const handleInputs = (e: string | boolean, field: "name" | "email" | "password" | "cpassword" | "terms" | "privacy") => {
        if (typeof e === "string") {
            if (field === "name") {
                setInputs((prev) => {
                    return { ...prev, name: e }
                })
                setValidInputCheck((prev) => ({ ...prev, isNameValid: true }))
            } else if (field === "email") {
                setInputs((prev) => {
                    return { ...prev, email: e }
                })
                setValidInputCheck((prev) => ({ ...prev, isEmailValid: true, validEmailFormat: true }))

            } else if (field === "password") {
                setInputs((prev) => {
                    return { ...prev, password: e }
                })
                setValidInputCheck((prev) => ({ ...prev, isPasswordValid: true }))
                setErrorText("")

            } else if (field === "cpassword") {
                setInputs((prev) => {
                    return { ...prev, cPassword: e }

                })
                setValidInputCheck((prev) => ({ ...prev, isCpasswordValid: true }))
                setErrorText("")

            }
        } else if (typeof e === "boolean") {
            if (field === "terms") {
                setInputs((prev) => {
                    return { ...prev, isTermsAccepted: e }
                })
                setValidInputCheck((prev) => ({ ...prev, termsAccepted: true }))

            } else if (field === "privacy") {
                setInputs((prev) => {
                    return { ...prev, isPrivacyAccepted: e }
                })
                setValidInputCheck((prev) => ({ ...prev, privacyAccepted: true }))

            }
        }

    }

    return (
        <Box sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center"
        }}
        >
            <Box sx={{
                padding: "20px",
                borderRadius: "10px",
                // borderColor: "red",
                // borderStyle: "solid",
                width: {
                    sm: "300px",
                    md: "545px"
                },
                height: "601px",
                // padding: "10px",
                border: "1px solid rgba(76,78,100,0.12)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                boxShadow: "0px 6px 4px  #e3e4e4"
            }}>
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>

                    <Box sx={{ display: "flex", gap: "7px" }} >
                        <Image src={'/registerPageAssests/logo.png'} width={36} height={36} />
                        <Typography variant="h4" fontWeight={600} color="rgba(76, 78, 100, 0.87)" >
                            Contentricity
                        </Typography>
                    </Box>
                    <Typography variant="subtitle1" color="#4C4E64AD" >
                        Please fill-in to register your account
                    </Typography>
                </Box>

                <form action="#" style={{
                    display: "flex",
                    gap: "10px",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%"

                }}>

                    <Box width={"90%"} >

                        <TextField
                            fullWidth
                            name='name'
                            label="Name"
                            value={state.inputs.name}
                            onChange={(e) => dispatch({ type: "Input", payload: e })}
                            required variant="outlined"
                            type="text"
                            // value={inputs.name}

                            // onChange={(e) => handleInputs(e.target.value, "name")}
                            // error={!validInputCheck.isNameValid}
                            error={!!state.errors.name}
                            // helperText={validInputCheck.isNameValid ? undefined : helperTextValue}
                            helperText={!!state.errors.name ? helperTextValue : undefined}

                        />
                    </Box>
                    {/* <InputComponent
                     field='name'
                     label="Name"
                     type='text'
                     onChange={handleInputs} 
                     error={!validInputCheck.isNameValid} 
                     value={inputs.name} 
                     helperText={validInputCheck.isNameValid ? undefined : helperTextValue}
                      /> */}
                    <Box width={"90%"} >

                        <TextField
                            fullWidth
                            name="email"
                            label="Email"
                            required variant="outlined"
                            type="email"
                            // error={!validInputCheck.isEmailValid || !validInputCheck.validEmailFormat}
                            error={!!state.errors.email}
                            // value={inputs.email}
                            value={state.inputs.email}
                            // onChange={(e) => handleInputs(e.target.value, "email")}
                            onChange={(e) => dispatch({ type: "Input", payload: e })}
                            // helperText={validInputCheck.isEmailValid ? (validInputCheck.validEmailFormat ? undefined : "Please Enter proper Email") : helperTextValue}
                            helperText={state.errors.email}
                        />
                    </Box>
                    <Box width={"90%"} >

                        <TextField
                            fullWidth
                            name="password"
                            label="Password"
                            required
                            variant="outlined"
                            type={showPassword ? "text" : "password"}
                            value={state.inputs.password}
                            // onChange={(e) => handleInputs(e.target.value, "password")}
                            onChange={(e) => dispatch({ type: "Input", payload: e })}
                            // error={!validInputCheck.isPasswordValid}
                            error={!!state.errors.password}
                            // helperText={validInputCheck.isPasswordValid ? undefined
                            // : helperTextValue}
                            helperText={state.errors.password}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <IconButton
                                            onClick={() => {
                                                setShowPassword(!showPassword)
                                            }}
                                        >
                                            {
                                                showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />
                                            }
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Box>
                    <Box width={"90%"} >

                        <TextField
                            fullWidth
                            name="cPassword"
                            label="Confirm Password"
                            required variant="outlined"
                            type={showCPassword ? "text" : "password"}
                            value={state.inputs.cPassword}
                            // onChange={(e) => handleInputs(e.target.value, "cpassword")}
                            onChange={(e) => dispatch({ type: "Input", payload: e })}
                            // error={!validInputCheck.isCpasswordValid || !!errorText}
                            error={!!state.errors.cPassword}
                            // helperText={validInputCheck.isCpasswordValid ? (errorText ? errorText : undefined) : helperTextValue}
                            helperText={state.errors.cPassword}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <IconButton
                                            onClick={() => {
                                                setShowCPassword(!showCPassword)
                                            }}
                                        >
                                            {
                                                showCPassword ? <VisibilityIcon /> : <VisibilityOffIcon />
                                            }
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}



                        />
                    </Box>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignSelf: "flex-start",
                        marginLeft: "25px"
                    }}>
                        <FormControlLabel
                            control={<Checkbox
                                // value={inputs.isTermsAccepted}
                                value="IsTermsAccepted"
                                required
                                formNoValidate={true}
                                size="small"
                                name='isTermsAccepted'
                                // onChange={(e) => handleInputs(e.target.checked, "terms")} 
                                onChange={(e) => dispatch({ type: "Input", payload: e, field: "isTermsAccepted" })}
                            />}
                            label={<Typography fontSize={15}>

                                Agreee to
                                <span style={{ marginLeft: "5px" }}>
                                    <Link href="#">
                                        <Mlink underline='always'>


                                            Terms and Conditions
                                        </Mlink>

                                    </Link>
                                </span>
                            </Typography>
                            } />
                        {
                            state.errors.isTermsAccepted ? undefined : (
                                <Typography color="red" fontSize={14}  >please accept the terms</Typography>
                            )
                        }

                        <FormControlLabel
                            control={<Checkbox
                                value="IsPrivacyPolicyAccepted"
                                name="isPrivacyAccepted"
                                // onChange={(e) => handleInputs(e.target.checked, "privacy")}
                                onChange={(e) => dispatch({ type: "Input", payload: e, field: "isPrivacyAccepted" })}
                                required
                                size='small'
                            />}
                            label={<Typography fontSize={15}>
                                <span style={{ paddingRight: "5px" }}>

                                    Agree to
                                </span>
                                <Link href="#">
                                    <Mlink underline="always" >
                                        Privacy Policy

                                    </Mlink>
                                </Link>

                            </Typography>} />
                        {
                            state.errors.isPrivacyAccepted ? undefined : (
                                <Typography color="red" fontSize={14}  >please accept the privacy policy</Typography>
                            )
                        }

                    </Box>
                    <Box>
                        <Button variant='contained' type='submit' onClick={handleSubmit}  >Register</Button>
                    </Box>
                    <Box>

                        <Typography display="inline" marginRight='5px'>
                            Already have an account?
                        </Typography>
                        <Link href={"#"}>
                            <Mlink underline="always" >Sign in</Mlink>
                        </Link>
                    </Box>
                </form>
            </Box>
        </Box>
    )
}

export default Register