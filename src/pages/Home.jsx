import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Home = () => {
  const [students, setStudents] = useState([]);

  // Fetch students on load
  useEffect(() => {
    axios.get('http://localhost:9721/api/students/all')
      .then(response => {
        setStudents(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });
  }, []);

  // Function to add a new student (can be predefined)
  

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center text-primary">📋 Student List</h2>

      {/* Button to Add Student */}
      <button className="btn btn-primary mb-4" onClick="">
        Add Student
      </button>

      {/* Students Table */}
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>
                  <button className="btn btn-sm btn-success">View</button>
                  <button className="btn btn-sm btn-primary">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
