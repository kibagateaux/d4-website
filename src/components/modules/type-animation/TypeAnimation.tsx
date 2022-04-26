import ReactTypingEffect from "react-typing-effect";

interface TypeAnimationProps {
  text: string[];
  speed?: number;
  eraseSpeed?: number;
  eraseDelay?: number;
  typingDelay?: number;
}

export const TypeAnimation = ({
  text,
  speed = 100,
  eraseSpeed = 100,
  eraseDelay = 2000,
  typingDelay = 100,
}: TypeAnimationProps) => {
  return (
    <ReactTypingEffect
      text={text}
      speed={speed}
      eraseSpeed={eraseSpeed}
      eraseDelay={eraseDelay}
      typingDelay={typingDelay}
    />
  );
};
