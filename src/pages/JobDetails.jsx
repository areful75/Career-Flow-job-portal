import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const job=useLoaderData();
    console.log(job);
    return (
        <div>
            {job.title}
            <Link to={`/jobApply/${job._id}`}><button className='btn'>Applyh Job</button></Link>
        </div>
    );
};

export default JobDetails;