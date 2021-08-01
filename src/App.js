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
import Products from "./Products/products";
import Driver from "./Members/Driver";
import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./ReduxTable/peopleSlice";
import { Provider } from "react-redux";
import { User } from "./users/index";
import { Welcome } from "./welcome";
import { Landing } from "./landing";
import { Name } from "./nameacoop";
export default function App() {
  const store = configureStore({
    reducer: {
      people: peopleReducer,
    },
  });
  const [currentTheme, setCurrentTheme] = useTheme();
  return (
    <>
        <ThemeProvider theme={currentTheme}>
          <Provider store={store}>
            <DataProvider>
              <Router forceRefresh={false}>
                <div>
                <Route path="/login">
                      <SignIn />
                    </Route>
                  <AppBarAndDrawer
                    currentTheme={currentTheme}
                    setCurrentTheme={setCurrentTheme}
                  />
                  {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                  <Switch>
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
                    <Route path="/User">
                      <User />
                      </Route>
                    <Route path="/signIn">
                      <SignIn />
                    </Route>
                    <Route path="/signUp">
                      <SignUp />
                    </Route>
                    <Route path="/products">
                      <Products />
                    </Route>
                    <Route path="/welcome">
                      <Welcome />
                    </Route>
                    <Route path="/landing">
                      <Landing />
                    </Route>
                    <Route path="/name">
                      <Name />
                    </Route>
                  </Switch>
                </div>
              </Router>
            </DataProvider>
          </Provider>
        </ThemeProvider>

    </>
  );
}
