import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import Logo from "./image/bloglogo.png"
import Logo2 from "./image/blogicon.png"


export default function Header() {
  // const [username, setUsername] = useState(null);
  const { userInfo, setUserInfo } = useContext(UserContext);
  useEffect(() => {
    fetch(`https://blogify-server-beta.vercel.app/profile`, {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("https://blogify-server-beta.vercel.app/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <div className="logo1">
        <img src={Logo} alt="logo"></img>
        <Link to="/" className="logo">
          Blogify
        </Link>
      </div>

      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <Link onClick={logout}>Logout</Link>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
