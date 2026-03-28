import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router';


const JobCard = ({job}) => {
    const {_id, title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities, status, hr_email, hr_name, company_logo} = job;    return (
        <div className="card bg-base-100  shadow-sm p-5">

 <div className='flex items-center gap-2'>
 <img className='w-16'
      src={company_logo}
      alt="logo" />
      <div>
        <h3>{company}</h3>
        <p  className='text-sm flex items-center gap-2'><FaMapMarkerAlt  />
{location}</p>
      </div>

 </div>
  {/* <figure>
    
  </figure> */}
  <div className="">
    <h3 className="card-title">
      {title}
      <div className="">{jobType}</div>
    </h3>
    <p>{description}</p>
    <div className="card-actions ">
      {
        requirements.map((skill,index)=><div key={index} className="badge badge-outline">{skill}</div>)
      }
    </div>
    <div className="card-actions justify-end">
      <Link to={`/jobs/${job._id}`}><button className="btn btn-primary">Apply Now</button></Link>
    </div>
  </div>
</div>
    );
};

export default JobCard;