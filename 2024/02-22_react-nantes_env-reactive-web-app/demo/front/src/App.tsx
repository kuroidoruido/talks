import "./App.css";
import { MenuBar } from "./components/MenuBar";
import { AppRouter } from "./pages/router";
import { useEnv } from "./hooks/useEnv";
import { Assistant } from "./components/Assistant";

export default function App() {
  return (
    <main className="container">
      <MenuBar />
      <section>
        <AppRouter />
      </section>
      {import.meta.env.VITE_ENV_DEBUG === 'true' && <EnvDebugCard />}
      <Assistant />
    </main>
  );
}

function EnvDebugCard() {
  const env = useEnv();

  return (
    <section>
      <code>
        <pre>{JSON.stringify(env, undefined, 2)}</pre>
      </code>
    </section>
  )
}