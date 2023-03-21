import { BsCheckCircle } from "react-icons/bs";
import { ProgressBar } from "../../../components/progressBar/ProgressBar";
import "./SideBar.scss";

interface SideBarProps {
  orderStep: number;
  itemTotal?: number;
  tortillaOption: string;
  proteinOption: string;
  riceOption: string;
  beansOption: string;
  sauceOption: string;
  enchiladaOption: string;
}

const SideBar: React.FC<SideBarProps> = (props) => {
  return (
    <div className="sideBar">
      <div className="infoContainer">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            height={81}
            src="https://cdn.caferio.com/905180.jpg"
            alt="burrito"
          />
          <span>Burrito</span>
          <span>$10.99</span>
        </div>
        <ProgressBar
          width={60}
          height={60}
          percentage={60}
          strokeWidth={10}
          orderStep={props.orderStep}
        />
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
          <BsCheckCircle
            color={props.tortillaOption ? "green" : ""}
            size={20}
          />
          <div>
            <span>Tortilla</span>
          </div>
        </div>

        {props.tortillaOption && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{props.tortillaOption}</span>
            <span>X</span>
          </div>
        )}

        <div className="orderStep">
          <BsCheckCircle color={props.proteinOption ? "green" : ""} size={20} />
          <span>Protein</span>
        </div>
        {props.proteinOption && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{props.proteinOption}</span>
            <span>X</span>
          </div>
        )}
        <div className="orderStep">
          <BsCheckCircle color={props.riceOption ? "green" : ""} size={20} />
          <span>Rice</span>
        </div>
        {props.riceOption && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{props.riceOption}</span>
            <span>X</span>
          </div>
        )}
        <div className="orderStep">
          <BsCheckCircle color={props.beansOption ? "green" : ""} size={20} />
          <span>Beans</span>
        </div>
        {props.beansOption && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{props.beansOption}</span>
            <span>X</span>
          </div>
        )}
        <div className="orderStep">
          <BsCheckCircle color={props.sauceOption ? "green" : ""} size={20} />
          <span>Sauce</span>
        </div>
        {props.sauceOption && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{props.sauceOption}</span>
            <span>X</span>
          </div>
        )}
        <div className="orderStep">
          <BsCheckCircle
            color={props.enchiladaOption ? "green" : ""}
            size={20}
          />
          <span>Enchilada Style</span>
        </div>
        {props.enchiladaOption && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{props.enchiladaOption}</span>
            <span>X</span>
          </div>
        )}
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
