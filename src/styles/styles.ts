import { RETRO_MONO, RETRO_HEADING } from "./fonts";

export const retroBtnSx = {
  borderRadius: 0,
  fontFamily: RETRO_MONO,
  fontWeight: 900,
  fontSize: 14,
  textTransform: "uppercase",
  letterSpacing: 1,
  px: 3,
  py: 1,
  boxShadow: "3px 3px 0 #000",
  transition: "transform 80ms steps(2), box-shadow 80ms steps(2)",
  "&:active": {
    transform: "translate(2px, 2px)",
    boxShadow: "1px 1px 0 #000",
  },
};

export const titleBarSx = {
  bgcolor: "#000080",
  color: "#ffff00",
  px: 2,
  py: 0.75,
  borderBottom: "2px solid #ffff00",
};

export const retroCardSx = {
  borderRadius: 0,
  overflow: "visible",
  border: "3px ridge #ffff00",
  boxShadow: "6px 6px 0 rgba(0,0,0,0.85)",
  backgroundColor: "#000080",
  backgroundImage: "url(/stars.svg)",
  fontFamily: RETRO_MONO,
};

export const retroHeadingSx = {
  fontFamily: RETRO_HEADING,
  textTransform: "uppercase",
  color: "#ff00ff",
  textShadow: "1px 1px 0 #ffffff, 2px 2px 0 #00ffff, 3px 3px 0 #000000",
  letterSpacing: "0.5px",
  wordBreak: "break-word",
  m: 0,
};