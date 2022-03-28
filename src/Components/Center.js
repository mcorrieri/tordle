import React from "react";

export default function Center({ children }) {
  return (
    <div style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {children}
    </div>
  );
}
