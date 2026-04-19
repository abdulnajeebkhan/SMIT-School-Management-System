import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../redux/features/StudentSlice";

const StudentForm = () => {

    const [studentData, setStudentData] = useState({
        firstName: '',
        lastName: '',
        fatherName: '',
        dateOfBirth: '',
        phoneNumber: '',
        address: '',
        city: '',
        region: '',
        zipCode: '',
        country: '',
        gender: '',
        class: ''
    })
    const dispatch = useDispatch()

    const onInputChanges = (evt, propName) => {
        setStudentData((prevState) => ({ ...prevState, [propName]: event.target.value }))
    }

    const onFormSubmit = (evt) => {
        evt.preventDefault()
        dispatch(addStudent(studentData))
        evt.target.reset();
    }

    return (
        <div className="p-5 w-full min-h-[calc(100vh-64px)] bg-base-200">
            <div className="bg-base-100 p-6 rounded-xl shadow h-full">

                <h2 className="text-2xl font-bold mb-6">
                    Student Form
                </h2>

                <form onSubmit={onFormSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-fr">

                    <input
                        type="text"
                        placeholder="First Name"
                        className="input input-bordered w-full h-12"
                        onChange={(evt) => { onInputChanges(evt, 'firstName') }}
                    />

                    <input
                        type="text"
                        placeholder="Last Name"
                        className="input input-bordered w-full h-12"
                        onChange={(evt) => { onInputChanges(evt, 'lastName') }}
                    />

                    <input
                        type="text"
                        placeholder="Father Name"
                        className="input input-bordered w-full h-12"
                        onChange={(evt) => { onInputChanges(evt, 'fatherName') }}
                    />

                    <input
                        type="date"
                        className="input input-bordered w-full h-12"
                        onChange={(evt) => { onInputChanges(evt, 'dateOfBirth') }}
                    />

                    <input
                        type="tel"
                        placeholder="Phone Number"
                        maxLength="11"
                        pattern="[0-9]{11}"
                        inputMode="numeric"
                        className="input input-bordered w-full h-12"
                        onChange={(evt) => { onInputChanges(evt, 'phoneNumber') }}
                    />

                    <input
                        type="text"
                        placeholder="City"
                        className="input input-bordered w-full h-12"
                        onChange={(evt) => { onInputChanges(evt, 'city') }}
                    />

                    <input
                        type="text"
                        placeholder="Address"
                        className="input input-bordered w-full h-12"
                        onChange={(evt) => { onInputChanges(evt, 'address') }}
                    />

                    <input
                        type="text"
                        placeholder="Zip Code"
                        className="input input-bordered w-full h-12"
                        onChange={(evt) => { onInputChanges(evt, 'zipCode') }}
                    />

                    <select
                        onChange={(evt) => { onInputChanges(evt, 'region') }}
                        defaultValue=""
                        className="select select-bordered w-full h-12">
                        <option value="" disabled>Select Region</option>
                        <option value="MiddleEast">Middle East</option>
                        <option value="Europe">Europe</option>
                        <option value="Asia">Asia</option>
                    </select>


                    <select
                        onChange={(evt) => { onInputChanges(evt, 'country') }}
                        defaultValue=""
                        className="select select-bordered w-full h-12">
                        <option value="" disabled>Select Country</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="UAE">UAE</option>
                    </select>

                    <select
                        onChange={(evt) => { onInputChanges(evt, 'gender') }}
                        defaultValue=""
                        className="select select-bordered w-full h-12">
                        <option value="" disabled>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                    <select
                        onChange={(evt) => { onInputChanges(evt, 'class') }}
                        defaultValue=""
                        className="select select-bordered w-full h-12">
                        <option value="" disabled>Select Class</option>
                        <option value="First Year">First Year</option>
                        <option value="Second Year">Second Year</option>
                    </select>

                    <div className="mt-6">
                        <button className="w-2/3 btn btn-primary px-8">
                            Submit
                        </button>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default StudentForm;