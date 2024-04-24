import { ThreeDots } from "react-loader-spinner";

export const Loader = () => {
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#103931"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        position: "absolute",
        top: "50%",
        left: "50%",
        margin: "auto",
      }}
      wrapperClass=""
    />
  );
};

export default Loader;
