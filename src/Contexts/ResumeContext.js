import React, { createContext, useState } from 'react'

export const ResumeContext = createContext()

const ResumeContextProvider = (props) => {

    const [ content, setContent ] = useState({
        title: {},
        main: {},
        bio: {},
        work: {},
        skill: {},
        college: {}
    })

    const addContent = () => {
        setContent({content})
    }

    return (
        <ResumeContext.Provider value={{content, addContent}}>
            {props.children}
        </ResumeContext.Provider>
    )
}

export default ResumeContextProvider