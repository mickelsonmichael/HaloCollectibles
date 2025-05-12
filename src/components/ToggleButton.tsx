import { ReactNode } from "react";
import Icon from "@/components/Icon";

interface ButtonWithActionsProps {
  name: string;
  enabled: boolean;
  children: ReactNode;
  onToggle: () => unknown;
  actions?: { icon: string; onClick: () => unknown }[];
}

const ToggleButton = ({
  name,
  actions,
  enabled,
  children,
  onToggle,
}: ButtonWithActionsProps) => {
  return (
    <div className="flex items-stretch relative overflow-hidden group">
      <label
        htmlFor={name}
        className={
          "cursor-pointer border-1 rounded-sm p-2 m-1 mr-0 select-none text-center flex-grow-1 group-hover:border-r-0 group-hover:rounded-r-none" +
          (enabled ? " bg-blue-500/10" : "")
        }
      >
        <input
          id={name}
          type="checkbox"
          checked={enabled}
          onChange={onToggle}
          className="hidden cursor-pointer"
        />
        {children}
      </label>
      {actions && (
        <div className="flex relative w-0 group-hover:w-auto">
          {actions.map(({ icon, onClick }) => (
            <div
              key={icon}
              className="flex items-center cursor-pointer border-1 rounded-r-sm p-2 m-1 ml-0 select-none text-center border-l-0 group-hover:bg-indigo-400/30"
              onClick={onClick}
            >
              <Icon name={icon} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToggleButton;
