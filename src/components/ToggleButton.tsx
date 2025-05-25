import { ReactNode } from "react";
import Icon from "@/components/Icon";
import { IconName } from "@/components/Icon";

interface ButtonWithActionsProps {
  name: string;
  enabled: boolean;
  children: ReactNode;
  onToggle: () => unknown;
  actions?: { icon: IconName; onClick: () => unknown }[];
}

const labelClass = (enabled: boolean) => `
  cursor-pointer
  border-1
  md:border-r-1
  rounded-sm
  rounded-r-none
  md:rounded-r-sm
  p-2
  m-1
  mr-0
  select-none
  text-center
  flex-grow-1
  group-hover:rounded-r-none
  ${enabled ? "bg-blue-950" : ""}
`;

const actionClass = `
flex
items-center
cursor-pointer
border-1
rounded-r-sm
p-2
m-1
ml-0
select-none
text-center
border-l-0
group-hover:bg-indigo-900
`;

const ToggleButton = ({
  name,
  actions,
  enabled,
  children,
  onToggle,
}: ButtonWithActionsProps) => {
  return (
    <div className="flex items-stretch relative overflow-hidden group">
      <label htmlFor={name} className={labelClass(enabled)}>
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
        <div className="flex relative w-auto md:w-0 group-hover:w-auto">
          {actions.map(({ icon, onClick }) => (
            <div key={icon} className={actionClass} onClick={onClick}>
              <Icon name={icon} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToggleButton;
