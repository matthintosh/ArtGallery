import { AppLayout } from "./design/Layouts/AppLayout";
import { GridLayout } from "./design/Layouts/GridLayout";
import { AppHeader } from "./components/AppHeader";

function App() {
  return <AppLayout Header={<AppHeader />} Content={<GridLayout />} />;
}

export default App;
