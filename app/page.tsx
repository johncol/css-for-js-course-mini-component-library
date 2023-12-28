import { SampleButton } from "./components/SampleButton";

const Home: React.FC = () => {
  return (
    <main>
      <h1>Hello</h1>
      <SampleButton>Boring</SampleButton>
      <SampleButton variant="info">Info</SampleButton>
      <SampleButton variant="danger">Danger</SampleButton>
    </main>
  );
};

export default Home;
