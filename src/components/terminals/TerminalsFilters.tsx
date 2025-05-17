import { useTerminals } from "./TerminalsContext";

const TerminalsFilters = () => {
  const { terminals, lockedOnly, toggleLockedOnly } = useTerminals();

  return (
    <>
      <div className="flex flex-col gap-1 md:flex-row">
        <div className="mr-auto">{terminals.length} total terminal(s)</div>
        <div className="flex gap-1">
          <div className="mr-auto md:mx-3">
            <label
              htmlFor="lockedOnlyToggle"
              className="cursor-pointer select-none"
            >
              <input
                type="checkbox"
                id="lockedOnlyToggle"
                className="mr-1"
                checked={lockedOnly}
                onChange={toggleLockedOnly}
              />
              Show unlocked
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default TerminalsFilters;
