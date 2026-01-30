import React from "react";

const Form = ({ formData, setFormData }) => {
  return (
    <div className="max-w-3xl mx-auto mb-8 p-6 bg-white rounded shadow">

      <h2 className="text-xl font-bold mb-6 text-center">
        CA Front Page Generator
      </h2>

      {/* Assessment */}
      <div className="mb-6">
        <p className="font-semibold mb-2">Select Assessment</p>

        <label className="mr-6">
          <input
            type="radio"
            value="CA1"
            checked={formData.assessment === "CA1"}
            onChange={(e) =>
              setFormData({ ...formData, assessment: e.target.value })
            }
            className="mr-2"
          />
          CA1 (Presentation)
        </label>

        <label>
          <input
            type="radio"
            value="CA2"
            checked={formData.assessment === "CA2"}
            onChange={(e) =>
              setFormData({ ...formData, assessment: e.target.value })
            }
            className="mr-2"
          />
          CA2 (Report)
        </label>
      </div>


      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Title */}
        <div>
          <label className="block text-sm font-semibold mb-1">Title</label>
          <input
            className="w-full p-2 border rounded"
            value={formData.title}
            onChange={(e)=>setFormData({...formData,title:e.target.value})}
          />
        </div>

        {/* Subject Name */}
        <div>
          <label className="block text-sm font-semibold mb-1">Subject Name</label>
          <input
            className="w-full p-2 border rounded"
            value={formData.subject_name}
            onChange={(e)=>setFormData({...formData,subject_name:e.target.value})}
          />
        </div>

        {/* Subject Code */}
        <div>
          <label className="block text-sm font-semibold mb-1">Subject Code</label>
          <input
            className="w-full p-2 border rounded"
            value={formData.subject_code}
            onChange={(e)=>setFormData({...formData,subject_code:e.target.value})}
          />
        </div>

        {/* Session */}
        <div>
          <label className="block text-sm font-semibold mb-1">Session</label>
          <input
            className="w-full p-2 border rounded"
            value={formData.session}
            onChange={(e)=>setFormData({...formData,session:e.target.value})}
          />
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-semibold mb-1">Student Name</label>
          <input
            className="w-full p-2 border rounded"
            value={formData.name}
            onChange={(e)=>setFormData({...formData,name:e.target.value})}
          />
        </div>

        {/* Roll */}
        <div>
          <label className="block text-sm font-semibold mb-1">University Roll</label>
          <input
            className="w-full p-2 border rounded"
            value={formData.university_roll}
            onChange={(e)=>setFormData({...formData,university_roll:e.target.value})}
          />
        </div>


        {/* Year Dropdown */}
        <div>
          <label className="block text-sm font-semibold mb-1">Year</label>

          <select
            className="w-full p-2 border rounded bg-white"
            value={formData.year}
            onChange={(e)=>setFormData({...formData,year:e.target.value})}
          >
            <option value="">Select Year</option>
            <option value="1st">1st </option>
            <option value="2nd">2nd </option>
            <option value="3rd">3rd </option>
            <option value="4th">4th </option>
          </select>
        </div>


        {/* Semester Dropdown */}
        <div>
          <label className="block text-sm font-semibold mb-1">Semester</label>

          <select
            className="w-full p-2 border rounded bg-white"
            value={formData.semester}
            onChange={(e)=>setFormData({...formData,semester:e.target.value})}
          >
            <option value="">Select Semester</option>
            <option value="1st">1st </option>
            <option value="2nd">2nd </option>
            <option value="3rd">3rd </option>
            <option value="4th">4th </option>
            <option value="5th">5th </option>
            <option value="6th">6th </option>
            <option value="7th">7th </option>
            <option value="8th">8th </option>
          </select>
        </div>


        {/* Department */}
        <div>
          <label className="block text-sm font-semibold mb-1">Department</label>
          <input
            className="w-full p-2 border rounded"
            value={formData.department}
            onChange={(e)=>setFormData({...formData,department:e.target.value})}
          />
        </div>


        {/* Teacher */}
        <div>
          <label className="block text-sm font-semibold mb-1">Teacher Name</label>
          <input
            className="w-full p-2 border rounded"
            value={formData.teacher_name}
            onChange={(e)=>setFormData({...formData,teacher_name:e.target.value})}
          />
        </div>

      </div>
    </div>
  );
};

export default Form;
