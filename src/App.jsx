
import {
  HashRouter,
  MemoryRouter,
  StaticRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function Pages() {
  return (
    <div>
      <h1>React Router Types</h1>

      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/about">About</Link>{" | "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

// Choose one router at a time.
export default function App() {
  const routerType = "hash";

  if (routerType === "hash") {
    return (
      <HashRouter>
        <Pages />
      </HashRouter>
    );
  }

  if (routerType === "memory") {
    return (
      <MemoryRouter initialEntries={["/"]}>
        <Pages />
      </MemoryRouter>
    );
  }

  return (
    <StaticRouter location="/about">
      <Pages />
    </StaticRouter>
  );
}
