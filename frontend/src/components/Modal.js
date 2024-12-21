
import { useState } from "react";
import Select from "react-select";
import { useStudentStore } from "../store/useStudentStore";

const AddStudentModal = ({ isOpen, onClose }) => {
  const addStudent = useStudentStore((state) => state.addStudent);
  const [formData, setFormData] = useState({
    StudentName: "",
    Cohort: "AY 2024-25", 
    Status: "active",
  });

  const cohortOptions = [
    { label: "AY 2024-25", value: "AY 2024-25" },
    { label: "AY 2023-24", value: "AY 2023-24" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.StudentName.trim() || !formData.Cohort) {
      alert("Please fill out all fields correctly.");
      return;
    }

    const today = new Date();
    const DateJoined = today.toISOString();
    const LastLogin = today.toISOString();
    const Courses = ['CBSE 9 Math', 'CBSE 10 Math', 'CBSE 11 Math']

    addStudent({
      ...formData,
      DateJoined,
      LastLogin,
      Courses
    });

    setFormData({
      StudentName: "",
      Cohort: "AY 2024-25",
      Status: "active",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Add New Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.StudentName}
              onChange={(e) => setFormData({ ...formData, StudentName: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter the student's name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Cohort</label>
            <Select
              options={cohortOptions}
              value={cohortOptions.find((option) => option.value === formData.Cohort)}
              onChange={(selectedOption) => setFormData({ ...formData, Cohort: selectedOption.value })}
              className="w-full"
              placeholder="Select cohort"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Status</label>
            <select
              name="status"
              value={formData.Status}
              onChange={(e) => setFormData({ ...formData, Status: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentModal;
