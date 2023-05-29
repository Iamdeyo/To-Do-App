import Todo from './Todo';

const Todos = ({ data }) => {
  return (
    <div className="mb-2">
      {data?.data.map((dt) => (
        <Todo key={dt._id} data={dt} />
      ))}
    </div>
  );
};

export default Todos;
