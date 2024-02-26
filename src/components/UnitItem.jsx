import Stats from '../components/Stats.jsx';
import StatItem from './StatItem.jsx';

const UnitItem = ({ index, name, subName, description, website, numActivities, numMembers, foundation, color }) => {
    return (
        <div className="flex flex-col gap-10">
            <div className={`flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:text-left text-center items-center justify-between lg:gap-[100px] gap-16 xl:mx-[200px]  mx-10`}>
                <img src={`/assets/logos/${name}/logo.png`} alt={name} className="xl:w-[400px] lg:w-[300px] md:w-[300px] w-full"/>
                <div className="flex flex-col gap-10 lg:items-start items-center">
                    <div>
                        <h1 className={' text-4xl font-bold'} style={{ color: color }}>{name}</h1>
                        <h2 className="text-blue-950 text-2xl font-medium" >{subName}</h2>
                    </div>
                    <div className="text-dark-grey text-lg ">
                        {description}
                    </div>
                    <div className="px-5 py-2.5 w-fit rounded-[15px]" style={{ backgroundColor: color }}>
                        <a href={website} target="_blank" className="text-light" rel="noreferrer">
                        Visit Website
                        </a>
                    </div>
                </div>
            </div>
            <Stats>
                <StatItem label="Members" value={numMembers}/>
                <StatItem label="Congress, Workshops, Competitions" value={numActivities}/>
                <StatItem label="Foundation" value={foundation}/>
            </Stats>
        </div>
    );
};

export default UnitItem;