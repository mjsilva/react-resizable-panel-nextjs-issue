"use client";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export default function Home() {
  return (
      <>
        <div className="grid h-screen text-neutral-200 grid-cols-main">
          <div className="border-r border-neutral-700 bg-black"></div>
          <div className="border-r border-neutral-700 bg-neutral-800"></div>
          <PanelGroup direction="horizontal">
            <Panel className="bg-neutral-800" defaultSize={50}>
              Testing
            </Panel>
            <PanelResizeHandle className="bg-neutral-700 w-0.5" />
            <Panel className="bg-neutral-800" defaultSize={50}></Panel>
          </PanelGroup>
        </div>
      </>
  );
}
