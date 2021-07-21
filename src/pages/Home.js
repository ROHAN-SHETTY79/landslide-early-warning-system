import React from "react";
import Welcome from "../components/Welcome";
import Card from "../components/Card";
import Explaination from "../components/Explaination";
// Animations
import { motion } from "framer-motion";
// our animation
import { pageAnimation } from "../Animation";
function Home({ cardItem }) {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Welcome />
      <Card item={cardItem} />
      <Explaination />
    </motion.div>
  );
}

export default Home;
