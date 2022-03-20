import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { SettingsDialog, ISettingsDialogOutput } from "./components/SettingsDialog";

function App() {
  const [userId, setUserId] = useState<number>(1);
  const [showSettingsDialog, setShowSettingsDialog] = useState<boolean>(false);

  function handleSettingsClick(): void {
    setShowSettingsDialog(true);
  }

  function handleSettingsDialogClose(response: ISettingsDialogOutput | null): void {
    if (response) {
      console.log(response);
    }
  }

  return (
    <div>
      <Navbar onSettingsClick={ () => handleSettingsClick() } />
      <div className="flex flex-row justify-center items-center h-80">
        <div className="border-2 p-20">Main Content</div>
      </div>
      <SettingsDialog input={ { userId } } show={ showSettingsDialog } setShow={ setShowSettingsDialog } onClose={ (response) => handleSettingsDialogClose(response) }></SettingsDialog>
    </div>
  );
}

export default App;
