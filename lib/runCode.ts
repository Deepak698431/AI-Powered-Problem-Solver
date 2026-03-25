export async function runCode(code: string, language: string, input: any) {
  try {
    const userFunc = eval(`(${code})`);
    const result = userFunc(...Object.values(input));
    return String(result);
  } catch (error: any) {
    return "Error: " + error.message;
  }
}