const ProgressBar = ({
  target,
  current,
}: {
  target: number;
  current: number;
}) => {
  const progressValue = Math.floor((current / target) * 100);

  return (
    <div className="flex">
      <div className="bg-zinc-700 w-full relative rounded-sm">
        &nbsp;
        <div className="text-xs whitespace-nowrap absolute left-2 top-1/2 -translate-y-1/2 z-200">
          {current} / {target}
        </div>
        <div
          className={`bg-cyan-800 absolute top-0 left-0 bottom-0 rounded-l-sm`}
          style={{ right: `${100 - progressValue}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
