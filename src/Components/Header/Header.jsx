import React from "react";

import { HStack, VStack, ThreeDotsIcon, SearchIcon, Button, Center, Circle } from "native-base";

import SearchBar from "./Reusable/SearchBar";

const Header = () => {
  return (
    <VStack w="80%">
      <SearchBar title="Wyszukaj swój dom ..." placeholder="Wyszukaj swój dom ..." />

      <VStack w="100%">
        <Center>
          <HStack>
            <Button leftIcon={<ThreeDotsIcon />} mr={5} colorScheme="darkBlue">
              Szukaj
            </Button>
            <Button leftIcon={<SearchIcon />} colorScheme="darkBlue">
              Settings
            </Button>
          </HStack>
        </Center>
      </VStack>
    </VStack>
  );
};

export default Header;
