import React, { createContext, useState } from 'react'

export const ContentContext = createContext()

const ContentContextProvider = (props) => {

    const [ contents, setContents ] = useState()

    const addContent = () => {
        setContents([...contents])
    }

    return (
        <ContentContext.Provider value={{contents, addContent}}>
            {props.children}
        </ContentContext.Provider>
    )
}

export default ContentContextProvider