import React from "react";

export default function ResumeViewer() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#646cff" }}>📄 My Resume</h2>
      <iframe
  src="/Resume.pdf#toolbar=0"
  type="application/pdf"
  width="100%"
  height="800px"
  style={{
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#fff"
  }}
  title="Resume PDF"
/>

    </div>
  );
}
