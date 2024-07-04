import {Box, Container, Flex, Heading, HStack, Link} from "@chakra-ui/react";

function Header() {
    return (
        <Box
            as="header"
            w="full"
            py="8px"
            position="fixed"
            top="0"
            right="0"
            left="0"
            bg="white"
            zIndex="3"
            boxShadow={"0 0 10px 0 rgba(0,0,0,.1)"}
        >
            <Container w="full" mx="auto" maxW="1230px">
                <Flex justify="space-between" align="center">
                    <Heading>Shoeyy</Heading>
                    <HStack spacing="4">
                        <Link>Home</Link>
                        <Link>About</Link>
                        <Link>Contact</Link>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    )
}

export default Header