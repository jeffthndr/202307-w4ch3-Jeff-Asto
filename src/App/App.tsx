import { Card } from '../components/card/card';
import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';

export function App() {
  return (
    <>
      <Header></Header>
      <Card
        character={{
          name: '',
          family: '',
          age: 0,
          quote: '',
        }}
      ></Card>
      <Footer></Footer>
    </>
  );
}
