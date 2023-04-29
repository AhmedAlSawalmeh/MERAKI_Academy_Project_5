
import React from "react";
import {
  Box,
  Heading,
  VStack,
  Text,
  Image,
  Grid,
  GridItem,
  Container,
} from "@chakra-ui/react";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Mousa Ibrahem",
      role: "Developer",
      imageUrl: "https://avatars.githubusercontent.com/u/121259768?v=4",
      bio: "",
    },
    {
      name: "Khalid Al-Hajj",
      role: "Developer",
      imageUrl: "https://avatars.githubusercontent.com/u/121284606?v=4",
      bio: "",
    },
    {
      name: "Ahmad Al-Sawalmeh",
      role: "Developer",
      imageUrl: "https://avatars.githubusercontent.com/u/121333515?v=4",
      bio: "",
    },
  ];

  return (
    <Box py={8} bg="gray.100">
      <Container maxW="container.xl">
        <VStack spacing={8} textAlign="center">
          <Heading as="h2" size="2xl">
            About Us
          </Heading>
          <VStack spacing={8} textAlign="left">
          <Text>Our story begins with a team of three individuals, each with a passion for creating purpose-driven and valuable websites. As we embarked on our coding bootcamp journey, we were assigned a group project that would challenge our abilities and bring our ideas to life.
          
            <br></br>
            During our brainstorming sessions, we discovered that we all shared a common experience: losing touch with friends from our school days. This realization struck a chord with each of us and inspired the idea for our project.
            <br></br>
            We set out to build a platform that not only reconnected school alumni with their long-lost classmates but also offered a supportive and engaging community. Our vision was to create a space where users could reminisce about their school memories, share their personal and professional growth, and even rekindle old friendships.
            <br></br>
            As we progressed through the bootcamp, our technical skills and knowledge grew, enabling us to bring our idea closer to reality. We encountered challenges along the way, but our shared passion for the project fueled our determination to overcome them.
            <br></br>
            Today, we are proud to present our website that has the potential to reunite old friends and foster new connections. This journey has been a testament to the power of collaboration, passion, and purpose.
            </Text>
            </VStack>
          <Heading as="h3" size="xl">
            Meet Our Team
          </Heading>
          <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]} gap={8}>
            {teamMembers.map((member, index) => (
              <GridItem key={index}>
                <VStack alignItems="center">
                  <Image
                    borderRadius="full"
                    boxSize="150px"
                    src={member.imageUrl}
                    mb={4}
                  />
                  <Heading as="h4" size="md" mb={2}>
                    {member.name}
                  </Heading>
                  <Text fontSize="lg" mb={4}>
                    {member.role}
                  </Text>
                  <Text fontSize="md">{member.bio}</Text>
                </VStack>
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
};

export default AboutUs;