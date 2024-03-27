import { useEffect, useState } from "react";
import Job from "../Job/Job";
const FeaturedJobs = () => {
  const [dataLength, setDataLength] = useState(4);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h2 className=" text-2xl lg:text-5xl font-extrabold">Featured Jobs</h2>
        <p className="text-sm lg:text-base font-semibold mt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="mt-10 lg:my-28">
        <div className="lg:grid grid-cols-2 gap-6 ">
          {jobs.slice(0, dataLength).map((job) => (
            <Job key={jobs.id} job={job}></Job>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <div className={dataLength === jobs.length && "hidden"}>
            <button
              onClick={() => setDataLength(jobs.length)}
              className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] ..."
            >
              See All Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
