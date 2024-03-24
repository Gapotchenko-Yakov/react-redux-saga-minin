import "./App.css";
import FetchedPosts from "./components/FetchedPosts";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

const defaultPosts = [
  { id: 0, title: "Post 1", text: "Info 1" },
  { id: 1, title: "Post 2", text: "Info 2" },
  { id: 2, title: "Post 3", text: "Info 3" },
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
