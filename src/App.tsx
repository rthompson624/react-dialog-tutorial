import { useState } from "react";
import Navbar from "./components/Navbar";
import DialogService from "./components/DialogService";

function App() {
  const [showSettings, setShowSettings] = useState<boolean>(false);

  function handleSettingsClick(): void {
    setShowSettings(true);
  }

  function handleDialogClose(): void {
    setShowSettings(false);
  }

  return (
    <div>
      <Navbar onSettingsClick={ () => handleSettingsClick() } />
      <div className="flex flex-row justify-center items-center h-80">
        <div className="border-2 p-20">Main Content</div>
      </div>
      <DialogService show={ showSettings } title="Settings" onClose={ () => handleDialogClose() }>
        <div>Dialog content</div>
      </DialogService>
    </div>
  );
}

export default App;
