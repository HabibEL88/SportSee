import { redirect } from "react-router-dom";

const loader = async () => {
  return redirect("/user/12");
};

export default loader;
