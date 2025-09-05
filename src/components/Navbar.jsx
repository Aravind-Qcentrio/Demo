import {
Box,
Flex,
HStack,
IconButton,
Button,
Link,
useColorMode,
useColorModeValue,
VisuallyHidden,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";


const links = [
{ label: "Banking", href: "#" },
{ label: "Healthcare", href: "#healthcare" },
// { label: "Pricing", href: "#pricing" },
{ label: "Finance", href: "#finance" },
];


export default function Navbar() {
const { colorMode, toggleColorMode } = useColorMode();
const bg = useColorModeValue("white", "gray.800");
const border = useColorModeValue("gray.100", "whiteAlpha.200");


return (
<Box as="header" bg={bg} borderBottomWidth="1px" borderColor={border} position="sticky" top={0} zIndex={10}>
<Flex maxW="7xl" mx="auto" h={16} px={4} align="center" justify="space-between">
<HStack spacing={6}>
<Link href="#" fontWeight="bold" fontSize="xl">
ABC<span style={{ color: "var(--chakra-colors-brand-500)" }}>Page</span>
</Link>
<HStack spacing={4} display={{ base: "none", md: "flex" }}>
{links.map((l) => (
<Link key={l.label} href={l.href} _hover={{ color: "brand.500" }}>
{l.label}
</Link>
))}
</HStack>
</HStack>


<HStack spacing={3}>
<Button variant="outline" size="sm">
Sign in
</Button>
<Button colorScheme="brand" size="sm">
Sign up
</Button>
<IconButton
aria-label="Toggle color mode"
onClick={toggleColorMode}
icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
variant="ghost"
/>
<VisuallyHidden>Toggle {colorMode === "light" ? "Dark" : "Light"} mode</VisuallyHidden>
</HStack>
</Flex>
</Box>
);
}