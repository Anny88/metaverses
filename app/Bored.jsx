import styles from '../styles';
async function getData() {
  const res = await fetch('https://www.boredapi.com/api/activity');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export const Bored = async () => {
  const data = await getData();

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <h2 className="text-white">{data?.activity}</h2>
    </section>
  );
};
