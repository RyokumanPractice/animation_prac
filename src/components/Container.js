import styled from "styled-components";
import { fadeIn, fadeOut } from "./animations";

const Container = styled.div`
  ${(props) => {
    const animation = props.animation;

    if (animation?.fadeIn) return fadeIn(animation.fadeIn);
    if (animation?.fadeOut) return fadeOut(animation.fadeOut);
  }};

  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export default Container;
