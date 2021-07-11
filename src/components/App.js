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
  const { dispatch, blogs } = props;
  //Fetching the blog list on the loading of the parent component
  useEffect(() => {
    dispatch(fetchBlogList());
  }, []);
  return (
    <div className="App">
      <Router>
        <Container fluid>
          <Navbar {...props} />
          <Divider />
          <Switch>
            <Route exact path="/">{(props) => <PostContainer {...props} blogs={blogs} dispatch={dispatch} />}</Route>
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
