import { Content } from "./design/Content";
import { Header } from "./design/Header";
import { Layout } from "./design/Layout";
import logo from "./assets/logo.webp";
import { Title } from "./design/atoms/Title";
import { HeaderSize } from "./design/Constants";

function App() {
  return (
    <Layout>
      <Header>
        <img
          src={logo}
          alt="ArtGallery Logo"
          height={HeaderSize}
          style={{ objectFit: "contain" }}
        />
        <Title>Art Gallery</Title>
      </Header>
      <Content>
        <p>Coucou</p>
        <p>Coucou</p>
        <p>Coucou</p>
        <p>Coucou</p>
        <p>Coucou</p>
        <p>Coucou</p>
        <p>Coucou</p>
        <p>Coucou</p>
        <p>Coucou</p>
        <p>Coucou</p>
        <p>Coucou</p>
        <p>Coucou</p>
        <p>Coucou</p>
        <p>Coucou</p>
        <p>Coucou</p>
        <p>Coucou</p>
        <p>Coucou</p>
        <p>Coucou</p>
        <p>Coucou</p>
        <p>Coucou</p>
        <p>Coucou</p>
        <p>Coucou</p>
        <p>Coucou</p>
        <p>Coucou</p>
        <p>Coucou</p>
      </Content>
    </Layout>
  );
}

export default App;
