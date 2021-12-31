import React from "react";
import TopNavigation from "./TopNavigation";

export default function ContentContainer() {
  return (
    <div className="content-container">
      <TopNavigation />
      <div className="content-list">
        <span>This is the main content</span>
      </div>
    </div>
  );
}
