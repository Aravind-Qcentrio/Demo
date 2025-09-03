import {
Box,
Button,
Container,
Heading,
Stack,
Text,
useColorModeValue,
} from "@chakra-ui/react";


export default function Hero() {
const bg = useColorModeValue("gray.50", "gray.900");
return (
<Box as="section" bg={bg} py={{ base: 12, md: 20 }}>
<Container maxW="7xl">
<Stack direction={{ base: "column", md: "row" }} spacing={8} align="center">
<Box flex="1">
<Heading as="h1" size="2xl" lineHeight={1.2} mb={4}>
Launch faster with <Text as="span" color="brand.500">US...</Text>
</Heading>
<Text fontSize="lg" color={useColorModeValue("gray.600", "gray.300")}>
Description for website.
</Text>
<Stack direction={{ base: "column", sm: "row" }} spacing={4} mt={8}>
<Button colorScheme="brand" size="lg">Explore Products</Button>
<Button variant="outline" size="lg">Learn More</Button>
</Stack>
</Box>
<Box flex="1" display={{ base: "none", md: "block" }}>
{/* Replace with your hero image */}
<Box
h="260px"
bg={useColorModeValue("white", "gray.800")}
borderWidth="1px"
borderRadius="2xl"
boxShadow="md"
/>
</Box>
</Stack>
</Container>
</Box>
);
}