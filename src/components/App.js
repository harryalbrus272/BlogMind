import { Container, Divider } from "semantic-ui-react";
import Navbar from "./Navbar";
import PostContainer from "./PostContainer";
import PostView from "./PostView";
import CreatePosts from "./CreatePosts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBlogList } from "../actions/blogs";

function App(props) {
  console.log(props);
  const { dispatch, blogs } = props;
  useEffect(() => {
    dispatch(fetchBlogList());
  }, []);
  return (
    <div className="App">
      <Router>
        <Container fluid>
          <Navbar />
          <Divider />
          <Switch>
            <Route exact path="/">{(props) => <PostContainer {...props} blogs={blogs} />}</Route>
            <Route exact path="/blog/:id" component={PostView} />
            <Route exact path="/create" component={CreatePosts} />
            <PostContainer />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
  };
};
export default connect(mapStateToProps)(App);
