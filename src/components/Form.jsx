import React from "react";

/* COMMON SUBJECTS */
const SUBJECTS = [
  { name: "Mathematics –IA", code: "BS-M101" },
  { name: "Mathematics –IB", code: "BS-M102" },
  { name: "Physics-I (Gr-A)", code: "BS-Ph101" },
  { name: "Physics-I (Gr-B)", code: "BS-Ph201" },
  { name: "Basic Electrical Engineering", code: "ES-EE101" },
  { name: "Programming for Problem Solving", code: "ES-CS101" },
  { name: "Mathematics-IIA", code: "BS-M201" },
  { name: "Mathematics-IIB", code: "BS-M202" },
  { name: "Chemistry-I (Gr-A)", code: "BS-CH101" },
  { name: "Chemistry-I (Gr-B)", code: "BS-CH201" },
  { name: "Environment and Ecology", code: "MC-H101" },
  { name: "English", code: "HM-H201" },
  { name: "Basic Electronics Engineering", code: "ES-EC101" },
  { name: "Engineering Mechanics", code: "ES-ME201" },
  { name: "Analog and Digital Electronics", code: "ESC301" },
  { name: "Data Structure & Algorithms", code: "PCC-CS301" },
  { name: "Computer Organisation", code: "PCC-CS302" },
  { name: "Mathematics-III (Differential Calculus)", code: "BSC301" },
  { name: "Economics for Engineers", code: "HSMC301" },
  { name: "Discrete Mathematics", code: "PCC-CS401" },
  { name: "Computer Architecture", code: "PCC-CS402" },
  { name: "Formal Language and Automata Theory", code: "PCC-CS403" },
  { name: "Design and Analysis of Algorithms", code: "PCC-CS404" },
  { name: "Biology", code: "BSC401" },
  { name: "Environmental Sciences", code: "MC401" },
  { name: "Software Engineering", code: "ESC501" },
  { name: "Compiler Design", code: "PCC-CS501" },
  { name: "Operating Systems", code: "PCC-CS502" },
  { name: "Object Oriented Programming", code: "PCC-CS503" },
  { name: "Introduction to Industrial Management", code: "HSMC501" },
  { name: "Artificial Intelligence", code: "PEC-IT501B" },
  { name: "Constitution of India / Indian Knowledge Tradition", code: "MC-CS501A/B" },
  { name: "Database Management Systems", code: "PCC-CS601" },
  { name:"Distributed Database Management System ",code:"PEC-IT601B "},
  { name:"Image Processing ",code:"PEC-IT601 D"},
  { name: "Computer Networks", code: "PCC-CS602" },
  { name:"Data Warehousing and Data Mining",code:"PEC-IT602B "},
  { name: "Research Methodology", code: "PROJ-CS601" },
  { name: "Quantum Computing", code: "PEC-CS701A" },
  { name: "Cloud Computing", code: "PEC-CS701B" },
  { name: "Digital Signal Processing", code: "PEC-CS701C" },
  { name: "Multi-agent Intelligent Systems", code: "PEC-CS701D" },
  { name: "Machine Learning", code: "PEC-CS701E" },
  { name: "Neural Networks and Deep Learning", code: "PEC-CS702A" },
  { name: "Soft Computing", code: "PEC-CS702B" },
  { name: "Adhoc – Sensor Network", code: "PEC-CS702C" },
  { name: "Information Theory and Coding", code: "PEC-CS702D" },
  { name: "Cyber Security", code: "PEC-CS702E" },
  { name: "Operation Research", code: "OEC-CS701A" },
  { name: "Signals and Networks", code: "PEC-CS801A" },
  { name: "Cryptography and Network Security", code: "PEC-CS801B" },
  { name: "Speech and Natural Language Processing", code: "PEC-CS801C" },
  { name: "Web and Internet Technology", code: "PEC-CS801D" },
  { name: "Internet of Things", code: "PEC-CS801E" },
  { name: "Big Data Analytics", code: "OEC-CS801A" },
  { name: "Cyber Law and Ethics", code: "OEC-CS801B" },
  { name: "Mobile Computing", code: "OEC-CS801C" },
  { name: "Robotics", code: "OEC-IT801" },
  { name: "Soft Skill & Interpersonal Communication", code: "OEC-CS801E" },
  { name: "Electronic Devices", code: "EC301" },
  { name: "Digital System Design", code: "EC302" },
  { name: "Signals and System", code: "EC303" },
  { name: "Network Theory", code: "EC304" },
  { name: "Probability and Statistics", code: "BS-M301" },
  { name: "Environmental Science", code: "MC381" },
  { name: "Analog Communication", code: "EC401" },
  { name: "Analog Circuits", code: "EC402" },
  { name: "Microprocessor & Microcontroller", code: "EC403" },
  { name: "Numerical Methods", code: "BS-M401" },
  { name: "Biology for Engineers", code: "BS-B401" },
  { name: "Design and Analysis of Algorithm", code: "ES-CS401" },
  { name: "Electromagnetic Waves", code: "EC501" },
  { name: "Computer Architecture", code: "EC502" },
  { name: "Digital Communication and Stochastic Process", code: "EC503" },
  { name: "Digital Signal Processing", code: "EC504" },
  { name: "Nano Electronics", code: "PE-EC505A" },
  { name: "Power Electronics", code: "PE-EC505C" },
  { name: "Soft Skill and Interpersonal Communication", code: "OE-EC506A" },
]







