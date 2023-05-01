import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useState } from "react";

function AddTodo({ addTodos }) {
  const [content, setContent] = useState("");
  const toast = useToast();

  function handleSubmit(e) {
    e.preventDefault();
    if (!content) {
      toast({
        title: "No content",
        status: "error",
        duration: "2000",
        isClosable: true,
      });
      return;
    }

    const todo = {
      id: nanoid(),
      body: content,
    };
    addTodos(todo);
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="input your task here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="pink" px="8" type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
