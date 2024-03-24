import "./App.css";
import FetchedPosts from "./components/FetchedPosts";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

const defaultPosts = [
  { id: 0, name: "Post 1", info: "Info 1" },
  { id: 1, name: "Post 2", info: "Info 2" },
  { id: 2, name: "Post 3", info: "Info 3" },
];

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронные посты</h2>
          <Posts posts={defaultPosts} />
        </div>
        <div className="col">
          <h2>Асинхронные посты</h2>
          <FetchedPosts posts={defaultPosts} />
        </div>
      </div>
    </div>
  );
}

export default App;
