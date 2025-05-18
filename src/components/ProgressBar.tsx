const ProgressBar = ({
  target,
  current,
}: {
  target: number;
  current: number;
}) => {
  const progressValue = Math.floor((current / target) * 100);

  return (
    <div className="w-full">
      <div className="bg-zinc-700 w-full relative rounded-sm">
        &nbsp;
        <div
          className={`bg-cyan-800 absolute top-0 left-0 bottom-0 rounded-l-sm`}
          style={{ right: `${100 - progressValue}%` }}
        ></div>
      </div>
      <div className="text-xs w-full text-right">
        {current} / {target}
      </div>
    </div>
  );
};

export default ProgressBar;
