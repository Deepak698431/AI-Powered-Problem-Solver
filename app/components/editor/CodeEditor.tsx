"use client";

import React, { useRef, useState } from "react";
import { Box, HStack, StackProps } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import Output from "./Output";
import { OnMount } from "@monaco-editor/react";
import { string } from "zod";

// 1️⃣ Define allowed languages
export type Language = "javascript" | "typescript" | "python" | "java" | "csharp" | "php";

// 2️⃣ Code snippets
export const CODE_SNIPPETS: Record<Language, string> = {
  javascript: `
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alex");
`,
  typescript: `
type Params = {
  name: string;
}

function greet(data: Params) {
  console.log("Hello, " + data.name + "!");
}

greet({ name: "Alex" });
`,
  python: `
def greet(name):
  print("Hello, " + name + "!")

greet("Alex")
`,
  java: `
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
`,
  csharp: `
using System;

namespace HelloWorld
{
  class Hello { 
    static void Main(string[] args) {
      Console.WriteLine("Hello World in C#");
    }
  }
}
`,
  php: `
  <?php
// A basic PHP console script starts with the PHP opening tag

$user_name = "World";

// Use echo to print a string to the console
echo "Hello, " . $user_name . "!\n";

// You can also use print, it has a return value of 1 and can be used in expressions
print "This is another line of output.\n";
?>
`,
};

// 3️⃣ Props for CodeEditor
interface CodeEditorProps {
  language: Language;
  editorRef: React.RefObject<any>;
}


const CodeEditor: React.FC<CodeEditorProps> = () => {
  const editorRef = useRef<any>(null);
  const [value, setValue] = useState<string>("");
  const [language, setLanguage] = useState<Language>("javascript");

const onMount: OnMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (lang : Language) => {
    setLanguage(lang);
    setValue(CODE_SNIPPETS[lang]);
  };

  return (
    <Box>
      <HStack gap={4} alignItems="start">
        {/* Editor side */}
        <Box w="75%">
          <LanguageSelector language={language} onSelect={onSelect} />

          <Editor
            height="75vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            value={value}
            onMount={onMount}
            onChange={(val) => setValue(val!)}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
            }}
          />
        </Box>

        {/* Output side */}
        <Output editorRef={editorRef} language={language}  />
      </HStack>
    </Box>
  );
};

export default CodeEditor;