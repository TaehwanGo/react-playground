export function firstTextCapitalizeAll(str: string) {
  return str
    .toLowerCase()
    .replace(/(?:^|\s)\S/g, (a: string) => a.toUpperCase());
}

export function print(str: string) {
  console.log(str);
  return str;
}
