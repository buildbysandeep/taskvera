"use server";

import { ModeToggle } from "../mode-toggle";

const Header = () => {
  return (
    <div className="p-1 md:p-2 border-b-2 flex justify-between">
      <div className="flex items-center gap-2">
        <img src="/logo_with_name.png" alt="logo" className="h-[30px] mx-2" />
        <h1 className="text-2xl font-bold sr-only">TaskVera</h1>
      </div>

      <ModeToggle />
    </div>
  );
};

export default Header;
