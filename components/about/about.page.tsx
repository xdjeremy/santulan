import React, {FC} from 'react';
import Thumbnail from "@/components/about/Thumbnail";

const barangayOfficials: {
    title: string;
    image: string;
}[] = [
    {
        title: 'Barangay Captain',
        image: '/barangay-captain.png',
    },
    {
        title: 'Barangay Kagawad',
        image: '/barangay-kagawad.png',
    },
    {
        title: 'Barangay Kagawad',
        image: '/barangay-kagawad2.png',
    },
    {
        title: 'Sangguniang Kabataan',
        image: '/sangguinaing-kabataan.png',
    }
]
const AboutPage: FC = () => {
    return (
        <div className={'bg-[#CFCFCF] w-full max-w-7xl mx-auto px-5 py-10'}>
            <h1 className={'font-bold text-3xl mt-10 mb-5'}>
                Barangay Officials
            </h1>
            <div className={'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center'}>
                {barangayOfficials.map((item) => (
                    <Thumbnail image={item.image} title={item.title} key={item.title}/>
                ))}
            </div>

            <div className={'grid grid-cols-1 xl:grid-cols-2  gap-5 xl:gap-20'}>
                <div className={'mt-10 mb-5'}>
                    <h1 className={'font-bold text-3xl'}>
                        Address
                    </h1>
                    <p className={'text-xl'}>
                        Barangay Santulan, Malabon City Office Hours:8:00 AM to 5:00 PM Monday to Friday
                    </p>
                </div>
                <div className={'mt-10 mb-5'}>
                    <p className={'text-xl xl:mt-7'}>
                        For your concerns you may contact us <br/>
                        at <span className={'font-bold'}>88954011 / 88954012Other</span> <br/>
                        Tel. Nos.: <span className={'font-bold'}>88954408 • 88956509 • 88955563</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export {AboutPage};
