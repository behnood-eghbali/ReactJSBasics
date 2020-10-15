import React from 'react'
import Header from './Header/Header'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import DataCard from './DataCard/DataCard'
import MainContent from './MainContent/MainContent'
import Resume from './Resume/Resume'
import ResumeContextProvider from './Contexts/ResumeContext'


const App = () => {
  return (
    <div>
      <Header />
      <ProfileHeader />
      <ResumeContextProvider>
        <DataCard />
      </ResumeContextProvider>
    </div>
  )
}

export default App
