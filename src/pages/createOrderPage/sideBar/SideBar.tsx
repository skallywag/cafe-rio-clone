import { BsCheckCircle } from "react-icons/bs";
import "./SideBar.scss";

interface SideBarProps {
  tortillaOption: string;
  proteinOption: string;
  riceOption: string;
  beansOption: string;
  sauceOption: string;
}

const SideBar: React.FC<SideBarProps> = (props) => {
  return (
    <div className="sideBar">
      <div className="infoContainer">
        <div>
          <img
            height={81}
            src="https://cdn.caferio.com/905180.jpg"
            alt="burrito"
          />
        </div>
        <span>Burrito</span>
        <br />
        <span>$11.99</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          padding: "24px",
        }}
      >
        <div className="orderStep">
          <BsCheckCircle size={20} />
          <span>Tortilla</span>
        </div>
        {props.tortillaOption && <span>{props.tortillaOption}</span>}
        <div className="orderStep">
          <BsCheckCircle size={20} />
          <span>Protein</span>
        </div>
        {props.proteinOption && <span>{props.proteinOption}</span>}
        <div className="orderStep">
          <BsCheckCircle size={20} />
          <span>Rice</span>
        </div>
        <div className="orderStep">
          <BsCheckCircle size={20} />
          <span>Beans</span>
        </div>
        <div className="orderStep">
          <BsCheckCircle size={20} />
          <span>Sauce</span>
        </div>
        <div className="orderStep">
          <BsCheckCircle size={20} />
          <span>Enchilada Style</span>
        </div>
        <div className="orderStep">
          <BsCheckCircle size={20} />
          <span>Customize Further</span>
        </div>
        <button>Add to Bag</button>
      </div>
    </div>
  );
};

export { SideBar };
