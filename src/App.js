import "./App.scss";
import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Profile from "./components/profile";
import Calendar from "./components/cal";
import Files from "./components/files";
import Help from "./components/help";
import UIdesign from "./components/ui-design";
import UIgrades from "./components/ui-design/grades";
import UIassign from "./components/ui-design/assignments";
import UIAnounce from "./components/ui-design/anouncements";
import UIfiles from "./components/ui-design/files";
import UWB from "./components/underwater-basket-weaving";
import UWBgrades from "./components/underwater-basket-weaving/grades";
import UWBfiles from "./components/underwater-basket-weaving/files";
import UWBassign from "./components/underwater-basket-weaving/assignments";
import UWBanounce from "./components/underwater-basket-weaving/anouncements";
import PY from "./components/python-programming";
import PYanounce from "./components/python-programming/anouncements";
import PYassign from "./components/python-programming/assignments";
import PYfiles from "./components/python-programming/files";
import PYgrades from "./components/python-programming/grades";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cal" element={<Calendar />} />
          <Route path="/files" element={<Files />} />
          <Route path="/help" element={<Help />} />
          <Route path="/ui-design" element={<UIdesign />} />
          <Route path="/ui-design/assignments" element={<UIassign />} />
          <Route path="/ui-design/grades" element={<UIgrades />} />
          <Route path="/ui-design/anouncements" element={<UIAnounce />} />
          <Route path="/ui-design/files" element={<UIfiles />} />
          <Route path="/underwater-basket-weaving" element={<UWB />} />
          <Route
            path="/underwater-basket-weaving/grades"
            element={<UWBgrades />}
          />
          <Route
            path="/underwater-basket-weaving/anouncements"
            element={<UWBanounce />}
          />
          <Route
            path="/underwater-basket-weaving/files"
            element={<UWBfiles />}
          />
          <Route
            path="/underwater-basket-weaving/assignments"
            element={<UWBassign />}
          />
          <Route path="/python-programming" element={<PY />} />
          <Route path="/python-programming/grades" element={<PYgrades />} />
          <Route path="/python-programming/files" element={<PYfiles />} />
          <Route
            path="/python-programming/assignments"
            element={<PYassign />}
          />
          <Route
            path="/python-programming/anouncements"
            element={<PYanounce />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
