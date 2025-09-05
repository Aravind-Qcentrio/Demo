import { Box, Container, HStack, Link, Text } from "@chakra-ui/react";


export default function Footer() {
return (
<Box as="footer" borderTopWidth="1px" py={6}>
<Container maxW="7xl">
<HStack justify="space-between" flexWrap="wrap" gap={3}>
<Text>© {new Date().getFullYear()} ABC</Text>
<HStack spacing={4}>
<Link href="#">Privacy</Link>
<Link href="#">Terms</Link>
<Link href="#">Contact</Link>
</HStack>
</HStack>
</Container>
</Box>
);
}