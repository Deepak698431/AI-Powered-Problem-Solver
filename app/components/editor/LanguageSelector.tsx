"use client";

import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { LANGUAGE_VERSIONS } from "./constants"; 

export type Language = "javascript" | "typescript" | "python" | "java" | "csharp" | "php";

const languages = Object.entries(LANGUAGE_VERSIONS) as [Language, string][];

const ACTIVE_COLOR = "blue.400";

interface LanguageSelectorProps {
  language: Language;
  onSelect: (lang: Language) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, onSelect }) => {
  return (
    <Box ml={2} mb={4}>
      <Text mb={2} fontSize="lg" color="white" className="mt-2">
        Language:
      </Text>

      {/* This is the correct v2 structure */}
      <Menu isLazy>
        <MenuButton 
          as={Button} 
          variant="outline" 
          size="sm"
          color="white"
          _hover={{ bg: "gray.700" }}
          _active={{ bg: "gray.800" }}
        >
          {language}
        </MenuButton>
        <MenuList 
          bg="#110c1b" 
          borderColor="gray.700"
          zIndex={9999}
        >
          {languages.map(([lang, version]) => (
            <MenuItem
              key={lang}
              color={lang === language ? ACTIVE_COLOR : "white"}
              bg={lang === language ? "gray.900" : "transparent"}
              _hover={{
                bg: "gray.800",
                color: ACTIVE_COLOR,
              }}
              onClick={() => onSelect(lang)}
            >
              {lang}
              <Text as="span" color="gray.600" fontSize="xs" ml={2}>
                ({version})
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;