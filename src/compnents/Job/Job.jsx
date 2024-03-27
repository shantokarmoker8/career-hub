import { IoLocationOutline } from "react-icons/io5";
import { BiDollarCircle } from "react-icons/bi";
("../../assets/icon/location.svg");
const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
  } = job;
  return (
    <div className="border rounded-lg p-5 lg:p-10 flex flex-col gap-4">
      <div>
        <img src={logo} alt="" className="h-9" />
      </div>
      <h2 className=" lg:text-2xl font-bold">{job_title}</h2>
      <p className="lg:text-xl font-semibold">{company_name}</p>
      <div className="flex gap-4">
        <button className="btn border-blue-500 text-blue-500 font-bold">
          {remote_or_onsite}
        </button>
        <button className="btn border-blue-500 text-blue-500 font-bold">
          {job_type}
        </button>
      </div>
      <div>
        <div className="lg:flex gap-6">
          <h4 className="flex items-center gap-1 lg:text-xl font-semibold">
            <IoLocationOutline /> {location}
          </h4>
          <h4 className="flex items-center gap-1 lg:text-xl font-semibold">
            <BiDollarCircle /> Salary: {salary}
          </h4>
        </div>
        <div className="mt-4">
          <button className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] ...">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Job;
