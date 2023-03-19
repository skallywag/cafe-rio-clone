import "./NewsCard.scss";
import { Button } from "../../shared/button/Button";
import { ReactNode } from "react";
interface NewsCardProps {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  button?: ReactNode;
}
const NewsCard: React.FC<NewsCardProps> = (props) => {
  return (
    <div className="newsCard">
      <img width={"100%"} height="auto" src={props.imageUrl} />

      <div className="content">
        <h1 style={{ marginBottom: "16px" }}>{props.title}</h1>
        <h2>{props.description}</h2>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={() => {}}
            text={"Order"}
            className={"primary"}
            type={"button"}
          />
        </div>
      </div>
    </div>
  );
};

export { NewsCard };
