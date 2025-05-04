import Container from "./components/Container";
import Content from "./components/Content";
import Header from "./components/Header";

export default function App() {
  return (
    <main className="dark:bg-zinc-900 min-h-screen bg-zinc-200 font-ibm">
      <Container>
        <Header />

        <Content />
      </Container>
    </main>
  );
}
