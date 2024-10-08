import Image from '../../assets/images/Rectangle 7.png'
import last from '../../assets/images/Rectangle 4423.png'
export default function Middle() {
    return (
        <>
            <div className="mx-auto">
                <h1 className="w-[364px] h-[26px] text-[#4B28B5] font-Inter text-[34px] font-normal">Let’s Learn together to</h1>
                <h2 className="w-[423px] h-[65px] font-Inter font-semibold text-[45px] text-[#010A12] mt-2">Grow Your Skills</h2>
            </div>
            <div className='flex gap-20 '>
                <div className='mt-2  rounded'>
                    <img className='w-[535px] h-[388px]' src={Image}></img>
                </div>
                <div className=''>
                    <div className='flex '>
                        <h1 className='w-[334px] h-[29px] font-Inter text-[#000000] font-medium text-[24px]'>1.Describe Your Learning Skills</h1>
                    </div>
                    <p className='text-[#434254] font-normal font-Inter mt-2 text-[18px] w-[376px] h-[71px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</p>
                    <br></br>
                    <h1 className='w-[258px] h-[29px] font-Inter text-[#000000] font-medium text-[24px]'>2.Selected Course</h1>
                    <br>
                    </br>
                    <h1 className='w-[258px] h-[29px] font-Inter text-[#000000] font-medium text-[24px]'>3.Keep Track experts</h1>
                    <br></br>
                    <button className="btn btn-outline w-[140px] h-[10px]">Secondary</button>
                </div>
            </div>
            <div className='flex mt-8 gap-20'>
                <div className=''>
                    <div className='flex mt-4'>
                        <h1 className='w-[423px] h-[65px] font-Inter font-semibold text-[45px] text-[#010A12] mt-2'>Welcome to Code Learning Centre</h1>
                    </div>
                    <p className='text-[#434254] font-normal font-Inter mt-2 text-[18px] mt-24 w-[482px] h-[79px]'>Here we guide you to the best online courses, e-learning advice, and technology and resources for education and training.</p>
                    <br></br>
                    <h1 className='w-[250px] h-[24px] font-Inter text-[#000000] font-medium text-[24px]'>Safe & Scrued</h1>
                    <p className='w-[307px] h-[45px] font-poppins font-normal text-[#5C6272] mt-2'>Safe and Secured our services and every step of process.</p>
                    <br>
                    </br>
                    <h1 className='w-[250px] h-[29px] font-Inter text-[#000000] font-medium text-[24px]'>Highly Expert</h1>
                    <p className='w-[307px] h-[45px] font-poppins font-normal text-[#5C6272] mt-2'>There are coffee shops, sports, restaurants and a multitude of great study.</p>
                    <br></br>
                </div>
                <div className='w-[611px] h-[500px] rounded'>
                    <img src={last}></img>
                </div>
            </div>
        </>
    )
}