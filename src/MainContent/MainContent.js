import React, { useContext } from 'react'
import DataCard from '../DataCard/DataCard'
import { InputContext } from '../Contexts/InputContext'
import './MainContent.css'

export default function MainContent() {

    const { inputs } = useContext(InputContext)

    return (
        <div>
            <ul>

            </ul>
        </div>
    )
}