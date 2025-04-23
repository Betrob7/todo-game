import React from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="home-page">
      <Header />

      <motion.div
        className="home-page__intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1>Välkommen!</h1>
        <p>Här samlar du poäng genom att slutföra sysslor 💪</p>
        <p>
          Gå till <Link to="/todopage">Uppdrag</Link> för att börja – eller besök <Link to="/shop">Shoppen</Link> för att byta poäng mot
          belöningar 🎁
        </p>
      </motion.div>
    </section>
  );
}

export default HomePage;
