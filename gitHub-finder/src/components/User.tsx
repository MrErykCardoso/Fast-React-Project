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
      <div>
        <p className={classes.followers}>Seguidores:</p>
        <p>{followers}</p>
      </div>
      <div>
        <p className={classes.following}>Seguindo:</p>
        <p>{following}</p>
      </div>
      <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
    </div>
  );
};

export default User;
