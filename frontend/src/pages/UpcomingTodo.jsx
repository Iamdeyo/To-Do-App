import Todos from '../components/Todos';
import { useGetUpcomingTodoQuery } from '../redux/slices/todoApiSlice';

const UpcomingTodo = () => {
  const { data, isLoading, isError } = useGetUpcomingTodoQuery();

  if (isLoading) {
    return <h1>Loading........</h1>;
  }
  return (
    <>
      <Todos data={data} />
    </>
  );
};

export default UpcomingTodo;
