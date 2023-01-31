import { NavBarStyled, Input, Logo } from "../styles/NavBarStyled";
import LogoImg from "../assets/logo-star-wars.png";
import { MagnifyingGlass } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function NavBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();




  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <NavBarStyled>
      <Link to="/">
        <Logo>
          <img alt="logo star wars" src={LogoImg} />
        </Logo>
      </Link>
      <Input>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite sua pesquisa.."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button type="submit">
            <MagnifyingGlass size={25} color="black" />
          </button>
        </form>
      </Input>
    </NavBarStyled>
  );
}
