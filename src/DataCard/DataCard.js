import React, { useContext } from 'react'
import { InputContext } from '../Contexts/InputContext'
import Main from './Main'
import Title from './Title'
import Bio from './Bio'
import Work from './Work'
import Skill from './Skill'
import College from './College'

export default function DataCard() {

    return (
        <div>
            <Title />
            <Main />
            <Bio />
            <Work />
            <Skill />
            <College />
        </div>
    )
}
