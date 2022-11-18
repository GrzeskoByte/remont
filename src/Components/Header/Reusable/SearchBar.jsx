import { VStack, Box, Divider, Heading, Input, HStack, SearchIcon, Button } from "native-base";

const SearchBar = ({ placeholder, title }) => {
  return (
    <VStack
      my="4"
      space={5}
      w="100%"
      divider={
        <Box px="2">
          <Divider />
        </Box>
      }
    >
      <VStack w="100%" space={5} alignSelf="center">
        <Heading fontSize="lg">{title}</Heading>
        <HStack>
          <Input placeholder={placeholder} width="100%" borderRadius="4" py="3" px="1" fontSize="14" InputRightElement={<SearchIcon m="2" mr="3" size="6" color="gray.400" />} />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default SearchBar;
