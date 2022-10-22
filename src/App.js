import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IoIosSettings } from "react-icons/io";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { NavBar, Footer, SideBar, ThemeSettings } from "./components";
import {
  ECommerce,
  Orders,
  Pyramid,
  Customers,
  ColorMapping,
  ColorPicker,
  Kanban,
  Employees,
  Calendar,
  Area,
  Pie,
  Line,
  Financial,
  Bar,
  Editor,
  Stacked
} from "./pages";
import "./App.css";

function App() {
  const activeMenu = false;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content={"Settings"} position="TopCenter">
              <button
                type="button"
                className="p-1 hover:bg-light-gray hover:drop-shadow-md text-white transition-all active:scale-90"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <IoIosSettings size={30} />
              </button>
            </TooltipComponent>
          </div>
          <div>
            {activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg: #fff">
                <SideBar/>
              </div>
            ) : (
              <div className="dark:bg-secondary-dark-bg w-0">NO <SideBar/></div>
            )}
          </div>
          <div
            className={`dark:bg-main-bg bg-main-bg h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="sticky md:static bg-main-bg dark:bg-main-dark-bg">
              <NavBar/>
            </div>
          </div>
          <Routes>
            {/* Dashboard */}
            <Route exact path="/" element={<ECommerce/>} />
            <Route exact path="/ecommerce" element={<ECommerce/>} />

            {/* Pages */}
            <Route exact path="/orders" element={<Orders/>} />
            <Route exact path="/employees" element={<Employees/>} />
            <Route exact path="/customers" element={<Customers/>} />

            {/* Apps */}
            <Route exact path="/kanban" element={<Kanban/>} />
            <Route exact path="/editor" element={<Editor/>} />
            <Route exact path="/calendar" element={<Calendar/>} />
            <Route exact path="/color-picker" element={<ColorPicker/>} />

            {/* Charts */}
            <Route exact path="/line" element={<Line/>} />
            <Route exact path="/area" element={<Area/>} />
            <Route exact path="/bar" element={<Bar/>} />
            <Route exact path="/financial" element={<Financial/>} />
            <Route exact path="/color-mapping" element={"ColorMapping"} />
            <Route exact path="/pyramid" element={<Pyramid/>} />
            <Route exact path="/stacked" element={<Stacked/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
