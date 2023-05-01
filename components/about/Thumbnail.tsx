import React, {FC} from 'react';
import Image from "next/image";

interface Props {
    image: string;
    title: string;
}

const Thumbnail: FC<Props> = ({image, title}) => {
    return (
        <div className={'flex flex-col items-center justify-center gap-3'}>
            <Image width={250} height={250} src={image} alt={title}/>
            <span className={'font-medium text-xl'}>
                {title}
            </span>
        </div>
    );
};

export default Thumbnail;
