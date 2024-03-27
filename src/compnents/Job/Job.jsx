const Job = ({ job }) => {
  const { logo } = job;
  return (
    <div>
      <img src={logo} alt="" className="h-10 w-[165px]" />
    </div>
  );
};

export default Job;
