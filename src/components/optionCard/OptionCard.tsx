import "./OptionCard.scss";

interface OptionCardProps {
  id: number;
  imageUrl: string;
  saleItem: string;
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

      <h4 style={{ textAlign: "center" }}>{props.saleItem}</h4>
    </div>
  );
};
export { OptionCard };
