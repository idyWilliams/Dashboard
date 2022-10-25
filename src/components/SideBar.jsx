import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiTorproject } from "react-icons/si";
import { IoClose } from "react-icons/io5";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";

const SideBar = () => {
  const {activeMenu, setActiveMenu} = useStateContext() ;

  const activeLink = `flex items-center gap-5  pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2`;

  const normalLink = `flex items-center gap-5  pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md dark:hover:text-black hover:bg-light-gray dark:text-gray-200 m-2`;
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between item-center mt-4">
            <Link
              to={"/"}
              onClick={() => setActiveMenu(false)}
              className="items-center  flex text-xl font-extrabold tracking-tight dark:text-white  ml-3 text-slate-800"
            >
              <SiTorproject size={30} />{" "}
              <span className="mt-1 text-2xl">Udua!</span>
            </Link>
            <TooltipComponent content={"Menu"} position="TopCenter">
              <button
              onClick={()=>setActiveMenu((prevState) => !prevState)}
                type="button"
                className=" text-2xl hover:rounded-full   hover:bg-slate-100 text-center mt-4 block mr-4 p-3 hover:drop-shadow-md hover:text-center transition duration-100 ease-out hover:rotate-180 hover:transform"
              >
                <IoClose />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 uppercase m-3 mt-4 ">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={() => {}}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
          <div></div>
        </>
      )}
    </div>
  );
};

export default SideBar;
