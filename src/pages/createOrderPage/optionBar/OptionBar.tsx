import "./OptionBar.scss";

interface OptionBarProps {
  handleClick: (ref: any) => any;
  tortillaRef: any;
  proteinRef: any;
  riceRef: any;
  styleRef: any;
  beansRef: any;
  sauceRef: React.RefObject<HTMLElement>;
}
const OptionBar: React.FC<OptionBarProps> = (props) => {
  return (
    <div className="optionBar">
      <h4
        className={`refLink`}
        onClick={() => props.handleClick(props.tortillaRef)}
      >
        TORTILLA
      </h4>
      <h4
        className="refLink"
        onClick={() => props.handleClick(props.proteinRef)}
      >
        PROTEIN
      </h4>
      <h4 className="refLink" onClick={() => props.handleClick(props.riceRef)}>
        RICE
      </h4>
      <h4 className="refLink" onClick={() => props.handleClick(props.beansRef)}>
        BEANS
      </h4>
      <h4
        className={`${props.sauceRef.current ? "active" : "refLink"}`}
        onClick={() => props.handleClick(props.sauceRef)}
      >
        SAUCE
      </h4>
      <h4 className="refLink" onClick={() => props.handleClick(props.styleRef)}>
        ENCHILADA STYLE
      </h4>
      <h4 className="refLink" onClick={() => props.handleClick}>
        CUSTOMIZE FURTHER
      </h4>
    </div>
  );
};

export { OptionBar };
