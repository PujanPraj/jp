const Jobs = (props: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4">
      {props.jobs.map((val: any) => {
        return (
          <div className="flex items-center gap-x-5 bg-slate-300 pe-3 mb-5">
            <img className="w-32 h-20" src={val.image} alt={val.title} />
            <h3>{val.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Jobs;
