import Image from "next/image";
import Link from "next/link";

interface FeatureProps {
  image: string;
  title: string;
  category: string;
  id: string;
}

const ListGames = (props: FeatureProps) => {
  const { image, title, category, id } = props;
  return (
    <>
      <div className="featured-game-card position-relative">
        <Link href={`detail/${id}`} legacyBehavior>
          <a>
            <div className="blur-sharp">
              <Image
                className="thumbnail"
                src={`http://localhost:3000/uploads/${image}`}
                width="205"
                height="270"
                alt=""
              />
            </div>
            <div className="cover position-absolute bottom-0 m-32">
              <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                <div className="game-icon mx-auto">
                  <Image
                    alt="feature"
                    src={"/icon/feature.svg"}
                    width={54}
                    height={36}
                  />
                </div>
                <div>
                  <p className="fw-semibold text-white text-xl m-0">{title}</p>
                  <p className="fw-light text-white m-0">{category}</p>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default ListGames;
