import styles from "../styles";
async function getSongs() {
  const res = await fetch('https://itunes.apple.com/search?term=radiohead');

  return res.json();
}

export const Songs = async () => {
    const data = await getSongs();

    console.log(data);

    return <section className={`${styles.paddings} text-white relative z-10`}>
      <h2 className="text-white">{data}</h2>
      </section>;
}