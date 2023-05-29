import Todos from '../components/Todos';
import { useGetTodayTodoQuery } from '../redux/slices/todoApiSlice';

const TodayTodo = () => {
  const { data, isLoading, isError } = useGetTodayTodoQuery();

  if (isLoading) {
    return <h1>Loading........</h1>;
  }
  return (
    <>
      <Todos data={data} />
    </>
  );
};

export default TodayTodo;
