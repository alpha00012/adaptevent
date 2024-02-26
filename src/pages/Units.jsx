import UnitsInfo from '../assets/units.json';
import UnitItem from '../components/UnitItem.jsx';
import DefaultLayout from '../layout/DefaultLayout.jsx';

const Units = () =>{
    const unitsKeys = Object.keys(UnitsInfo);
    return (
        <DefaultLayout>
            <div className="flex flex-col gap-[50px] pt-10">
                {unitsKeys.map((key, index) => {
                    const unit = UnitsInfo[key];
                    return (
                        <UnitItem
                            key={index}
                            index={index}
                            name={unit.name}
                            subName={unit.subName}
                            description={unit.description}
                            website={unit.website} // Assuming "url" is the correct field name
                            color={unit.color}
                            numActivities={unit.numberOfActivities}
                            numMembers={unit.numberOfMembers}
                            foundation={unit.foundation}
                        />
                    );
                })}
            </div>
        </DefaultLayout>
    );
};

export default Units;