import Button from "@/components/Button";

const App = () => {
  return (
    <main className="min-h-screen p-4">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-neutral-700">Task Management</h1>
        <Button>Add Task</Button>
      </div>
    </main>
  );
};

export default App;
