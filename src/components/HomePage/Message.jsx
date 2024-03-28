import bgRight from '../../assets/kyc-top-bg.232a4283.png'
export default function Message(){
    return (
            <div className="px-5 flex flex-col md:flex-row mt-3 border rounded-md border-sky-500 shadow-2xl py-10 font-semibold">	
                <div className=''>
                    <h2 className='text-2xl '>You're almost done! Finish setting up your account. </h2>
                    <p className='font-normal text-sm pt-3 text-gray-600'>Tell us a few more details about your business to unlock <button>full</button> power.</p>
                </div>
                <div >
                    <img src={bgRight} alt="" width={500}/>
                </div>
            </div>
    );
}