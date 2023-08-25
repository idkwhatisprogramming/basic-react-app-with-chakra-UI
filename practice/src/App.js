import { useEffect, useState } from "react";
import {
  Heading,
  Text,
  Button,
  Container,
  Center,
  Highlight,
  Mark,
} from "@chakra-ui/react";

function App() {
  const storageKeyName = "count";

  const retrieveCountValue = () =>
    Number(localStorage.getItem(storageKeyName) || 0);

  const [count, setCount] = useState(retrieveCountValue());

  const addNumber = (count) => {
    setCount(Number(count) + 1);
  };

  useEffect(() => {
    localStorage.setItem(storageKeyName, String(count));
  }, [count]);

  return (
    <div>
      <Container maxW={["full", "container.lg"]} mt={4} mb={4}>
        <Center>
          <Heading lineHeight="tall">
            <Highlight
              query="stranger"
              styles={{ px: "1", py: "1", rounded: "full", bg: "red.100" }}
            >
              Welcome Stranger! 🎉
            </Highlight>
          </Heading>
        </Center>

        <Center>
          <Text fontSize="md" fontStyle="italic">
            This is my beautiful React WebApp!
          </Text>
        </Center>
        <Center m={4}>
          <Mark
            bg="black"
            color="white"
            fontFamily="NewYork"
            fontSize="lg"
            fontWeight="bold"
            p={1}
          >
            Count is already {count} !
          </Mark>
        </Center>

        <Center>
          <Button
            size="md"
            height="48px"
            width="200px"
            border="2px"
            variant="solid"
            fontStyle="italic"
            onClick={() => addNumber(count)}
          >
            Count Me
          </Button>
        </Center>
      </Container>
    </div>
  );
}

export default App;
