export const parseArgs = () => {
  const values = process.argv
    .slice(2)
    .map((item, i) => (i % 2 ? item : item.slice(2)))
    .reduce(
      (acc, item, i) =>
        i % 2 === 0
          ? acc
            ? `${acc}, ${item}`
            : `${item}`
          : `${acc} is ${item}`,
      ''
    );

  console.log(values);
};

parseArgs();
