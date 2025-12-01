import React, { useState } from 'react'
import Switch from '@mui/material/Switch';

export default function form() {
    const [aadhaarFront, setAadhaarFront] = useState(null);
    const [aadhaarBack, setAadhaarBack] = useState(null);
    const [localAddress, setLocalAddress] = useState("");
    const [permanentAddress, setPermanentAddress] = useState("");
    const [sameAddress, setSameAddress] = useState(false);
    const [course, setCourse] = useState("");
    const [refrence, setRefrence] = useState("");
    const [areYou, setAreYou] = useState("student");
    const [checked, setChecked] = React.useState(true);
    const [checkedReg, setCheckedReg] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [otherCourseName, setOtherCourseName] = useState("");
    const [friendName, setFriendName] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();

        // REQUIRED VALIDATION
        if (
            !name ||
            !email ||
            !number ||
            !dob ||
            !gender ||
            !localAddress ||
            !permanentAddress ||
            !course ||
            (course === "Other Course" && !otherCourseName) ||
            !refrence ||
            (refrence === "Friend" && !friendName)
        ) {
            alert("Please fill all fields!");
            return;
        }

        if (!checkedReg) {
            alert("Please accept Terms & Conditions!");
            return;
        }

        // SUCCESS
        alert("Form Submitted Successfully!");

        // RESET ALL FIELDS
        setName("");
        setEmail("");
        setNumber("");
        setDob("");
        setGender("");
        setLocalAddress("");
        setPermanentAddress("");
        setSameAddress(false);
        setAreYou("student");
        setCourse("");
        setOtherCourseName("");
        setRefrence("");
        setFriendName("");
        setCheckedReg(false);
        setAadhaarFront(null);
        setAadhaarBack(null);
    };



    const handleFrontChange = (e) => {
        const file = e.target.files[0];
        if (file) setAadhaarFront(URL.createObjectURL(file));
    };

    const handleBackChange = (e) => {
        const file = e.target.files[0];
        if (file) setAadhaarBack(URL.createObjectURL(file));
    };


    const handleSwitchClick = () => {
        // If turning ON → show popup
        if (!checkedReg) {
            setShowPopup(true);
        } else {
            // Turning OFF
            setCheckedReg(false);
        }
    };

    const handleAgree = () => {
        setCheckedReg(true);      // switch ON
        setShowPopup(false);      // close popup
    };

    const handleClose = () => {
        setShowPopup(false);      // close popup
        setCheckedReg(false);     // switch OFF
    };



    return (
        <>
            <form onSubmit={handleSubmit}>

                <div className="personal bg-white shadow-md border border-gray-200 p-6 rounded-lg space-y-4">

                    <h2 className="text-lg font-semibold border-b pb-2">Personal Details</h2>

                    {/* Name */}
                    <div>
                        <label className="block font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            required
                             onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your full name"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 
                       focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            required
                              onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 
                       focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                        />
                    </div>

                    {/* Number */}
                    <div>
                        <label className="block font-medium text-gray-700">Number</label>
                        <input
                            type="number"
                            required
                            onChange={(e) => setNumber(e.target.value)}
                            placeholder="Enter your number"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 
                       focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                        />
                    </div>

                    {/* DOB */}
                    <div>
                        <label className="block font-medium text-gray-700">Date of Birth</label>
                        <input
                            type="date"
                            onChange={(e) => setDob(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 
                       focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                        />
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="block font-medium text-gray-700">Gender</label>

                        <div className="flex flex-wrap gap-6 mt-1">
                            <label className="flex items-center gap-2">
                                <input type="radio" name="gender" value="male" onChange={(e)=>setGender(e.target.value)}  /> Male
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" name="gender" value="female" onChange={(e)=>setGender(e.target.value)}  /> Female
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" name="gender" value="other" onChange={(e)=>setGender(e.target.value)} /> Other
                            </label>
                        </div>
                    </div>

                    {/* Aadhaar Card */}
                    <div>
                        <label className="block font-medium text-gray-700">Aadhaar Card</label>

                        {/* FRONT SIDE */}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFrontChange}
                            className="mt-1"
                        />

                        {aadhaarFront && (
                            <img
                                src={aadhaarFront}
                                alt="Aadhaar Front"
                                className="mt-2 rounded border w-[100px] h-[50px] object-cover"
                            />
                        )}

                        {/* BACK SIDE */}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleBackChange}
                            className="mt-4"
                        />

                        {aadhaarBack && (
                            <img
                                src={aadhaarBack}
                                alt="Aadhaar Back"
                                className="mt-2 rounded border w-[100px] h-[50px] object-cover"
                            />
                        )}
                    </div>

                </div>


                <div className="parents bg-white shadow-md border border-gray-200 p-6 rounded-lg space-y-4">

                    <h2 className="text-lg font-semibold border-b pb-2">Parent / Guardian Details</h2>

                    <div>
                        <label className="block font-medium text-gray-700">
                            Parent / Guardian Name
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="Enter your parent / guardian name"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1
                       focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-gray-700">
                            Parent / Guardian Phone
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="Enter your parent / guardian phone"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1
                       focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                        />
                    </div>

                </div>


                <div className="residential bg-white shadow-md border border-gray-200 p-6 rounded-lg space-y-4">

                    <h2 className="text-lg font-semibold border-b pb-2">Residential Details</h2>

                    {/* Local Address */}
                    <div>
                        <label className="block font-medium text-gray-700">Local Address</label>
                        <input
                            type="text"
                            value={localAddress}
                            onChange={(e) => {
                                setLocalAddress(e.target.value);
                                if (sameAddress) setPermanentAddress(e.target.value);
                            }}
                            placeholder="Enter your local address (where you stay in Jaipur)"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1
                       focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                        />
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={sameAddress}
                            onChange={(e) => {
                                setSameAddress(e.target.checked);
                                if (e.target.checked) {
                                    setPermanentAddress(localAddress);
                                } else {
                                    setPermanentAddress("");
                                }
                            }}
                        />
                        <label className="text-gray-700 font-medium">
                            Permanent address is the same as local address
                        </label>
                    </div>

                    {/* Permanent Address */}
                    <div>
                        <label className="block font-medium text-gray-700">Permanent Address</label>
                        <input
                            type="text"
                            value={permanentAddress}
                            onChange={(e) => !sameAddress && setPermanentAddress(e.target.value)}
                            readOnly={sameAddress}
                            placeholder="Enter your permanent address"
                            className={`w-full border rounded-lg px-3 py-2 mt-1 outline-none 
                       ${sameAddress
                                    ? "border-gray-300 bg-gray-100 cursor-not-allowed"
                                    : "border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                }`}
                        />
                    </div>

                </div>


                <div className="educational bg-white shadow-md border border-gray-200 p-6 rounded-lg space-y-4">

                    <h2 className="text-lg font-semibold border-b pb-2">Educational Details</h2>

                    {/* Are you? */}
                    <label className="block font-medium text-gray-700">Are you a:</label>

                    <div className="flex flex-wrap gap-6 mt-1">
                        <label className="flex items-center gap-2">
                            <input
                                onChange={(e) => setAreYou(e.target.value)}
                                type="radio"
                                name="areyou"
                                value="student"
                                checked={areYou === "student"}
                            />
                            Student
                        </label>

                        <label className="flex items-center gap-2">
                            <input
                                onChange={(e) => setAreYou(e.target.value)}
                                type="radio"
                                name="areyou"
                                value="professional"
                                checked={areYou === "professional"}
                            />
                            Working professional
                        </label>
                    </div>

                    {/* STUDENT FIELDS */}
                    {areYou === "student" && (
                        <div id="students" className="space-y-4 pt-2">

                            <div>
                                <label className="block font-medium text-gray-700">
                                    Last Attained Qualification
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your qualification"
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1
                               focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block font-medium text-gray-700">Year</label>
                                <input
                                    type="text"
                                    placeholder="Enter your completion year"
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1
                               focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block font-medium text-gray-700">College / University</label>
                                <input
                                    type="text"
                                    placeholder="College / University"
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1
                               focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                                />
                            </div>

                        </div>
                    )}

                    {/* PROFESSIONAL FIELDS */}
                    {areYou === "professional" && (
                        <div id="professional" className="space-y-4 pt-2">

                            <div>
                                <label className="block font-medium text-gray-700">Designation</label>
                                <input
                                    type="text"
                                    placeholder="Enter your designation"
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1
                               focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block font-medium text-gray-700">Company</label>
                                <input
                                    type="text"
                                    placeholder="Enter your company name"
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1
                               focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                                />
                            </div>

                        </div>
                    )}

                </div>



                <div className="courses bg-white shadow-md border border-gray-200 p-6 rounded-lg space-y-4">

                    <h2 className="text-lg font-semibold border-b pb-2">Course Details</h2>

                    {/* COURSE SELECT */}
                    <div>
                        <label className="block font-medium text-gray-700">Course</label>

                        <select
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1
                       focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                        >
                            <option value="">Select a course</option>
                            <option value="Advanced Java">Advanced Java</option>
                            <option value="Android">Android</option>
                            <option value="Computer Basics">Computer Basics</option>
                            <option value="Core Java">Core Java</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Full Stack Development">Full Stack Development</option>
                            <option value="Graphic Design">Graphic Design</option>
                            <option value="Node js">Node js</option>
                            <option value="Photoshop">Photoshop</option>
                            <option value="PHP">PHP</option>
                            <option value="Python">Python</option>
                            <option value="React JS">React JS</option>
                            <option value="Web Design">Web Design</option>
                            <option value="Other Course">Other Course</option>
                        </select>
                    </div>

                    {/* OTHER COURSE FIELD */}
                    {course === "Other Course" && (
                        <div className="pt-2">
                            <label className="block font-medium text-gray-700" onChange={(e)=>setOtherCourseName(e.target.value)}>Enter your course</label>
                            <input
                                type="text"
                                placeholder="Enter the course name"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1
                           focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                            />
                        </div>
                    )}

                    {/* REFERENCE SECTION */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">
                            How did you come to know about us?
                        </label>

                        <div className="flex flex-wrap gap-6">

                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="ref"
                                    value="Google"
                                    onChange={(e) => setRefrence(e.target.value)}
                                />
                                Google
                            </label>

                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="ref"
                                    value="Linkedin"
                                    onChange={(e) => setRefrence(e.target.value)}
                                />
                                Linkedin
                            </label>

                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="ref"
                                    value="Instagram"
                                    onChange={(e) => setRefrence(e.target.value)}
                                />
                                Instagram
                            </label>

                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="ref"
                                    value="College TPO"
                                    onChange={(e) => setRefrence(e.target.value)}
                                />
                                College TPO
                            </label>

                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="ref"
                                    value="Friend"
                                    onChange={(e) => setRefrence(e.target.value)}
                                />
                                Friend
                            </label>

                        </div>
                    </div>

                    {/* FRIEND NAME INPUT */}
                    {refrence === "Friend" && (
                        <div className="pt-2">
                            <label className="block font-medium text-gray-700"  onChange={(e)=>setFriendName(e.target.value)}>Friend's Name</label>
                            <input
                                type="text"
                                placeholder="Enter friend's name"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1
                           focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                            />
                        </div>
                    )}

                </div>


                <div className="terms bg-white shadow-md border border-gray-200 p-6 rounded-lg space-y-4 relative">

                    <h2 className="text-lg font-semibold border-b pb-2">Terms & Conditions</h2>

                    {/* SWITCH */}
                    <div className="flex items-center gap-3">
                        <Switch
                            checked={checkedReg}
                            onChange={handleSwitchClick}
                        />
                        <p className="text-gray-700">
                            By clicking submit, you agree to our
                            <span checked={checkedReg} onClick={handleSwitchClick} className="text-blue-600 underline cursor-pointer"> Terms & Conditions</span>
                        </p>
                    </div>

                    {/* REGISTER BUTTON */}
                    <button
                        disabled={!checkedReg}
                        className={`w-full py-3 rounded-lg text-white text-lg font-medium transition
            ${checkedReg ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`}
                    >
                        Register
                    </button>

                    {/* POPUP */}
                    {showPopup && (
                        <div className="popup fixed inset-0 bg-black/50 flex justify-center items-center z-50">

                            <div className="bg-white w-96 p-6 rounded-xl shadow-lg animate-fadeIn">

                                <h4 className="text-lg font-semibold flex justify-between items-center">
                                    Terms & Conditions
                                    <span className="cursor-pointer text-xl font-bold" onClick={handleClose}>×</span>
                                </h4>

                                <h2 className="font-semibold mt-4 mb-2">You agree to the following:</h2>

                                <div className="space-y-2 text-gray-700 text-sm leading-relaxed">
                                    <p>You have understood the course content.</p>
                                    <p>You have understood the course duration.</p>
                                    <p>You have cleared all your doubts regarding the course, the content, and the duration.</p>
                                    <p>Fees once paid is not refundable.</p>
                                    <p>In case of uninformed leave, you will not be eligible for a backup.</p>
                                    <p>7 days or more of leave without permission may terminate your registration.</p>
                                </div>

                                <div className="flex justify-end gap-3 mt-6">
                                    <button
                                        onClick={handleAgree}
                                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                                    >
                                        I Agree
                                    </button>

                                    <button
                                        onClick={handleClose}
                                        className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                                    >
                                        Close
                                    </button>
                                </div>

                            </div>

                        </div>
                    )}

                </div>


            </form>



        </>
    )
}
