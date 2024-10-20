import { Button, ButtonGroup, Link } from "@chakra-ui/react";
import { FaPencilAlt } from "react-icons/fa";
import "../styles/Navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [wallet, setWallet] = useState(false);
  return (
    <div className="navbar">
      <div>
        <Link className="title" href={"/"} style={{ fontSize: "25px" }}>
          Crowdfund
        </Link>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <NavLink to={"/create"}>
          <Button className="create_campaign" colorScheme="blue">
            <FaPencilAlt />
            Create Campaign
          </Button>
        </NavLink>
        {wallet ? (
          <h1>182311...</h1>
        ) : (
          <>
            <Button className="connect_wallet" colorScheme="blue">
              <FaPencilAlt />
              Connect Wallet
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
