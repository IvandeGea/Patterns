import processFiles from "../src/callback_hell";
import { readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";
import { jest } from "@jest/globals";
import fs from "fs";

jest.mock("fs/promises");

describe("File Processing", () => {
  const inbox = join(__dirname, "../src/inbox");
  const outbox = join(__dirname, "../src/outbox");
  const file1Path = join(inbox, "file1.txt");

  beforeAll(() => {
    (readdir as jest.Mocked<typeof readdir>).mockResolvedValue([
      { name: "file1.txt", isFile: () => true } as fs.Dirent,
    ]);
    (readFile as jest.Mocked<typeof readFile>).mockResolvedValue("Hello, world!");
    (writeFile as jest.Mocked<typeof writeFile>).mockResolvedValue(undefined);
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  test("Process file successfully", async () => {
    await processFiles();

    expect(readdir).toHaveBeenCalledWith(inbox);
    expect(readFile).toHaveBeenCalledWith(file1Path, "utf8");
    expect(writeFile).toHaveBeenCalledWith(join(outbox, "file1.txt"), "!dlrow ,olleH");
    expect(console.log).toHaveBeenCalledWith("file1.txt was successfully saved in the outbox!");
  });

  test("Handles error during file processing", async () => {
    const errorMessage = "File read error";
    (readFile as jest.MockedFunction<typeof readFile>).mockRejectedValueOnce(
      new Error(errorMessage)
    );

    await processFiles();

    expect(readdir).toHaveBeenCalledWith(inbox);
    expect(readFile).toHaveBeenCalledWith(file1Path, "utf8");
    expect(console.log).toHaveBeenCalledWith("Error:", errorMessage);
    expect(writeFile).not.toHaveBeenCalled();
    expect(console.log).not.toHaveBeenCalledWith(
      "file1.txt was successfully saved in the outbox!"
    );
  });
});
