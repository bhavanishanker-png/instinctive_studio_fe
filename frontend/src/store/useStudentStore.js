import { create } from 'zustand';

export const useStudentStore = create((set) => ({
  students: [],
  fetchStudents: async () => {
    try {
      const response = await fetch('https://instinctive-studio-blue.vercel.app/api/students');
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        set({ students: data });
      } else {
        console.error('Failed to fetch students:', response.status);
      }
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  },
  addStudent: async (newStudent) => {
    console.log(newStudent)
    try {
      const response = await fetch('https://instinctive-studio-blue.vercel.app/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newStudent
        }),
      });

      if (response.ok) {
        const createdStudent = await response.json();
        set((state) => ({ students: [...state.students, newStudent] }));
      } else {
        console.error('Failed to add student:', response.status);
      }
    } catch (error) {
      console.error('Error adding student:', error);
    }
  },
}));
