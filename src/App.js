import { Heading, IconButton, VStack, useColorMode } from "@chakra-ui/react";
import ListTodo from "./components/ListTodo";
import AddTodo from "./components/AddTodo";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

function App() {
  const initialTodos = [
    {
      id: 1,
      body: "get bread",
    },
    {
      id: 2,
      body: "get butter",
    },
  ];

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function deleteTodos(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function addTodos(todo) {
    setTodos([...todos, todo]);
  }

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading
        mb="8"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        Todo Application
      </Heading>
      <ListTodo todos={todos} deleteTodos={deleteTodos} />;
      <AddTodo addTodos={addTodos} />
    </VStack>
  );
}

export default App;
