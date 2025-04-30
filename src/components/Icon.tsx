import React from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";
import { IconBaseProps } from "react-icons";

interface IconProps extends Omit<IconBaseProps, "children"> {
  name: string;
  library?: "fa" | "si" | "tb";
}

const Icon: React.FC<IconProps> = ({ name, library = "fa", ...props }) => {
  const getIcon = () => {
    switch (library) {
      case "fa":
        return (FaIcons as any)[name];
      case "si":
        return (SiIcons as any)[name];
      case "tb":
        return (TbIcons as any)[name];
      default:
        return null;
    }
  };

  const IconComponent = getIcon();

  if (!IconComponent) {
    console.warn(`Icon ${name} not found in library ${library}`);
    return null;
  }

  return <IconComponent {...props} />;
};

export default Icon;
