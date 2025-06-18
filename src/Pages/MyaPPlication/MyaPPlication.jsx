import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { complex } from 'motion';

const MyaPPlication = () => {
    const {user} = useAuth();
    const [jobs ,setjobs] = useState([])

    useEffect(() =>{
        fetch(`http://localhost:3000/job-aPPlication?email=${user.email}`)
        .then(res => res.json())
        .then(data =>{setjobs(data)

        })
    },[user.email])
    return (
        <div>
            <h3 className="text3xl">{jobs.length} f</h3>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        jobs.map(job =>  <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={job.company_logo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{job.title}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>)
     }
      {/* row 2 */}
     
      {/* row 3 */}
      
      {/* row 4 */}
      
    </tbody>
    {/* foot */}
   
  </table>
</div>
        </div>
    );
};

export default MyaPPlication;