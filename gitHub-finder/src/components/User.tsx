import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import { userProps } from "../types/user";
import classes from "./User.module.css";

const User = ({
  location,
  login,
  avatar_url,
  followers,
  following,
}: userProps) => {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={classes.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div className={classes.status}>
        <div className={classes.stats}>
          <p>Seguidores:</p>
          <p>{followers}</p>
        </div>
        <div className={classes.divisor}></div>
        <div className={classes.stats}>
          <p>Seguindo:</p>
          <p>{following}</p>
        </div>
      </div>
      <Link className={classes.linkto} to={`https://github.com/${login}`}>
        Acessar perfil no GitHub
      </Link>
    </div>
  );
};

export default User;
