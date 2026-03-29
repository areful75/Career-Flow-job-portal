import React, { use } from 'react';
import ApplicationRow from './ApplicationRow';

const MyApplicationList = ({applicationPromise}) => {
    const applications=use(applicationPromise);
    console.log(applications);
    return (
        <div>
            {applications.length}
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        applications.map((application,index)=><ApplicationRow index={index} key={application._id} application={application}></ApplicationRow>)
      }
      
      
     
      
    </tbody>
    {/* foot */}
    {/* <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot> */}
  </table>
</div>
        </div>
        
    );
};

export default MyApplicationList;