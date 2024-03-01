import React from "react";
import { Box, Button, Container, Heading, Input, Select, Stack, Textarea, useToast, VStack } from "@chakra-ui/react";
import { FaCloudUploadAlt, FaLanguage } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleVideoUpload = () => {
    // This is where the video uploading logic would go
    toast({
      title: "Video uploaded!",
      description: "We're processing your video for transcription.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleTranscription = () => {
    // This is where the transcription logic would go
    toast({
      title: "Transcription complete!",
      description: "The text has been successfully transcribed from your video.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleTranslation = () => {
    // This is where the translation logic would go
    toast({
      title: "Translation complete!",
      description: "Your text has been successfully translated.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading>Transcription and Translation Tool</Heading>

        <Box as="form" w="full">
          <Stack spacing={4}>
            <Button leftIcon={<FaCloudUploadAlt />} colorScheme="teal" onClick={handleVideoUpload}>
              Upload Video
            </Button>
            <Button colorScheme="green" onClick={handleTranscription}>
              Transcribe Video
            </Button>

            <Textarea placeholder="Transcribed text will appear here..." size="md" isReadOnly />

            <Select placeholder="Select Language" icon={<FaLanguage />} variant="filled">
              {/* Languages could be dynamically generated */}
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              {/* ...other languages */}
            </Select>

            <Button colorScheme="blue" onClick={handleTranslation}>
              Translate Text
            </Button>

            <Textarea placeholder="Translated text will appear here..." size="md" isReadOnly />
          </Stack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
