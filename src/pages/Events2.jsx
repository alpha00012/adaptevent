import EventsPagination from '../components/EventsPagination2.jsx';
import DefaultLayout from '../layout/DefaultLayout.jsx';

const Events = () => {
    return (
        <DefaultLayout>
            <div className="pb-10">
                <EventsPagination/>
            </div>
        </DefaultLayout>
    );
};

export default Events;