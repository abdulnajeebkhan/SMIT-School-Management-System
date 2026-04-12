

const Login = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <form action="" className="rounded-2xl p-10 w-[25%] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] flex justify-center items-center flex-col space-y-6">
                <h2 className="text-2xl font-bold">Sign In</h2>
                <p className="text-[#999]">Enter your Credentials to Countinue</p>
                <input type="text" placeholder="Email" className="w-full outline-0 border border-gray-400 rounded p-2" />
                <input type="password" placeholder="Password" className="w-full outline-0 border border-gray-400 rounded p-2" />
                <div className="flex justify-between items-center w-full">
                    <div className="flex gap-2">
                        <input type="checkbox" name="Remember me" id="" className="cursor-pointer" />
                        <span>Remember me</span>
                    </div>
                    <h5 className="text-blue-500 hover:text-blue-700 cursor-pointer" >Forget Passowrd?</h5>
                </div>
                <button className="bg-blue-500 w-full p-3 rounded text-xl text-white active:scale-95 cursor-pointer" >Sign in</button>
                <p className="text-[#666]">Don't have account <h5 className="text-blue-500 hover:text-blue-700 cursor-pointer inline">Create one</h5> </p>
            </form>
        </div>
    );
};

export default Login;