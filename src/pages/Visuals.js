import React from "react";
// Animations
import { motion } from "framer-motion";
// our animation
import { pageAnimation } from "../Animation";

function Visuals() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <iframe
        title="a"
        width="430"
        height="260"
        src="https://thingspeak.com/channels/1420114/charts/1?bgcolor=%23ffffff&color=%23000&dynamic=true&results=60&type=line&update=15"
      ></iframe>
      <iframe
        title="b"
        width="430"
        height="260"
        src="https://thingspeak.com/channels/1420114/charts/2?bgcolor=%23ffffff&color=%23000&dynamic=true&results=60&type=line&update=15"
      ></iframe>
      <iframe
        title="c"
        width="430"
        height="260"
        src="https://thingspeak.com/channels/1420114/charts/3?bgcolor=%23ffffff&color=%23000&dynamic=true&results=60&type=line"
      ></iframe>
      <iframe
        title="d"
        width="430"
        height="260"
        src="https://thingspeak.com/channels/1420114/charts/4?bgcolor=%23ffffff&color=%23000&dynamic=true&results=60&type=line"
      ></iframe>
      <iframe
        title="e"
        width="430"
        height="260"
        src="https://thingspeak.com/channels/1420114/charts/5?bgcolor=%23ffffff&color=%23000&dynamic=true&results=60&type=line&update=15"
      ></iframe>
      <iframe
        title="f"
        width="430"
        height="260"
        src="https://thingspeak.com/channels/1420114/charts/6?bgcolor=%23ffffff&color=%23000&dynamic=true&results=60&type=line&update=15"
      ></iframe>
      <iframe
        title="g"
        width="430"
        height="260"
        src="https://thingspeak.com/channels/1420114/charts/7?bgcolor=%23ffffff&color=%23000&dynamic=true&results=60&type=line&update=15"
      ></iframe>
      <iframe
        title="h"
        width="430"
        height="260"
        src="https://thingspeak.com/channels/1420114/charts/8?bgcolor=%23ffffff&color=%23000&dynamic=true&results=60&type=line&update=15"
      ></iframe>
    </motion.div>
  );
}
export default Visuals;
