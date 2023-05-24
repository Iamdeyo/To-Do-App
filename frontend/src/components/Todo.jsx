import { FaCheck } from 'react-icons/fa';
import { FiTrash, FiEdit3 } from 'react-icons/fi';
const Todo = () => {
  return (
    <div>
      <div className="border-b border-b-gray-200 py-2 flex gap-1 flex-col">
        <div className="flex gap-2">
          <div>
            <label
              htmlFor="completed"
              className="rounded-full h-[18px] w-[18px] border-green-600 border flex items-center justify-center"
            >
              <input
                type="checkbox"
                id="completed"
                className="peer absolute opacity-0 -left-[1000px] top-0"
              />
              <FaCheck
                size={10}
                className="hidden peer-checked:block ease-in-out duration-150 text-green-600"
              />
            </label>
          </div>
          <div className="flex flex-col gap-1 group">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium">Taskkkk</p>
              <div className="ml-auto text-textGrey hover:text-blue-700 hidden group-hover:block">
                <FiEdit3 />
              </div>
              <div className="text-textGrey hover:text-red-600 hidden group-hover:block">
                <FiTrash />
              </div>
            </div>
            <p className="text-xs">
              Description of taskkk Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsa, placeat atque. Dignissimos eveniet autem,
              exercitationem provident voluptatum voluptate maxime
            </p>
          </div>
        </div>
        <div className="self-end ml-auto text-xs font-light">date</div>
      </div>
    </div>
  );
};

export default Todo;
