import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#94754A",
    },
    secondary: {
      main: "#000000",
    },
  },
  typography: {
    fontFamily: "Norse, Arial, sans-serif",
    h1: {
      fontSize: "18.5vw",
      fontWeight: 100,
    },
    h2: {
      fontSize: "60px",
      fontWeight: 800,
      [`@media (max-width:1200px)`]: {
        fontSize: "25px",
      },
    },
    h3: {
      fontSize: "32px",
      fontWeight: 800,
      [`@media (max-width:1200px)`]: {
        fontSize: "20px",
      },
    },
    body1: {
      fontSize: "16px",
      fontFamily: "Inter, Arial, sans-serif",
      [`@media (max-width:1200px)`]: {
        fontSize: "14px",
      },
    },
  },
})

export default theme
