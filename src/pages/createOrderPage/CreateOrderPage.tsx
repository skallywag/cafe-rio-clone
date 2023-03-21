import { OptionCard } from "../../components/optionCard/OptionCard";
import { useRef, useState } from "react";
import "./CreateOrderPage.scss";
import { OptionBar } from "./optionBar/OptionBar";
import { enchiladaItems } from "../../fakeData/enchiladaItems";
import { beansItems } from "../../fakeData/beansItems";
import { riceItems } from "../../fakeData/riceItems";
import { tortillaItems } from "../../fakeData/tortillaItems";
import { proteinItems } from "../../fakeData/proteinItems";
import { SideBar } from "./sideBar/SideBar";
import { sauceItems } from "../../fakeData/sauceItems";

const CreateOrderPage: React.FC = () => {
  const [tortillaOption, setTortillaOption] = useState("");
  const [proteinOption, setProteinOption] = useState("");
  const [riceOption, setRiceOption] = useState("");
  const [beansOption, setBeansOption] = useState("");
  const [sauceOption, setSauceOption] = useState("");
  const [enchiladaOption, setEnchiladaOption] = useState("");
  const [orderStep, setOrderStep] = useState(0);

  const tortillaRef = useRef<null | HTMLHeadingElement>(null);
  const proteinRef = useRef<null | HTMLHeadingElement>(null);
  const riceRef = useRef<null | HTMLDivElement>(null);
  const beansRef = useRef<null | HTMLDivElement>(null);
  const sauceRef = useRef<null | HTMLHeadingElement>(null);
  const styleRef = useRef<null | HTMLDivElement>(null);

  function handleStep() {}

  function handleTortillaSelect(option: string) {
    if (option === tortillaOption) {
      setTortillaOption("");
      setOrderStep(orderStep - 1);
      return;
    } else {
      setTortillaOption(option);
      setOrderStep(orderStep + 1);
    }
  }

  function handleProteinSelect(option: string) {
    if (option === proteinOption) {
      setProteinOption("");

      return;
    }
    setProteinOption(option);
  }

  function handleRiceSelect(option: string) {
    if (option === riceOption) {
      setRiceOption("");

      return;
    }
    setRiceOption(option);
  }

  function handleBeansSelect(option: string) {
    if (option === beansOption) {
      setBeansOption("");
      return;
    }
    setBeansOption(option);
  }

  function handleSauceSelect(option: string) {
    if (option === sauceOption) {
      setSauceOption("");
      return;
    }
    setSauceOption(option);
  }

  function handleEchiladaSelect(option: string) {
    if (option === enchiladaOption) {
      setEnchiladaOption("");
      return;
    }
    setEnchiladaOption(option);
  }

  const handleRefScroll = (ref: React.RefObject<HTMLElement>) => {
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
        handleClick={handleRefScroll}
      />
      <div className="pageWrapper">
        <h5 ref={tortillaRef} style={{ marginBottom: "20px" }}>
          Tortilla
        </h5>
        <div className="optionSection">
          {tortillaItems.map((item) => {
            return (
              <OptionCard
                id={item.id}
                imageUrl={item.imageUrl}
                saleItem={item.saleItem}
                onClick={() => handleTortillaSelect(item.saleItem)}
                isActive={tortillaOption === item.saleItem}
              />
            );
          })}
        </div>
        <h5 ref={proteinRef} style={{ marginBottom: "20px" }}>
          PROTEIN
        </h5>
        <div className="optionSection">
          {proteinItems.map((item) => {
            return (
              <OptionCard
                id={item.id}
                imageUrl={item.imageUrl}
                saleItem={item.saleItem}
                isActive={proteinOption === item.saleItem}
                onClick={() => handleProteinSelect(item.saleItem)}
              />
            );
          })}
        </div>
        <h5 ref={riceRef} style={{ marginBottom: "20px" }}>
          RICE
        </h5>
        <div className="optionSection">
          {riceItems.map((item) => {
            return (
              <OptionCard
                id={item.id}
                imageUrl={item.imageUrl}
                saleItem={item.saleItem}
                isActive={riceOption === item.saleItem}
                onClick={() => handleRiceSelect(item.saleItem)}
              />
            );
          })}
        </div>
        <h5 ref={beansRef} style={{ marginBottom: "20px" }}>
          BEANS
        </h5>
        <div className="optionSection">
          {beansItems.map((item) => {
            return (
              <OptionCard
                id={item.id}
                imageUrl={item.imageUrl}
                saleItem={item.saleItem}
                isActive={beansOption === item.saleItem}
                onClick={() => handleBeansSelect(item.saleItem)}
              />
            );
          })}
        </div>
        <h5 ref={sauceRef} style={{ marginBottom: "20px" }}>
          SAUCE
        </h5>
        <div className="optionSection">
          {sauceItems.map((item) => {
            return (
              <OptionCard
                id={item.id}
                imageUrl={item.imageUrl}
                saleItem={item.saleItem}
                isActive={sauceOption === item.saleItem}
                onClick={() => handleSauceSelect(item.saleItem)}
              />
            );
          })}
        </div>
        <h5 ref={styleRef} style={{ marginBottom: "20px" }}>
          ENCHILADA STYLE
        </h5>
        <div className="optionSection">
          {enchiladaItems.map((item) => {
            return (
              <OptionCard
                id={item.id}
                imageUrl={item.imageUrl}
                saleItem={item.saleItem}
                isActive={enchiladaOption === item.saleItem}
                onClick={() => handleEchiladaSelect(item.saleItem)}
              />
            );
          })}
        </div>
        <SideBar
          orderStep={orderStep}
          tortillaOption={tortillaOption}
          proteinOption={proteinOption}
          riceOption={riceOption}
          beansOption={beansOption}
          sauceOption={sauceOption}
          enchiladaOption={enchiladaOption}
        />
      </div>
    </div>
  );
};

export { CreateOrderPage };
