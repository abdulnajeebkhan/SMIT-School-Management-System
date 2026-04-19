import React from 'react'

const Subjects = () => {
    return (
        <div className='h-screen p-10'>

            <details class="dropdown">
                <summary class="select select-bordered btn m-1">
                    Select Subjects
                </summary>

                <ul class="dropdown-content menu bg-base-100 rounded-box z-[1] w-64 p-2 shadow">

                    <li>
                        <label class="label cursor-pointer justify-between">
                            <span class="label-text">Maths</span>
                            <input type="checkbox" class="checkbox" />
                        </label>
                    </li>

                    <li>
                        <label class="label cursor-pointer justify-between">
                            <span class="label-text">English</span>
                            <input type="checkbox" class="checkbox" />
                        </label>
                    </li>

                    <li>
                        <label class="label cursor-pointer justify-between">
                            <span class="label-text">Science</span>
                            <input type="checkbox" class="checkbox" />
                        </label>
                    </li>

                    <li>
                        <label class="label cursor-pointer justify-between">
                            <span class="label-text">Computer</span>
                            <input type="checkbox" class="checkbox" />
                        </label>
                    </li>

                    <li>
                        <label class="label cursor-pointer justify-between">
                            <span class="label-text">Urdu</span>
                            <input type="checkbox" class="checkbox" />
                        </label>
                    </li>

                    <li>
                        <label class="label cursor-pointer justify-between">
                            <span class="label-text">Islamiat</span>
                            <input type="checkbox" class="checkbox" />
                        </label>
                    </li>

                </ul>
            </details>


        </div>
    )
}

export default Subjects
