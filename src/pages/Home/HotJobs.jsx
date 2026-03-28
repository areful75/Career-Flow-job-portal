import React, { use, useEffect, useState } from 'react';
import JobCard from '../shared/JobCard';

const HotJobs = () => {
    const [jobs,setJobs]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/jobs').then(res=>res.json()).then(data=>setJobs(data))

    },[])
    return (
        <div>
            <div className='text-center my-5'>
                <h2 className='text-4xl'>Hot Jobs of the day</h2>
                <p className='text-xl'>Search and connect with the right candidates faster.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
            {
                jobs.map(job=><JobCard key={job._id} job={job}></JobCard>)
            }
        </div>
        </div>
    );
};

export default HotJobs;