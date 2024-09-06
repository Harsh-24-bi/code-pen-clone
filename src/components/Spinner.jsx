
import { Triangle } from "react-loader-spinner";

function Spinner() {
  return (
    <Triangle
      visible={true}
      height="80"
      width="80"
      color="#f1e467"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}

export default Spinner;
