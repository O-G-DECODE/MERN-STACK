import React, { useEffect, useState } from 'react';
import './index.css'
function App() {
  const [resume, setResume] = useState(null); // store data from backend

  useEffect(() => {
    fetch('http://localhost:2000/resume')
      .then((res) => res.json())
      .then((data) => setResume(data[0])) // since we expect one document
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  if (!resume) return <h2>Loading your resume...</h2>;

  return (
    <div className="a4">
  <div className="first-section">
    <div className="head">
      <h1>{resume.name}</h1>
    </div>
    <div className="address">
      <p><strong>Email:</strong> {resume.email}</p>
      <p><strong>Phone:</strong> {resume.phone}</p>
      <p><strong>Location:</strong> {resume.place}</p>
    </div>
  </div>

  <hr id="hr" />

  <div className="section">
    <h4 id="h4">Summary</h4>
    <p>{resume.summary}</p>
  </div>
  <hr id="hr" />

  <div className="section">
    <h4 id="h4">Education</h4>
    {resume.education && resume.education.map((edu, index) => (
      <div key={index}>
        <p><strong>{edu.college}</strong> ({edu.college_year})</p>
        <p>{edu.course} - {edu.university}</p>
        <p>Class: {edu.class} ({edu.mark})</p>
      </div>
    ))}
  </div>
  <hr id="hr" />

  <div className="section">
    <h4 id="h4">Skills</h4>
    <ul>
      {resume.skills && resume.skills.map((skill, i) => (
        <li key={i}>{skill}</li>
      ))}
    </ul>
  </div>
  <hr id="hr" />

  <div className="section">
    <h4 id="h4">Hobbies</h4>
    <ul>
      {resume.hobbies && resume.hobbies.map((hobby, i) => (
        <li key={i}>{hobby}</li>
      ))}
    </ul>
  </div>
</div>
  );
}

export default App;


