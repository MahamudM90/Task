import Vector from '../../assets/images/Vector.png'
import Play from '../../assets/images/Play.png'
import common from '../../assets/images/common.png'
import Mask from '../../assets/images/Mask group.png'
import Masks from '../../assets/images/Mask group-2.png'
import Last from '../../assets/images/Mask group-3.png'
import frame1 from '../../assets/images/Frame 29.png'
import frame2 from '../../assets/images/Frame 30.png'
import frame3 from '../../assets/images/Frame 31.png'
import frame4 from '../../assets/images/Frame 32.png'


export default function Hero() {
    return (
        <>
            <div className='flex gap-16 mt-12'>
                <div className="ml-4 mt-12">
                    <div className="w-[220px] bg-[#241457] h-[36px] rounded flex justify-center items-center gap-4">
                        <img className='w-[19px] h-[19px]' src={Vector}></img>
                        <p className="flex justify-center items-center text-[#FFFFFF] font-Inter font-medium text-[14px]">Verified by Coursera</p>
                    </div>
                    <div className='w-[528px] h-[170px]'>
                        <h1 className='w-[528px] h-[170px] font-Inter font-semibold text-[70px] text-[#FFFFFF]'>Learn Code
                            From top <span className='text-[#EAE34A] underline'>Coder</span></h1>
                    </div>
                    <div className='w-[574px] h-[89px] mt-16'>
                        <p className='text-[#FFFFFF] font-Inter font-normal'>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
                        </p>
                    </div>
                    <div className='flex gap-4'>
                        <button className="w-[152px] h-[48px] bg-[#EAE34A] font-Inter font-medium text-[#10005A] rounded">Get Started</button>
                        <div className='w-[198px] h-[48px] bg-[#291B52] font-Inter font-medium text-[#FFFFFF] rounded flex justify-center items-center gap-2 '>
                            <img className='w-[20px] h-[20px]' src={Play}></img>
                            <button className="">How it Works</button>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='text-[#F7B933] font-medium text-[20px] font-Inter font-normal'>******<span className='text-[#FFFFFF] ml-4'>Based on 10,000+ reviews on</span></p>
                    </div>
                    <div className='flex gap-2 mt-4'>
                        <img className='w-[15px] h-[15px]' src={common}></img>
                        <p className='font-Inter text-[#FFFFFF]'>Crowd</p>
                        <img className='w-[15px] h-[15px]' src={common}></img>
                        <p className='font-Inter text-[#FFFFFF]'>Capacita</p>
                        <img className='w-[15px] h-[15px]' src={common}></img>
                        <p className='font-Inter text-[#FFFFFF]'>Get app</p>
                    </div>
                </div>
                <div className='w-[160px] h-[410px] bg-[#98FDE3] rounded-lg rounded-t-lg'>
                    <h1 className='text-center font-Inter font-semibold text-[22px] text-[#3E1B5F]'>Zillo Monio</h1>
                    <h2 className='text-center font-Inter font-semibold text-[16px] text-[#3E1B5F]'>Data Engineer</h2>
                    <img src={Mask}></img>
                </div>
                <div className='w-[160px] h-[410px] bg-[#3E3761] rounded-lg mt-[85px]'>
                    <h1 className='text-center font-Inter font-semibold text-[22px] text-[black]'>Lissa Kie</h1>
                    <h2 className='text-center font-Inter font-semibold text-[16px] text-[black]'>React Engineer</h2>
                    <img src={Masks}></img>
                </div>
                <div className='w-[160px] h-[410px] bg-[#98FDE3] rounded-lg -mt-[30px]'>
                    <h1 className='text-center font-Inter font-semibold text-[22px] text-[#3E1B5F]'>Killan James</h1>
                    <h2 className='text-center font-Inter font-semibold text-[16px] text-[#3E1B5F]'>Laravel Engineer</h2>
                    <img src={Last}></img>
                </div>

            </div>
            <div className='flex mt-20 bg-[#2B0D57] w-[1440px] h-[356px] -ml-[30px]'>
            <div className='mx-20 mt-4 w-[90px] h-[90px]'>
            <img src={frame1}></img>
            <p className='w-[127px] h-[66px] font-Inter font-semibold text-[48px] text-[#FFFFFF]'>360+</p>
            <p className='w-[105px] h-[30px] font-Inter font-normal text-[#B7AACC] text-[24px]'>Teachers</p>
            </div>
            <div className='mx-20 mt-4 w-[90px] h-[90px]'>
            <img src={frame2}></img>
            <p className='w-[127px] h-[66px] font-Inter font-semibold text-[48px] text-[#FFFFFF]'>30K</p>
            <p className='w-[105px] h-[30px] font-Inter font-normal text-[#B7AACC] text-[24px]'>Students</p>
            </div>
            <div className='mx-20 mt-4 w-[90px] h-[90px]'>
            <img src={frame3}></img>
            <p className='w-[127px] h-[66px] font-Inter font-semibold text-[48px] text-[#FFFFFF]'>8k</p>
            <p className='w-[105px] h-[30px] font-Inter font-normal text-[#B7AACC] text-[24px]'>Lessons</p>
            </div>
            <div className='mx-20 mt-4 w-[90px] h-[90px]'>
            <img src={frame4}></img>
            <p className='w-[127px] h-[66px] font-Inter font-semibold text-[48px] text-[#FFFFFF]'>200</p>
            <p className='w-[105px] h-[30px] font-Inter font-normal text-[#B7AACC] text-[24px]'>Partners</p>
            </div>
            <div className='mx-20 mt-4 w-[90px] h-[90px]'>
            <img src={frame4}></img>
            <p className='w-[127px] h-[66px] font-Inter font-semibold text-[48px] text-[#FFFFFF]'>60%</p>
            <p className='w-[105px] h-[30px] font-Inter font-normal text-[#B7AACC] text-[24px]'>Success</p>
            </div>
            </div>
            
        </>
    )
}