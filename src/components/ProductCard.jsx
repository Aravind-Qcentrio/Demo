import {
Card,
CardBody,
Image,
Heading,
Text,
Stack,
Button,
HStack,
Badge,
} from "@chakra-ui/react";


export default function ProductCard({ product }) {
return (
<Card borderRadius="2xl" overflow="hidden" _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }} transition="all .2s ease-in-out">
<Image src={product.image} alt={product.title} h={48} w="100%" objectFit="cover" />
<CardBody>
<Stack spacing={3}>
<HStack justify="space-between" align="start">
<Heading size="md">{product.title}</Heading>
{product.badge && <Badge colorScheme="purple">{product.badge}</Badge>}
</HStack>
<Text noOfLines={2} color="gray.500">{product.description}</Text>
<HStack justify="space-between">
<Text fontWeight="bold" fontSize="lg">{product.price}</Text>
<HStack>
<Button size="sm" variant="outline">Apply Now</Button>
<Button size="sm" colorScheme="brand">Learn More</Button>
</HStack>
</HStack>
</Stack>
</CardBody>
</Card>
);
}