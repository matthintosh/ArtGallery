import { HeaderSize } from "../design/Constants";
import { Title } from "../design/Typography/Title";
import logo from "../assets/logo.webp";

export const AppHeader = () => {
  return (
    <>
      <img
        src={logo}
        alt="ArtGallery Logo"
        height={HeaderSize}
        style={{ objectFit: "contain" }}
      />
      <Title>Art Gallery</Title>
    </>
  );
};
