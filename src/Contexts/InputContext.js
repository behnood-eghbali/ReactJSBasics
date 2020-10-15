import React, { createContext, useState } from 'react'

export const InputContext = createContext()

const InputContextProvider = (props) => {

    const [ inputs, setInputs ] = useState([])

    const addInput = (title, main, bio, work, skill, college) => {
        setInputs([...inputs, title, main, bio, work, skill, college])
    }

    const handleChange = (e) => {
        setInputs(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(typeof(inputs))
    }

    return (
        <InputContext.Provider value={{inputs, addInput, handleChange, handleSubmit}}>
            {props.children}
        </InputContext.Provider>
    )
}

export default InputContextProvider
