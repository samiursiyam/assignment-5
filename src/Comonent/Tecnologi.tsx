import { use } from 'react';
import TecCard from './TecCard';
import type { DataType } from '../Type';

interface DataProps {
    dataPromis: Promise<DataType[]>;
}

const Tecnologi = ({ dataPromis }: DataProps) => {
    const skillsData = use(dataPromis);

    return (
        <div className=' container m-auto'>
            <h2 className='text-3xl font-bold'>Explore the <span className='bg-gradient-to-r from-[#ba5db3] to-[#9a0381] bg-clip-text text-transparent '>Technologies</span> </h2>
            <p className='mt-2'>Pick one technology per category to build your ideal stack.</p>

<TecCard skillsData ={skillsData}></TecCard>

        </div>
    );
};

export default Tecnologi;