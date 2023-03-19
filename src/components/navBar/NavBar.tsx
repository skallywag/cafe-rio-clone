import logo from "../../assets/Cafe_Rio_logo.svg.png";
import { HiOutlineShoppingBag } from "react-icons/hi";
import "./NavBar.scss";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <div className="navBar">
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <img src={logo} width="129px" height={40} alt="logo" />
        <h4 style={{ color: "darkblue" }}>Sign in & Earn Rewards</h4>
      </div>
      <div className="linkContainer">
        <h4 style={{ color: "darkblue" }}>Order</h4>
        <h4 style={{ color: "darkblue" }}>Catering</h4>
        <h4 style={{ color: "darkblue" }}>My Rio Rewards</h4>
        <h4 style={{ color: "darkblue" }}>Gift Cards</h4>
        <h4 style={{ color: "darkblue" }}>Rewards</h4>
      </div>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <h6 style={{ color: "darkblue" }}>Find Your Local Cafe Rio</h6>
        <HiOutlineShoppingBag size={30} color="darkblue" />
      </div>
    </div>
  );
};

export { NavBar };
