import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/home/Untitled-4.jpg";
import MakeUp from "../../../assets/home/Untitled-1.jpg";
import soapimg from "../../../assets/home/Untitled-7.jpg";
import Parfumimg from "../../../assets/home/Untitled-3.jpg";
import otherImg from "../../../assets/home/Untitled-8.jpg";
import KidsZoneImg from "../../../assets/home/Untitled-4.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const KidsZone = menu.filter((item) => item.category === "KidsZone");
  const Makeup = menu.filter((item) => item.category === "Makeup");
  const soap = menu.filter((item) => item.category === "soap");
  const Parfum = menu.filter((item) => item.category === "Parfum");
  const other = menu.filter((item) => item.category === "other");
  // const offered = menu.filter(item => item.category === 'offered');
  return (
    <div>
      <Helmet>
        <title>Rupsojja Cosmetics | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory
        items={KidsZone}
        title="KidsZone"
        img={KidsZoneImg}
      ></MenuCategory>
      {/* dessert menu items  */}
      <MenuCategory items={Makeup} title="Makeup" img={MakeUp}></MenuCategory>
      <MenuCategory items={soap} title={"soap"} img={soapimg}></MenuCategory>
      <MenuCategory
        items={Parfum}
        title={"Parfum"}
        img={Parfumimg}
      ></MenuCategory>
      <MenuCategory items={other} title={"other"} img={otherImg}></MenuCategory>
    </div>
  );
};

export default Menu;
