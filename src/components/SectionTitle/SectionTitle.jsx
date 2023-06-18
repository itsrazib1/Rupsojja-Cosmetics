

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center px-10 py-2 md:w-4/12 my-8 bg-[#3fb1cd]">
            <p className="text-yellow-300 mb-2"> {subHeading}</p>
            <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;