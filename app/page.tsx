import { SampleButton } from "./components/SampleButton";
import { ResetStyles } from "./global/ResetStyles";
import { GlobalStyles } from "./global/GlobalStyles";

const Home: React.FC = () => {
  return (
    <main>
      <h1>Hello</h1>

      <SampleButton>Boring</SampleButton>
      <SampleButton variant="info">Info</SampleButton>
      <SampleButton variant="danger">Danger</SampleButton>

      <ResetStyles />
      <GlobalStyles />
    </main>
  );
};

export default Home;
