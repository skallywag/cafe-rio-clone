import "./NewsCard.scss";
import { Button } from "../../shared/button/Button";
interface NewsCardProps {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}
const NewsCard: React.FC<NewsCardProps> = (props) => {
  return (
    <div className="newsCard">
      <img width={"100%"} height="auto" src={props.imageUrl} />

      <div className="content">
        <h1 style={{ marginBottom: "16px" }}>{props.title}</h1>
        <h3>{props.description}</h3>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={() => {}} text={"Order"} type={"button"} />
        </div>
      </div>
    </div>
  );
};

export { NewsCard };
