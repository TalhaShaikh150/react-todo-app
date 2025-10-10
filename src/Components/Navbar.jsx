import React from "react";

export const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <div style={styles.logo}>MyBrand</div>

      {/* Links */}
      <ul style={styles.navLinks}>
        <li style={styles.link}>Home</li>
        <li style={styles.link}>About</li>
        <li style={styles.link}>Services</li>
        <li style={styles.link}>Contact</li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    background: "#111",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  link: {
    cursor: "pointer",
    transition: "color 0.3s",
  },
};
