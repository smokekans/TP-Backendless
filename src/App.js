import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CurrentTab from "./component/CurrentTab";
import SharedLayout from "./component/sharedLayout/SharedLayout";
import data from "./data/tabs.json";

function App() {
  const firstTab = data.sort((a, b) => a.order - b.order);
  const tabWithMinOrder = firstTab[0];

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Navigate to={tabWithMinOrder.id} />} />
          <Route path=":tabId" element={<CurrentTab />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
