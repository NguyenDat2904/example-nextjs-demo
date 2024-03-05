import { toast } from "react-toastify";
import { editUser } from "./action";

const ModalCustomUser = ({ isVisible, handleClose, user }) => {
  if (!isVisible) return null;

  const handleSubmit = (event) => {
    event.preventDefault(); // Ngăn chặn submit mặc định của form

    const formData = new FormData(event.target);

    // Gọi hàm action và truyền id của người dùng
    editUser(formData, user.id);
    handleClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] flex flex-col">
        <div className="text-white text-xl">
          <div className="bg-white px-3 py-4 rounded text-black">
            <h1 className="text-center text-xl font-medium	">
              Edit information of: {user.full_name}
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label
                  htmlFor="full_name"
                  className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
                >
                  Name
                </label>
                <input
                  name="full_name"
                  type="text"
                  id="full_name"
                  className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                  placeholder="Name"
                />
                <p className="mt-2 text-sm text-green-600 dark:text-green-500">
                  <span className="font-medium">Alright!</span> Username
                  available!
                </p>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
                >
                  Email
                </label>
                <input
                  name="email"
                  type="text"
                  id="email"
                  className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                  placeholder="Email"
                />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  <span className="font-medium">Oops!</span> Username already
                  taken!
                </p>
              </div>

              <button
                class="mt-5 me-3 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCustomUser;
