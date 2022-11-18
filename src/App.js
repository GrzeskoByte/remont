import "./App.css";
import { NativeBaseProvider, Stack, Center, VStack } from "native-base";

import Header from "./Components/Header/Header";
import FoundedItemCard from "./Components/Header/Reusable/FoundedItemCard";

function App() {
  return (
    <NativeBaseProvider>
      <Stack mb="2.5" mt="1.5" direction="column" space={3}>
        <Center>
          <Header />
          <VStack flex={1}>
            <Center>
              <FoundedItemCard />
              <FoundedItemCard />
              <FoundedItemCard />
            </Center>
          </VStack>
        </Center>
      </Stack>
    </NativeBaseProvider>
  );
}

export default App;
