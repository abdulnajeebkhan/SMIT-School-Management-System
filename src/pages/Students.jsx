import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteStudent } from '../redux/features/StudentSlice';
import { useNavigate } from 'react-router';

const Students = () => {

    const studentData = useSelector((state) => state.StudentReducer);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const deleteList = (student) => {
        dispatch(deleteStudent(student))
    }

    const editList = (student) => {
        navigate('/addstudent')
        // dispatch(deleteStudent(student))
    }


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
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {studentData.map((student, idx) => (
                        <tr key={idx}>
                            <th>{idx + 1}</th>
                            <td>{`${student.firstName} ${student.lastName}`}</td>
                            <td>{student.fatherName}</td>
                            <td>{student.class}</td>
                            <td>{student.gender}</td>
                            <td>{student.phoneNumber}</td>
                            <td>{student.address}</td>
                            <td className='flex items-center gap-4'> <i onClick={() => editList(student)} className="ri-pencil-fill py-1 px-2 rounded bg-blue-500 text-white cursor-pointer"></i> <i onClick={() => deleteList(student)} className="ri-delete-bin-fill py-1 px-2 rounded bg-red-500 text-white cursor-pointer"></i> </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Students