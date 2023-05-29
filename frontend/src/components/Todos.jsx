import { useState } from 'react';
import Todo from './Todo';

const Todos = ({ data }) => {
  const [edit, setEdit] = useState('');
  return (
    <div className="mb-2">
      {data?.data.map((dt) => (
        <Todo key={dt._id} data={dt} edit={edit} setEdit={setEdit} />
      ))}
    </div>
  );
};

export default Todos;
