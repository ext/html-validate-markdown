import transform from "./transform";
import { transformFile } from "html-validate/build/transform/test-utils";

test("should extract html blocks from markdown files", () => {
    const result = transformFile(transform, "./test/markdown.md");
    expect(result).toHaveLength(2);

    expect(result[0].data).toMatchSnapshot();
    expect(result[0].filename).toEqual("./test/markdown.md");
    expect(result[0].line).toEqual(3);
    expect(result[0].column).toEqual(9);

    expect(result[1].data).toMatchSnapshot();
    expect(result[1].filename).toEqual("./test/markdown.md");
    expect(result[1].line).toEqual(9);
    expect(result[1].column).toEqual(9);
});

test("should extract html blocks from markdown files with multi line html", () => {
    const result = transformFile(transform, "./test/multiline.md");
    expect(result).toHaveLength(1);
});
