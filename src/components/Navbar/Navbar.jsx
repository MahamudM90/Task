import CodeSandbox from '../../assets/images/CodeSandbox.svg'
export default function Navbar() {
    return (
        <>
            <div className="navbar bg-[#160A3A]">
                <div className="flex-1">
                    <img className='h-[54px] w-[54px]' src={CodeSandbox}></img>
                    <h2 className='font-medium font-Inter text-[#FFFFFF]'>Code Learn</h2>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-[#FFFFFF]'><a>Home</a></li>
                        <li className='text-[#FFFFFF]'><a>Course</a></li>
                        <li className='text-[#FFFFFF]'><a>About Us</a></li>
                        <li className='text-[#FFFFFF]'><a>Pricing</a></li>
                        <li className='text-[#FFFFFF]'><a>Contact</a></li>
                        <div className='flex gap-8'>
                            <button className="btn btn-neutral w-[88px] h-[2px] bg-[#EAE34A] rounded text-[#10005A] font-medium font-Inter">Login</button>
                            <button className="btn btn-neutral w-[88px] h-[2px] bg-[#37266F] rounded text-[##FFFFFF] font-medium font-Inter">Sign Up</button>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}