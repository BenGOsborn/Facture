export function getExtension(fileName: string) {
    const split = fileName.split(".");
    return split[split.length - 1];
}
