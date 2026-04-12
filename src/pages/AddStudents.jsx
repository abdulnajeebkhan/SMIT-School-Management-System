import React, { useState } from "react";

const StudentForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        region: "",
        zip: "",
        country: "",
        gender: "",
        englishClass: "",
        mathClass: "",
        scienceClass: "",
        comments: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="h-[93vh] bg-base-200 flex items-center justify-center p-5">
            <div className="card w-full max-w-2xl bg-base-100 shadow-xl p-6">
                <h2 className="text-2xl font-bold text-center mb-6">
                    Student Enrollment Form
                </h2>
                <form className="space-y-4">

                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            className="input input-bordered w-full"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            className="input input-bordered w-full"
                            onChange={handleChange}
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="Address Line 1"
                        name="address1"
                        className="input input-bordered w-full"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Address Line 2"
                        name="address2"
                        className="input input-bordered w-full"
                        onChange={handleChange}
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="City"
                            name="city"
                            className="input input-bordered w-full"
                            onChange={handleChange}
                        />
                        <select
                            name="region"
                            className="select select-bordered w-full"
                            onChange={handleChange}
                        >
                            <option disabled selected>Select Region</option>
                            <option>Asia</option>
                            <option>Europe</option>
                            <option>America</option>
                            <option>Middle East</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Postal / Zip Code"
                            name="zip"
                            className="input input-bordered w-full"
                            onChange={handleChange}
                        />
                        <select
                            name="country"
                            className="select select-bordered w-full"
                            onChange={handleChange}
                        >
                            <option disabled selected>Select Country</option>
                            <option>Pakistan</option>
                            <option>Saudi Arabia</option>
                            <option>UAE</option>
                            <option>United States</option>
                        </select>
                    </div>

                    <div>
                        <label className="label font-semibold">Gender</label>
                        <div className="flex gap-5">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    className="radio"
                                    onChange={handleChange}
                                />
                                Male
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    className="radio"
                                    onChange={handleChange}
                                />
                                Female
                            </label>
                        </div>
                    </div>

                    <select
                        name="englishClass"
                        className="select select-bordered w-full"
                        onChange={handleChange}
                    >
                        <option disabled selected>Select English Class</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                    </select>

                    <select
                        name="mathClass"
                        className="select select-bordered w-full"
                        onChange={handleChange}
                    >
                        <option disabled selected>Select Math Class</option>
                        <option>Basic</option>
                        <option>Algebra</option>
                        <option>Calculus</option>
                    </select>

                    <select
                        name="scienceClass"
                        className="select select-bordered w-full"
                        onChange={handleChange}
                    >
                        <option disabled selected>Select Science Class</option>
                        <option>Physics</option>
                        <option>Chemistry</option>
                        <option>Biology</option>
                    </select>

                    <textarea
                        name="comments"
                        placeholder="Comments"
                        className="textarea textarea-bordered w-full"
                        onChange={handleChange}
                    ></textarea>

                    <button className="btn btn-primary w-full mt-4">
                        Submit
                    </button>

                </form>
            </div>
        </div>
    );
};

export default StudentForm;