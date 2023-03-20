import "./OptionCard.scss";

interface OptionCardProps {
  imageUrl: string;
  title: string;
  onClick?: () => void;
  isSelected?: boolean;
  isActive?: boolean;
}

const OptionCard: React.FC<OptionCardProps> = (props) => {
  return (
    <div className="optionCard" onClick={props.onClick}>
      <img src={props.imageUrl} alt="tortilla" />
      {props.isActive && (
        <img src="https://www.caferio.com/svg/item-select.svg" />
      )}

      <h4 style={{ textAlign: "center" }}>{props.title}</h4>
    </div>
  );
};
export { OptionCard };
