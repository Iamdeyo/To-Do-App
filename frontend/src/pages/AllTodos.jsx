import Todos from '../components/Todos';
import { useGetAllTodoQuery } from '../redux/slices/todoApiSlice';

const AllTodos = () => {
  const { data, isLoading, isError } = useGetAllTodoQuery();

  if (isLoading) {
    return <h1>Loading........</h1>;
  }
  return (
    <>
      <Todos data={data} />
    </>
  );
};

export default AllTodos;
