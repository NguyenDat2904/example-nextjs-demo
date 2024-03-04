import { ToastContainer } from "react-toastify";
import FormCreateUser from "../(components)/FormCreateUser";
import "react-toastify/dist/ReactToastify.css";
function CreateUser() {
  return (
    <div>
      <ToastContainer />
      <FormCreateUser />
    </div>
  );
}

export default CreateUser;
