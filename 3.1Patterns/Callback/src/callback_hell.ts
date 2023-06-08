import { readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = (str: string): string =>
  str.split("").reverse().join("");

async function processFiles(): Promise<void> {
  try {
    const files = await readdir(inbox);
    for (const file of files) {
      const data = await readFile(join(inbox, file), "utf8");
      await writeFile(join(outbox, file), reverseText(data));
      console.log(`${file} was successfully saved in the outbox!`);
    }
  } catch (error: any) {
    console.log("Error:", error.message);
  }
}

processFiles();

 export default processFiles;