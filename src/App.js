import React from "react";
import AppBarAndDrawer from "./AppBarAndDrawer/AppBarAndDrawer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Dashboard2 } from "./Recommendations/Dashboard2.js"
import { Dashboard } from "./Home View/Dashboard.js"
import { ThemeProvider } from "@material-ui/core/styles";
import { useTheme } from "./theme";
import { DataProvider } from "./Providers/DataProvider";
import People from "./ReduxTable/people";
import Driver from "./Members/Driver";
import Components from "./Components/Components";
import Settings from "./Settings/Settings";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./ReduxTable/peopleSlice";
import { Provider } from "react-redux";

export default function App() {
  const store = configureStore({
    reducer: {
      people: peopleReducer,
    },
  });
  const [currentTheme, setCurrentTheme] = useTheme();
  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ThemeProvider theme={currentTheme}>
          <Provider store={store}>
            <DataProvider>
              <Router>
                <div>
                  <AppBarAndDrawer
                    currentTheme={currentTheme}
                    setCurrentTheme={setCurrentTheme}
                  />
                  {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                  <Switch>
                    <Route path="/login">
                      <SignIn />
                    </Route>
                    <Route path="/profile">
                      <Driver id={1} />
                    </Route>
                    <Route path="/home">
                      <Dashboard />
                    </Route>
                    <Route exact path="/members">
                      <People />
                    </Route>
                    <Route path={`/people/:driverId`}>
                      <Driver />
                    </Route>
                    <Route path="/Recommendations">
                      <Dashboard2 />
                    </Route>
                    <Route path="/signIn">
                      <SignIn />
                    </Route>
                    <Route path="/signUp">
                      <SignUp />
                    </Route>
                  </Switch>
                </div>
              </Router>
            </DataProvider>
          </Provider>
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </>
  );
}
