import React from "react";
import { Box, Container, Flex, Heading, Text, VStack, Input, Textarea, Button, Link, Image } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" align="center" m="auto" minH="100vh">
        {/* Navigation Bar */}
        <Flex as="nav" w="full" padding={4} bg="gray.800" color="white" justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">
            John Doe
          </Heading>
          <Flex>
            <Link href="#about" p={2}>
              About
            </Link>
            <Link href="#contact" p={2}>
              Contact
            </Link>
          </Flex>
        </Flex>

        {/* Hero Section */}
        <Flex flex="1" direction="column" align="center" justify="center" bg="gray.100" w="full" p={10}>
          <Heading as="h2" size="2xl" mb={4}>
            Welcome to My Website!
          </Heading>
          <Text fontSize="xl">I'm a software developer, writer, and lifelong learner.</Text>
          <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTQ2NjQ1NDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="150px" alt="John Doe" mt={4} />
        </Flex>

        {/* About Section */}
        <VStack spacing={4} p={10} id="about">
          <Heading as="h3" size="xl">
            About Me
          </Heading>
          <Text>I have over 10 years of experience in software development, specializing in web technologies. I love to share my knowledge through blogging and speaking at conferences.</Text>
        </VStack>

        {/* Contact Section */}
        <Flex direction="column" align="center" p={10} bg="gray.200" w="full" id="contact">
          <Heading as="h3" size="xl" mb={4}>
            Contact Me
          </Heading>
          <VStack spacing={3} w="full" maxW="md">
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button colorScheme="blue">Send Message</Button>
          </VStack>
          <Flex mt={4}>
            <Link href="https://github.com" isExternal>
              <FaGithub size="2em" />
            </Link>
            <Link href="https://linkedin.com" isExternal ml={4}>
              <FaLinkedin size="2em" />
            </Link>
            <Link href="mailto:example@example.com" ml={4}>
              <FaEnvelope size="2em" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;
