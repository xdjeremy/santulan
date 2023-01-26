import React, {FC} from 'react';
import Image from "next/image";
import Hall from '../../public/barangay_hall.jpg';

const Hero: FC = () => {
    return (
        <div>
            <div className={'opacity-50 h-64 xl:h-96 overflow-clip flex flex-col items-center justify-center'}>
                <Image src={Hall} alt={'Barangay Hall'}/>
            </div>
            <div className={'bg-primary-500 py-9 px-14'}>
                <div className={'flex flex-col gap-5 xl:gap-16 xl:p-6 w-full max-w-xl mx-auto'}>
                    <div>
                        <h1 className={'text-xl text-primary-50 xl:text-center'}>
                            Welcome to
                        </h1>
                        <h1 className={'text-4xl text-primary-50 font-bold w-10 xl:w-full xl:text-center'}>
                            Barangay Santulan
                        </h1>
                    </div>
                    <p className={'text-primary-50 font-semibold xl:text-center'}>
                        Experience the harmony of community living in Barangay Santulan.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
