"use client"
import Sidebar from '../components/Sidebar';
import Header from '../components/Header'
import StudentTable from '../components/StudentTable';
import { useState } from 'react';

const StudentsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-1 bg-gray-50">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          <StudentTable searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default StudentsPage;
