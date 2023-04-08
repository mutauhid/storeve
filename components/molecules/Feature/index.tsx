import Image from "next/image";
import Link from "next/link";

interface FeatureProps {
  image:
    | "Thumbnail-1"
    | "Thumbnail-2"
    | "Thumbnail-3"
    | "Thumbnail-4"
    | "Thumbnail-5";
  title: string;
  category: string;
}

const ListGames = (props: FeatureProps) => {
  const { image, title, category } = props;
  return (
    <>
      <div className="featured-game-card position-relative">
        <Link href="/detail" legacyBehavior>
          <a>
            <div className="blur-sharp">
              <Image
                className="thumbnail"
                src={`/img/${image}.png`}
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
