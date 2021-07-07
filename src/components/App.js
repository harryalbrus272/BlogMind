import { Container, Divider } from "semantic-ui-react";
import Navbar from "./Navbar";
import PostContainer from "./PostContainer";
import PostView from "./PostView";
import CreatePosts from "./CreatePosts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Container fluid>
          <Navbar />
          <Divider />
          <Switch>
            <Route exact path="/" component={PostContainer} />
            <Route exact path="/blog/:id" component={PostView} />
            <Route exact path="/create" component={CreatePosts} />
            <PostContainer />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
