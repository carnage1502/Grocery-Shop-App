import { TfiShoppingCartFull } from "react-icons/tfi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BsShieldCheck } from "react-icons/bs";
import { FiGift } from "react-icons/fi";
import ServiceCard from "./ServiceCard";

const data = [
  {
    title: "FAST & FREE DELIVERY",
    icon: <TfiShoppingCartFull />,
    desc: "Free delivery for all orders above ₹200",
  },
  {
    title: "24/7 CUSTOMER SUPPORT",
    icon: <RiCustomerService2Fill />,
    desc: "Friendly 24/7 customer support",
  },
  {
    title: "MONEY REFUND GUARANTEE",
    icon: <BsShieldCheck />,
    desc: "We return money within 15 days",
  },
  {
    title: "MEMBER GIFTS",
    icon: <FiGift />,
    desc: "Extra discount for our members",
  },
];

const Services = () => {
  return (
    <div className="bg-[#f7f5ee]">
      <div className="container grid gap-8 md:grid-cols-2 x1:grid-cols-4 py-10">
        {data.map((item) => (
          <ServiceCard
            key={item.title}
            title={item.title}
            icon={item.icon}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
