export const parseEnv = () => {
  const rss = Object.keys(process.env).filter((item) =>
    item.startsWith('RSS_')
  );

  console.log(rss.map((item) => `${item}=${process.env[item]}`).join('; '));
};

parseEnv();
