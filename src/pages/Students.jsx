import React from 'react'
import { useSelector } from 'react-redux'

const Students = () => {

    const studentData = useSelector((state) => state.StudentReducer)


    return (
        <div className="overflow-x-auto m-10 rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Father Name</th>
                        <th>Class</th>
                        <th>Gender</th>
                        <th>Phone number</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {studentData.map((student, idx) => (
                        <tr>
                            <th>{idx + 1}</th>
                            <td>{`${student.firstName} ${student.lastName}`}</td>
                            <td>{student.fatherName}</td>
                            <td>{student.class}</td>
                            <td>{student.gender}</td>
                            <td>{student.phoneNumber}</td>
                            <td>{student.address}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Students