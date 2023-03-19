import { HomeCarousel } from "../../components/homeCarousel/HomeCarousel";
import { fakeNewsData } from "../../components/newsCard/fakeNewsData";
import { NewsCard } from "../../components/newsCard/NewsCard";
import "./HomePage.scss";

const HomePage: React.FC = () => {
  return (
    <div className="homePage">
      <div style={{ marginBottom: "40px" }}>
        <HomeCarousel />
      </div>
      <div className="test">
        {fakeNewsData.map((item) => {
          return (
            <NewsCard
              id={item.id}
              imageUrl={item.imageUrl}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
