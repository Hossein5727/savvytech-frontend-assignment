import Items from "./modules/items";
import { Toaster } from "./share-components/molecules/sooner/default";

function App() {
  return (
    <div className="p-4">
      <Items />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
