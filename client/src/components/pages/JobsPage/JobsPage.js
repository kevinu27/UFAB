import JobsList from '../JobsPage/JobList'
import React from 'react'
import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom'


const JobsPage = ({ loggedUser }) => {

    return (
        <>
            <h1> Tus Jobs</h1>
            {loggedUser &&
                <Link to={`/jobs/crear`}>
                    <Button variant="dark"> Crear Job</Button>
                </Link>
            }

            <JobsList loggedUser={loggedUser} />

        </>

    )
}

export default JobsPage
