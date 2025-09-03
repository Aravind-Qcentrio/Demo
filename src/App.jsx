import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import { products } from "./data/products";


export default function App() {
return (
<Box minH="100dvh" display="flex" flexDirection="column">
<Navbar />
<Hero />


<Container maxW="7xl" py={12} flex="1 0 auto">
<SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
{products.map((p) => (
<ProductCard key={p.id} product={p} />
))}
</SimpleGrid>
</Container>


<Footer />
</Box>
);
}