import NavBar from '../components/NavBar.jsx';

const HomeLayout = ({ children }) => {
    return (
        <div className="background w-full md:h-[100vh] h-[100svh]">
            <NavBar/>
            {children}
        </div>
    );
};

export default HomeLayout;