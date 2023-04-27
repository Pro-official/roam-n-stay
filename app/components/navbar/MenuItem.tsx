"use client";

import useToggleMenu from "@/app/hooks/useToggleMenu";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  const toggleMenu = useToggleMenu();
  const handleMenuItem = () => {
    toggleMenu.onClose();
    onClick();
  };

  return (
    <div
      onClick={handleMenuItem}
      className="
        px-4 
        py-3 
        hover:bg-neutral-700 
        hover:text-white
        transition
        font-semibold
      "
    >
      {label}
    </div>
  );
};

export default MenuItem;
