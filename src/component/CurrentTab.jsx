import React, { Suspense, lazy } from "react";
import dataTabs from "../data/tabs.json";
import { useParams } from "react-router-dom";

export default function CurrentTab() {
  const { tabId } = useParams();
  const selectedTab = dataTabs.find((tab) => tab.id === tabId);

  const Tab = lazy(() => import(`./${selectedTab.path}`));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Tab />
    </Suspense>
  );
}
