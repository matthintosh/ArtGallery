import { AppLayout } from "./design/Layouts/AppLayout";
import { AppHeader } from "./components/AppHeader";
import { CollectionGrid } from "./features/CollectionGrid/CollectionGrid";

function App() {
  return <AppLayout Header={<AppHeader />} Content={<CollectionGrid />} />;
}

export default App;
