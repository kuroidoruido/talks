import "./App.css";
import { MenuBar } from "./components/MenuBar";
import { AppRouter } from "./pages/router";
import { useEnv } from "./hooks/useEnv";
import { Assistant } from "./components/Assistant";

export default function App() {
  const env = useEnv();
  return (
    <main className="container">
      <MenuBar />
      <section>
        <AppRouter />
      </section>
      {env.toggles.static.debug && (
        <section>
          <code>
            <pre>{JSON.stringify(env, undefined, 2)}</pre>
          </code>
        </section>
      )}
      <Assistant />
    </main>
  );
}
