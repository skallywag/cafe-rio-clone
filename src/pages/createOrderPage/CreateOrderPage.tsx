import { OptionCard } from "../../components/optionCard/OptionCard";
import { useRef, useState } from "react";
import "./CreateOrderPage.scss";
import { OptionBar } from "./optionBar/OptionBar";
import { SideBar } from "./sideBar/SideBar";

const CreateOrderPage: React.FC = () => {
  const [tortillaOption, setTortillaOption] = useState("");
  const [proteinOption, setProteinOption] = useState("");
  const [riceOption, setRiceOption] = useState("");
  const [beansOption, setBeansOption] = useState("");
  const [sauceOption, setSauceOption] = useState("");

  const tortillaRef = useRef<null | HTMLHeadingElement>(null);
  const proteinRef = useRef<null | HTMLHeadingElement>(null);
  const riceRef = useRef<null | HTMLDivElement>(null);
  const beansRef = useRef<null | HTMLDivElement>(null);
  const sauceRef = useRef<null | HTMLHeadingElement>(null);
  const styleRef = useRef<null | HTMLDivElement>(null);

  function handleAddTortilla(option: string) {
    if (option === tortillaOption) {
      return setTortillaOption("");
    }
    setTortillaOption(option);
  }

  function handleAddProtein(option: string) {
    if (option === proteinOption) {
      setProteinOption("");
      return;
    }
    setProteinOption(option);
  }

  const handleScroll = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="createOrderPage">
      <OptionBar
        riceRef={riceRef}
        tortillaRef={tortillaRef}
        proteinRef={proteinRef}
        beansRef={beansRef}
        sauceRef={sauceRef}
        styleRef={styleRef}
        handleClick={handleScroll}
      />
      <div className="pageWrapper">
        <h5 ref={tortillaRef} style={{ marginBottom: "20px" }}>
          Tortilla
        </h5>
        <div className="optionSection">
          <OptionCard
            title="Flour"
            imageUrl="https://cdn.caferio.com/200045.jpg"
            onClick={() => {
              handleAddTortilla("Flour");
            }}
            isActive={tortillaOption === "Flour"}
          />
          <OptionCard
            title="Wheat"
            imageUrl="https://cdn.caferio.com/200050.jpg"
            onClick={() => {
              handleAddTortilla("Wheat");
            }}
            isActive={tortillaOption === "Wheat"}
          />
        </div>
        <h5 ref={proteinRef} style={{ marginBottom: "20px" }}>
          PROTEIN
        </h5>
        <div className="optionSection">
          <OptionCard
            title="Carne Asada"
            imageUrl="https://cdn.caferio.com/50255.jpg"
            isActive={proteinOption === "CARNE ASADA"}
            onClick={() => {
              handleAddProtein("Carne Asada");
            }}
          />
          <OptionCard
            title="SWEET PORK BARBACOA"
            imageUrl="https://cdn.caferio.com/50230.jpg"
            isActive={proteinOption === "SWEET PORK BARBACOA"}
            onClick={() => {
              handleAddProtein("Sweet Pork Barbacoa");
            }}
          />
          <OptionCard
            title="SHREDDED CHICKEN BREAST"
            imageUrl="https://cdn.caferio.com/50210.jpg"
            isActive={proteinOption === "SHREDDED CHICKEN BREAST"}
            onClick={() => {
              handleAddProtein("Shredded Chicken Breast");
            }}
          />
          <OptionCard
            title="CHILE ROAST BEEF"
            imageUrl="https://cdn.caferio.com/50220.jpg"
            isActive={proteinOption === "CHILE ROAST BEEF"}
            onClick={() => {
              handleAddProtein("Chile Roast Beef");
            }}
          />
          <OptionCard
            title="VEGETARIAN"
            imageUrl="https://cdn.caferio.com/50270.jpg"
            isActive={proteinOption === "VEGETARIAN"}
            onClick={() => {
              handleAddProtein("Vegetarian");
            }}
          />

          <OptionCard
            title="FIRE-GRILLED STEAK"
            imageUrl="https://cdn.caferio.com/50250.jpg"
            isActive={proteinOption === "FIRE-GRILLED STEAK"}
            onClick={() => {
              handleAddProtein("Fire-Grilled Steak");
            }}
          />
          <OptionCard
            title="FIRE-GRILLED CHICKEN"
            imageUrl="https://cdn.caferio.com/50240.jpg"
            onClick={() => {
              handleAddProtein("Fire-Grilled Chicken");
            }}
            isActive={proteinOption === "FIRE-GRILLED CHICKEN"}
          />
          <OptionCard
            title="ADD ANOTHER PROTEIN"
            imageUrl="https://cdn.caferio.com/customize/4728.jpg"
          />
          <OptionCard
            title="EXTRA PROTEIN
+ $3.29"
            imageUrl="https://www.caferio.com/images/brick-button-2x.jpg"
          />
        </div>
        <h5 ref={riceRef} style={{ marginBottom: "20px" }}>
          RICE
        </h5>
        <div className="optionSection">
          <OptionCard
            title="CILANTRO LIME RICE"
            imageUrl="https://cdn.caferio.com/200072.jpg"
          />
          <OptionCard
            title="DOUBLE RICE, NO BEANS"
            imageUrl="https://cdn.caferio.com/251030.jpg"
          />
          <OptionCard
            title="NO RICE"
            imageUrl="https://cdn.caferio.com/200073.jpg"
          />
        </div>
        <h5 ref={beansRef} style={{ marginBottom: "20px" }}>
          BEANS
        </h5>
        <div className="optionSection">
          <OptionCard
            title="BLACK BEANS"
            imageUrl="https://cdn.caferio.com/251001.jpg"
          />
          <OptionCard
            title="PINTO BEANS"
            imageUrl="https://cdn.caferio.com/251006.jpg"
          />
          <OptionCard
            title="HALF & HALF BEANS"
            imageUrl="https://cdn.caferio.com/200220.jpg"
          />
          <OptionCard
            title="NO BEANS"
            imageUrl="https://cdn.caferio.com/200055.jpg"
          />
          <OptionCard
            title="DOUBLE BLACK BEANS, NO RICE"
            imageUrl="https://cdn.caferio.com/251027.jpg"
          />
          <OptionCard
            title="DOUBLE PINTO BEANS, NO RICE"
            imageUrl="https://cdn.caferio.com/251028.jpg"
          />
        </div>
        <h5 ref={sauceRef} style={{ marginBottom: "20px" }}>
          SAUCE
        </h5>
        <div className="optionSection">
          <OptionCard
            title="MILD - ROASTED TOMATILLO"
            imageUrl="https://cdn.caferio.com/200150.jpg"
          />
          <OptionCard
            title="MEDIUM - HATCH GREEN CHILE"
            imageUrl="https://cdn.caferio.com/200155.jpg"
          />
          <OptionCard
            title="HOT - ROASTED RED CHILE"
            imageUrl="https://cdn.caferio.com/200160.jpg"
          />
          <OptionCard
            title="HOTTER - HABANERO SAUCE"
            imageUrl="https://cdn.caferio.com/200163.jpg"
          />
          <OptionCard
            title="NO SAUCE"
            imageUrl="https://cdn.caferio.com/200165.jpg"
          />
          <OptionCard
            title="ADD MORE SAUCE"
            imageUrl="https://cdn.caferio.com/customize/4751.jpg"
          />

          <OptionCard
            title="SAUCE ON THE SIDE"
            imageUrl="https://cdn.caferio.com/100586.jpg"
          />
        </div>
        <h5 ref={styleRef} style={{ marginBottom: "20px" }}>
          ENCHILADA STYLE
        </h5>
        <div className="optionSection">
          <OptionCard
            title="SAUCE & CHEESE ON TOP
+ $1.00"
            imageUrl="https://cdn.caferio.com/200170.jpg"
          />
          <OptionCard
            title="SAUCE ONLY, NO CHEESE
+ $1.00"
            imageUrl="https://cdn.caferio.com/200206.jpg"
          />
          <OptionCard
            title="CHEESE ON TOP
+ $1.00"
            imageUrl="https://cdn.caferio.com/200216.jpg"
          />
          <OptionCard
            title="QUESO STYLE
+ $2.19
"
            imageUrl="https://cdn.caferio.com/251090.jpg"
          />
          <OptionCard
            title="NO ENCHILADA STYLE"
            imageUrl="https://cdn.caferio.com/200175.jpg"
          />
        </div>
        <SideBar
          tortillaOption={tortillaOption}
          proteinOption={proteinOption}
          riceOption={riceOption}
          beansOption={beansOption}
          sauceOption={sauceOption}
        />
      </div>
    </div>
  );
};

export { CreateOrderPage };
