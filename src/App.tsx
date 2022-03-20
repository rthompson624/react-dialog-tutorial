import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { LoginDialog, ILoginDialogOutput } from "./components/LoginDialog";

function App() {
  const [userId, setUserId] = useState<number>(1);
  const [showLoginDialog, setShowLoginDialog] = useState<boolean>(false);

  function handleLoginClick(): void {
    setShowLoginDialog(true);
  }

  function handleLoginDialogClose(response: ILoginDialogOutput | null): void {
    if (response) {
      console.log(response);
    }
  }

  return (
    <div>
      <Navbar onLoginClick={ () => handleLoginClick() } />
      <div className="flex flex-row justify-center items-center h-80">
        <div className="border-2 p-20">Main Content</div>
      </div>
      <LoginDialog input={ { userId } } show={ showLoginDialog } setShow={ setShowLoginDialog } onClose={ (response) => handleLoginDialogClose(response) }></LoginDialog>
    </div>
  );
}

export default App;
