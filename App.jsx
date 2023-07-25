import React, { createContext, useState } from "react";
import SideNavbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import About from "./components/about_me.jsx";
import Services from "./components/services.jsx";
import Portfolio from "./components/portfolio.jsx";
import Contact from "./components/contact_me.jsx";
import Footer from "./components/footer.jsx";
import Switch from "@mui/material/Switch";
import { WbSunny as SunIcon } from "@mui/icons-material";
import { FaMoon as MoonIcon } from "react-icons/fa";
import "./styles/styles.scss";

export const ThemeContext = createContext(null);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "dark",
      isButtonDisabled: false, // New state variable to track button disabled state
    };
  }

  toggleTheme = () => {
    if (this.state.isButtonDisabled) {
      return; // Return early if the button is already disabled
    }

    // Disable the button
    this.setState({ isButtonDisabled: true });

    this.setState((prevState) => ({
      theme: prevState.theme === "dark" ? "light" : "dark",
    }));

    // Enable the button after the transition completes (adjust the timeout value as needed)
    setTimeout(() => {
      this.setState({ isButtonDisabled: false });
    }, 500); // Wait for 1000ms (1 second) before re-enabling the button
  };

  render() {
    const { theme } = this.state;

    // Define the colors for the Sun and Moon icons
    const sunIconColor = "#ffd700";
    const moonIconColor = "#009000";

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme: this.toggleTheme }}>
        <div className={`switch ${theme === "dark" ? "dark" : "light"}`}>
          <Switch
            onChange={this.toggleTheme}
            checked={theme === "dark"}
            color="primary"
            icon={
              <SunIcon
                style={{
                  color: sunIconColor,
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  padding: "5px",
                  borderRadius: "10px",
                  width: "2rem",
                  height: "2rem",
                  margin: "-1px 0 0 8px",
                }}
                className="switch-icon"
              />
            }
            checkedIcon={
              <MoonIcon
                style={{
                  color: moonIconColor,
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  padding: "5px",
                  borderRadius: "10px",
                  fontSize: "2rem",
                  margin: "-1px 0 0 4px",
                }}
                className="switch-icon"
              />
            }
          />
        </div>

        <div className="App" id={theme}>
          <SideNavbar />
          <div className="main-content">
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
          </div>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
