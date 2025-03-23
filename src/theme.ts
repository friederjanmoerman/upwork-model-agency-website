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
      fontSize: "70px",
      fontWeight: 800,
    },
    h3: {
      fontSize: "40px",
      fontWeight: 800,
    },
    body1: {
      fontSize: "18px",
      fontFamily: "Inter, Arial, sans-serif",
      [`@media (max-width:1200px)`]: {
        fontSize: "14px",
      },
    },
  },
})

export default theme
