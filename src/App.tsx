import { AppLayout } from "./design/Layouts/AppLayout";
import { AppHeader } from "./components/AppHeader";
import { Collection } from "./features/CollectionGrid/Collection";

function App() {
  return <AppLayout Header={<AppHeader />} Content={<Collection />} />;
}

export default App;
