import BannerImage from '../../assets/banner1.jpeg';

function Banner(){
return (
    <div className='w-full h-100 relative'>
        <img 
        src={BannerImage} 
        alt="Banner" 
        className="w-full h-full" />

        <div className='absolute top-30 left-0 right-0 mx-auto w-100'>
            <div className='flex flex-col gap-4 text-center'>
                <div className='font-semibold text-5xl text-white '>
                    Crypto Tr<span className='text-pink-600'>a</span>cker
                </div>
                <div className='font-semibold text-sm text-white'>
                    Get all the Info regarding your favorite Crypto Currency
                </div>

            </div>


        </div>
        
    </div>
);

}

export default Banner;