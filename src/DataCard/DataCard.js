import React, { useContext } from 'react'
import { InputContext } from '../Contexts/InputContext'
import Main from './Main'
import Title from './Title'

export default function DataCard() {

    return (
        <div>
            <Title />
            <Main />
        </div>
    )
}