const Form = ({ formData, setFormData }) => {
  const [showDropdown, setShowDropdown] = React.useState(false);

  return (
    <div className="max-w-3xl mx-auto mb-6">



      {/* ASSESSMENT */}
      <div className="mb-5">
        <p className="flex justify-center items-center font-semibold mb-2">Select Assessment</p>

        <label className="mr-4">
          <input
            type="radio"
            value="CA1"
            checked={formData.assessment === "CA1"}
            onChange={(e) =>
              setFormData({ ...formData, assessment: e.target.value })
            }
            className="mr-1"
          />
          CA1
        </label>

        <label>
          <input
            type="radio"
            value="CA2"
            checked={formData.assessment === "CA2"}
            onChange={(e) =>
              setFormData({ ...formData, assessment: e.target.value })
            }
            className="mr-1"
          />
          CA2
        </label>
      </div>


      {/* INPUTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


        {/* TITLE */}
        <div>
          <label className="text-sm font-medium">Title</label>
          <input
            className="w-full p-2 border rounded mt-1"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>


       {/* SUBJECT (MOBILE SAFE DROPDOWN) */}
{/* SUBJECT (MOBILE SAFE DROPDOWN) */}
<div className="relative">
  <label className="text-sm font-medium">Subject</label>

  <input
    type="text"
    className="w-full p-2 border rounded mt-1"
    placeholder="Type or select subject"
    value={formData.subject_name}
    onFocus={() => setShowDropdown(true)}
    onChange={(e) => {
      const value = e.target.value;

      // Check exact match
      const found = SUBJECTS.find(
        (s) => s.name.toLowerCase() === value.toLowerCase()
      );

      setFormData({
        ...formData,
        subject_name: value,
        subject_code: found ? found.code : "",
      });

      setShowDropdown(true);
    }}
    onBlur={() => {
      // Delay so click works on mobile
      setTimeout(() => setShowDropdown(false), 150);
    }}
  />

  {/* Dropdown */}
  {showDropdown && (
    <div className="absolute z-50 w-full bg-[#2f2f2f] border border-gray-600 rounded mt-1 max-h-40 overflow-y-auto shadow-lg">

      {SUBJECTS
        .filter((s) =>
          s.name.toLowerCase().includes(
            formData.subject_name.toLowerCase()
          )
        )
        .map((sub) => (
          <div
            key={sub.code}
            className="px-3 py-2 cursor-pointer hover:bg-gray-700 text-sm"
            onMouseDown={() => {
              // Use onMouseDown so blur doesn't cancel click
              setFormData({
                ...formData,
                subject_name: sub.name,
                subject_code: sub.code,
              });

              setShowDropdown(false);
            }}
          >
            {sub.name}
          </div>
        ))}

      {/* No result */}
      {SUBJECTS.filter((s) =>
        s.name.toLowerCase().includes(
          formData.subject_name.toLowerCase()
        )
      ).length === 0 && (
        <div className="px-3 py-2 text-xs text-gray-400">
          No subject found
        </div>
      )}
    </div>
  )}
</div>



        {/* SUBJECT CODE */}
        <div>
          <label className="text-sm font-medium">Subject Code</label>

          <input
            className="w-full p-2 border rounded mt-1"
            placeholder="Auto-filled or manual"
            value={formData.subject_code}
            onChange={(e) =>
              setFormData({
                ...formData,
                subject_code: e.target.value,
              })
            }
          />
        </div>


        {/* SESSION */}
        <div>
          <label className="text-sm font-medium">Session</label>

          <input
            className="w-full p-2 border rounded mt-1"
            value={formData.session}
            onChange={(e) =>
              setFormData({ ...formData, session: e.target.value })
            }
          />
        </div>


        {/* NAME */}
        <div>
          <label className="text-sm font-medium">Student Name</label>

          <input
            className="w-full p-2 border rounded mt-1"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </div>


        {/* ROLL */}
        <div>
          <label className="text-sm font-medium">Roll No</label>

          <input
            className="w-full p-2 border rounded mt-1"
            value={formData.university_roll}
            onChange={(e) =>
              setFormData({
                ...formData,
                university_roll: e.target.value,
              })
            }
          />
        </div>

<div className="flex gap-3">
        {/* YEAR */}
        <div>
          <label className="text-sm font-medium">Year</label>

          <select
            className="w-full p-2 border rounded mt-1 bg-[#444444]"
            value={formData.year}
            onChange={(e) =>
              setFormData({ ...formData, year: e.target.value })
            }
          >
            <option value="">Select Year</option>
            <option>1st</option>
            <option>2nd</option>
            <option>3rd</option>
            <option>4th</option>
          </select>
        </div>


        {/* SEMESTER */}
        <div>
          <label className="text-sm font-medium">Semester</label>

          <select
            className="w-full p-2 border rounded mt-1 bg-[#444444]"
            value={formData.semester}
            onChange={(e) =>
              setFormData({ ...formData, semester: e.target.value })
            }
          >
            <option value="">Select Semester</option>
            <option>1st</option>
            <option>2nd</option>
            <option>3rd</option>
            <option>4th</option>
            <option>5th</option>
            <option>6th</option>
            <option>7th</option>
            <option>8th</option>
          </select>
        </div>

</div>
        {/* DEPARTMENT */}
        <div>
          <label className="text-sm font-medium">Department</label>

          <input
            className="w-full p-2 border rounded mt-1"
            value={formData.department}
            onChange={(e) =>
              setFormData({
                ...formData,
                department: e.target.value,
              })
            }
          />
        </div>


        {/* TEACHER */}
        <div>
          <label className="text-sm font-medium">Teacher</label>

          <input
            className="w-full p-2 border rounded mt-1"
            value={formData.teacher_name}
            onChange={(e) =>
              setFormData({
                ...formData,
                teacher_name: e.target.value,
              })
            }
          />
        </div>

      </div>

    </div>
  );
};

export default Form;
