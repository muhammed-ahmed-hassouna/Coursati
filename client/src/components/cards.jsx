import { FiDelete, FiEdit, FiSave } from "react-icons/fi";

const CardComponent = ({ imageUrl, title, onUpdate, onDelete }) => {
  return (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-sm w-full h-2/3 object-cover p-4"
          src={imageUrl}
          alt={title}
        />
        <div className="p-5">
          <a href="#">
            <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <div className="flex space-x-4">
            <button
              onClick={onUpdate}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update
              <FiEdit className="ml-4" />
            </button>
            <button
              onClick={onDelete}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Delete
              <FiDelete className="ml-4" />

            </button>
          </div>
        </div>
      </div>
  );
};

export default CardComponent;
