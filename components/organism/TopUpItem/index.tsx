interface TopupProps {
  type: "mobile" | "desktop";
  data: {
    name: string;
    thumbnail: string;
    category: {
      name: string;
    };
  };
}
const ROOT_IMG = process.env.NEXT_PUBLIC_IMG;

const TopupItem = (props: TopupProps) => {
  const { type, data } = props;
  if (type === "desktop") {
    return (
      <>
        <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">
          {data.name}
        </h2>
        <p className="text-sm color-palette-2 text-start mb-0">
          Category: {data.category.name}
        </p>
      </>
    );
  }
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-12 col-4">
          <img
            width="280"
            height="380"
            className="img-fluid"
            alt=""
            src={`${ROOT_IMG}/${data.thumbnail}`}
          />
        </div>
        {/* <!-- Mobile: Game title --> */}
        <div className="col-md-12 col-8 d-md-none d-block">
          <div className="pb-50 d-md-block d-none">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">
              {data.name}
            </h2>
            <p className="text-lg color-palette-2 mb-0">
              Category: {data.category.name}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopupItem;
