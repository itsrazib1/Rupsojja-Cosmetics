import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/Untitled-5.jpg';
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="check it out" heading="Featured Item" ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-8 md:px-36">
    <div>
        <img src={featuredImg} alt="" className="w-full" />
    </div>
    <div className="md:ml-10 sm:text-xs md:text-xl mt-6 md:mt-0">
        <p className="text-sm md:text-base">Aug 20, 2029</p>
        <p className="uppercase text-lg md:text-2xl">Where can I get some?</p>
        <p className="text-sm md:text-base mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
        <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
    </div>
</div>

        </div>
    );
};

export default Featured;