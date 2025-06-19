import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router";

const MyPostedjobs = () => {
  const [jobs, setjobs] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:3000/jobs?hr-email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setjobs(data);
      });
  }, [user.email]);
  return (
    <div>
      <h2>Posted job my ::{jobs.length} </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>JOb title</th>
              <th>Job</th>
              <th>APPlication count</th>
              <th>APPliction </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobs.map((job, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>Quality Control Specialist </td>
                <td>{job.aPPlicationcount}</td>
                 <td>
         <Link to={`/viewaPPlication/${job._id}`}> <button className="btn"> view aPPPlication</button></Link>
        </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedjobs;
