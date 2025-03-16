import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#94754A",
    },
  },
  typography: {
    fontFamily: "Norse, Arial, sans-serif",
    h1: {
      fontSize: "290px",
      fontWeight: 100,
    },
    h2: {
      fontSize: "90px",
      fontWeight: 800,
    },
  },
})

export default theme
