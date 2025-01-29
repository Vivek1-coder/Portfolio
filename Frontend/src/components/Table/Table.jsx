import React from "react";
import "./Table.css";

const HoverableTable = () => {
  const data = [
    { id: 1, heading: "Name", details : "Vivek" },
    { id: 2, heading: "Profile", details : "FullStack Developer" },
    { id: 3, heading: "Experience", details : "Fresher" },
    { id: 4, heading: "Education", details : "B.Tech in Computer Science" },
    { id: 5, heading: "College", details : "Netaji Subhas University of Technology" },
    { id: 6, heading: "Languages", details : "JavaScript, TypeScript, C++, Python" },
    
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "800px" }}>
      <table className="hoverable-table shadow-md shadow-slate-500 rounded-xl overflow-hidden background">
        <thead>
            <tr>
               
                <th colSpan="3"
                    style={{textAlign : "center"}}    
                >Profile Details</th>
                
            </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.heading}</td>
              <td>{row.details}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HoverableTable;
