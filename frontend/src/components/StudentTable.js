"use client";

import { useEffect, useState } from "react";
import { useStudentStore } from "../store/useStudentStore";
import StatusIndicator from "./StatusIndicator";
import AddStudentModal from "./Modal";
import { format } from "date-fns";

const StudentTable = ({ searchTerm }) => {
  const students = useStudentStore((state) => state.students);
  const fetchStudents = useStudentStore((state) => state.fetchStudents);
  const addStudent = useStudentStore((state) => state.addStudent);

  const [isModalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedCohort, setSelectedCohort] = useState("All Cohorts");
  const [selectedCourse, setSelectedCourse] = useState("All Courses");
  const [filteredStudents, setFilteredStudents] = useState([]);

  // Fetch Students on Mount
  useEffect(() => {
    const loadStudents = async () => {
      setLoading(true);
      await fetchStudents();
      setLoading(false);
    };
    loadStudents();
  }, [fetchStudents]);

  // Filter Students Dynamically
  useEffect(() => {
    let filtered = students;

    if (selectedCohort !== "All Cohorts") {
      filtered = filtered.filter((student) => student.Cohort === selectedCohort);
    }
    if (selectedCourse !== "All Courses") {
      filtered = filtered.filter((student) =>
        student.Courses.slice(0, 2).some((course) =>
          course.includes(selectedCourse)
        )
      );
    }
    if (searchTerm) {
      filtered = filtered.filter((student) =>
        student.StudentName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredStudents(filtered);
  }, [selectedCohort, selectedCourse, students, searchTerm]);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleAddStudent = async (studentData) => {
    await addStudent(studentData);
    handleModalClose();
  };

  return (
    <div className="m-6 p-6 bg-white rounded-lg shadow-lg">
      {/* Header with Filters and Add Button */}
      <div className="flex justify-between items-center mb-4">
        <div className="space-x-2">
          <select
            className="p-2 border bg-[#E9EDF1] border-[#E9EDF1] rounded-md text-black-600"
            value={selectedCohort}
            onChange={(e) => setSelectedCohort(e.target.value)}
          >
            <option>All Cohorts</option>
            <option>AY 2023-24</option>
            <option>AY 2024-25</option>
          </select>
          <select
            className="p-2 border bg-[#E9EDF1] border-[#E9EDF1] rounded-md text-black-600"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option>All Courses</option>
            <option>CBSE 9</option>
            <option>CBSE 10</option>
            <option>CBSE 11</option>
          </select>
        </div>
        <button
          onClick={handleModalOpen}
          className="px-4 py-2 bg-[#E9EDF1] text-black rounded-md"
        >
          + Add new Student
        </button>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="spinner border-4 border-blue-500 border-t-transparent border-solid rounded-full w-16 h-16 animate-spin"></div>
        </div>
      ) : filteredStudents.length === 0 ? (
        // No Students Found
        <div className="flex justify-center items-center h-64 text-center text-gray-500 font-semibold">
          <p>No students found with the selected filters.</p>
        </div>
      ) : (
        // Student Table
        <table className="w-full text-left text-sm text-gray-700">
          <thead className="border-b text-black text-sm font-semibold">
            <tr>
              <th className="p-4">Student Name</th>
              <th className="p-4">Cohort</th>
              <th className="p-4">Courses</th>
              <th className="p-4">Date Joined</th>
              <th className="p-4">Last login</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">
                  <span className="font-medium text-gray-800">
                    {student.StudentName}
                  </span>
                </td>
                <td className="p-4 text-gray-600">{student.Cohort}</td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {student.Courses.slice(0, 2).map((course, i) => (
                      <span
                        key={i}
                        className="flex items-center bg-[#F6F8FA] text-gray-700 text-sm font-medium px-1 py-1 rounded-lg"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-4 text-gray-600">
                  {format(new Date(student.DateJoined), "yyyy-MM-dd")}
                </td>
                <td className="p-4 text-gray-600">{student.LastLogin}</td>
                <td className="p-4">
                  <StatusIndicator status={student.Status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal for Adding Students */}
      <AddStudentModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleAddStudent}
      />
    </div>
  );
};

export default StudentTable;
