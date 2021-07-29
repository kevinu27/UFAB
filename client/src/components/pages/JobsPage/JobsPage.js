import JobsList from '../JobsPage/JobList'
import React from 'react'
import './Jobpage.css'


const JobsPage = ({ loggedUser }) => {
    return (
        <>
            <h1 className="Jobspage"> Tus Jobs  <hr></hr></h1>
            <JobsList loggedUser={loggedUser} />
        </>
    )
}

export default JobsPage
