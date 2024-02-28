'use client'
import style from "./page.module.css";
import useNameAgeGenderCountry from "./components/useNameAgeGenderCountry";
const Home = () => {
  const {
    name,
    setName,
    age,
    gender,
    country,
    loading,
    error,
    handleSubmit
  } = useNameAgeGenderCountry();

  return (
    <main className={style.main}>
     <div className={style['blur-card']}>
     <h1 className={style['blur-card-content']}>Name Age Gender Country Guesser</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(name);
        }}>
           <label className={style['blur-card-content']}>
            Enter a name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={style['blur-card-input']}
            />
          </label>
          <button type="submit" disabled={loading} className={style['blur-card-button']}>
            {loading ? 'Loading...' : 'Guess'}
          </button>
        </form>
        {error && <p className={style['blur-card-content']}>{error}</p>}
        {age && <p className={style['blur-card-content-p']}>Guessed Age: {age}</p>}
        {gender && <p className={style['blur-card-content-p']}>Guessed Gender: {gender}</p>}
        {country && <p className={style['blur-card-content-p']}>Guessed Country: {country}</p>}
      </div>
    </main>
  );
};

export default Home;
