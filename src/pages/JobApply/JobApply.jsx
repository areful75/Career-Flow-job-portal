import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id: jobId } = useParams();
    const { user } = useAuth()
    //console.log(jobId, user);

    const handleApplyFormSubmit=e=>{
        e.preventDefault();
        const form=e.target;
        const linkedin=form.linkedin.value;
        const github=form.github.value;
        const resume=form.resume.value;
        //console.log(linkedin,github,resume);
        const application={
            jobId,
            applicant:user.email,
            linkedin,
            github,
            resume

        }
        axios.post('http://localhost:3000/application',application)
        .then(res=>{
            //console.log(res.data)
            if(res.data.insertedId)
            {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your applicaion  has been submitted",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
        .catch(error=>{
            console.log(error)
        })

    }
    return (
        <div className='text-center'>
            <h3 className="text-4xl">Apply Job For </h3>
            <form onSubmit={handleApplyFormSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">


                    <label className="label">LinkedIn Link</label>
                    <input name='linkedin' type="url" className="input" placeholder="My awesome page" />

                    <label className="label">GitHub Link</label>
                    <input name='github' type="url" className="input " placeholder="my-awesome-page" />

                    <label className="label">Resume Link</label>
                    <input name='resume' type="url" className="input" placeholder="Name" />
                    <button className='btn'>Apply</button>
                </fieldset>
            </form>
        </div>
    );
};

export default JobApply;