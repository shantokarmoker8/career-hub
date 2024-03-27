import { useEffect, useState } from "react";
import Job from "../Job/Job";
const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl font-extrabold">Featured Jobs</h2>
        <p className="text-base font-semibold mt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div>
        {jobs.map((job) => (
          <Job key={jobs.id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
