const fsPrimises = require(`fs`).promises;
const path = require(`path`);

(async () => {
  const folderPath = path.join(__dirname);
  const allFiles = await fsPrimises.readdir(folderPath);
  const txtFiles = allFiles.filter(arquivo => arquivo.endsWith(`.txt`))
  const readPromises = txtFiles.map(txtFile => {
    const filePath = path.join(__dirname, txtFile);
    return fsPrimises.readFile(filePath, `utf-8`);
  });

  const contents = await Promise.all(readPromises);
  console.log(`Todo conteúdo: \n`, contents.join(`\n`), `\n`);

  const ResolveuPrimeiro = await Promise.any(readPromises);
  console.log(`A primeira que resolveu foi: ${ResolveuPrimeiro}`)
}) ();