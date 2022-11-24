import { File, Container } from "./components";
import styled from "styled-components";
import { useState } from "react";

const HeadContainer = styled(Container)`
  background-color: ${(props) => props.color};
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  z-index: -100;
`;

function App() {
  const animation1 = { fadeIn: { duration: 1, delay: 1 } };
  const animation2 = { fadeIn: { duration: 1, delay: 0.5 } };
  const animation3 = { fadeIn: { duration: 1, delay: 0 } };
  const [open, setOpen] = useState(false);
  const onClick = () => setOpen(!open);

  return (
    <HeadContainer color="bisque">
      <button onClick={onClick}>open It!</button>
      <File deg="-5" fileColor="1" coordinate={{ X: "32vw", Y: "20vh" }} animation={animation1} />
      <File deg="4" fileColor="2" coordinate={{ X: "64vw", Y: "16vh" }} animation={animation2} />
      <File open={open} animation={animation3} />
    </HeadContainer>
  );
}

export default App;
