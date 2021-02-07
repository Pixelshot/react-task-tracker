import Task from "./Task";
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    // Using React.Fragement(<> </>) causes color syntax to behave weirdly.
    // eg: export default Tasks at the bottom
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
