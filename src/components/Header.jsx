import React from "react";
import Nav from "./Nav";
import usePointsStore from "../stores/usePointsStore";
import { motion, AnimatePresence } from "framer-motion";
import { GiTwoCoins } from "react-icons/gi";

function Header() {
  const points = usePointsStore((state) => state.points);

  return (
    <section className="header">
      <div className="header__left">
        <h1 className="header__title">Working title todos</h1>
        <Nav />
      </div>

      <div className="header__points">
        {Object.entries(points).map(([user, value]) => (
          <div key={user} className="header__points-item">
            <span>{user}:</span>
            <GiTwoCoins style={{ color: "#facc15", fontSize: "1.4rem" }} />
            <AnimatePresence mode="wait">
              <motion.span
                key={`${user}-${value}`} // 🔑 viktigt för att trigga animationen
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.25 }}
              >
                {value}p
              </motion.span>
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Header;
