const Stats = ({ children }) => {
    return (
        <div className="flex md:flex-row md:gap-0 gap-5 flex-col justify-between xl:px-[250px] lg:px-[100px] md:px-[75px] px-[50px] py-8 bg-dark-secondary ">
            {children}
        </div>
    );
};

export default Stats;