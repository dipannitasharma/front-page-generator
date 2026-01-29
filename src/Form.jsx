import React from "react";

const Form = ({ formData, setFormData }) => {
  return (
    <div className="max-w-3xl mx-auto mb-8 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="p-2 border rounded" placeholder="Title of the Presentation or Report"
          value={formData.title}
          onChange={(e)=>setFormData({...formData,title:e.target.value})}
        />
        <input className="p-2 border rounded" placeholder="Subject Name"
          value={formData.subject_name}
          onChange={(e)=>setFormData({...formData,subject_name:e.target.value})}
        />
        <input className="p-2 border rounded" placeholder="Subject Code"
          value={formData.subject_code}
          onChange={(e)=>setFormData({...formData,subject_code:e.target.value})}
        />
        <input className="p-2 border rounded" placeholder="Academic Session"
          value={formData.session}
          onChange={(e)=>setFormData({...formData,session:e.target.value})}
        />
        <input className="p-2 border rounded" placeholder="Student Name"
          value={formData.name}
          onChange={(e)=>setFormData({...formData,name:e.target.value})}
        />
        <input className="p-2 border rounded" placeholder="University Roll Number"
          value={formData.university_roll}
          onChange={(e)=>setFormData({...formData,university_roll:e.target.value})}
        />
        <input className="p-2 border rounded" placeholder="Year"
          value={formData.year}
          onChange={(e)=>setFormData({...formData,year:e.target.value})}
        />
        <input className="p-2 border rounded" placeholder="Semester"
          value={formData.semester}
          onChange={(e)=>setFormData({...formData,semester:e.target.value})}
        />
        <input className="p-2 border rounded" placeholder="Department"
          value={formData.department}
          onChange={(e)=>setFormData({...formData,department:e.target.value})}
        />
        <input className="p-2 border rounded" placeholder="Teacher Name"
          value={formData.teacher_name}
          onChange={(e)=>setFormData({...formData,teacher_name:e.target.value})}
        />
      </div>
    </div>
  );
};

export default Form;