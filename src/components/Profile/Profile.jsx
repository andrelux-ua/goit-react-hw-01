import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profileContainer}>
      <div className={css.profile}>
        <img src={image} className={css.avatar} alt={name} />
        <p className={css.user}>{name}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userAddress}>{location}</p>
      </div>

      <ul className={css.profileStats}>
        <li className={css.statsList}>
          <span className={css.rating}>Followers</span>
          <span className={css.indicator}>{stats.followers}</span>
        </li>
        <li className={css.statsList}>
          <span className={css.rating}>Views</span>
          <span className={css.indicator}>{stats.views}</span>
        </li>
        <li className={css.statsList}>
          <span className={css.rating}>Likes</span>
          <span className={css.indicator}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
