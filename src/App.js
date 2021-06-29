import Header from "./components/Header/Header";
import HomeBanner from "./components/HomeBanner/HomeBanner"
import Blogs from "./components/Blogs/Blogs"
import Subscribe from "./components/Subscribe/Subscribe"
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import Detail from "./components/Detail/Detail";
import Admin from "./dashboard/Admin/Admin";
import AddBlog from "./dashboard/AddBlog/AddBlog";
import ManagePost from "./dashboard/ManagePost/ManagePost";
import Login from "./dashboard/Login/Login";


function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Header />
          <HomeBanner />
          <Blogs />
          <Subscribe />
          <Footer />
        </Route>

        <Route exact path="/detail/:id">
          <Header />
          <Detail />
          <Footer />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route exact path="/admin">
          <Admin />
          <ManagePost />
        </Route>

        <Route path="/addBlog">
          <Admin />
          <AddBlog />
        </Route>

        <Route path="/managePost">
          <Admin />
          <ManagePost />
        </Route>

        <Route path="/coming">
          <Header />
          <ComingSoon />
          <Footer />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;