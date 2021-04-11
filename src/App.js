import TaskList from "./components/TaskList";

export default function App() {
  return (
    <div class="m-4">
      <div class="tile is-ancestor">
        <div class="tile is-vertical">
          <div class="container tile" style={{ minHeight: "100vh" }}>
            <div class="tile is-parent">
              <article class="tile is-child notification is-danger">
                <p class="title">Front Burner</p>
                <TaskList localKey="fb" />
              </article>
            </div>
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-warning">
                <p class="title">Back Burner</p>
                <TaskList localKey="bb" />
              </article>
              <article class="tile is-child notification is-info">
                <p class="title">Kitchen Sink</p>
                <TaskList localKey="ks" />
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
