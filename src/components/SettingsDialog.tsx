import * as React from "react";
import { DialogService } from "./DialogService";

export interface ISettingsDialogProps {
  input: ISettingsDialogInput;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  onClose: (response: ISettingsDialogOutput | null) => void;
}

export interface ISettingsDialogInput {
  userId: number;
}

export interface ISettingsDialogOutput {
  city: string;
  searchRadius: number;
}

export function SettingsDialog (props: ISettingsDialogProps) {
  if (props.show) {
    console.log(`SettingsDialog:: Received a userId of ${props.input.userId}`);
  }

  function handleClose(): void {
    props.setShow(false);
    props.onClose(null);
  }

  return (
    <DialogService show={ props.show } title="My Dialog" onClose={ () => handleClose() }>
      <div>Dialog content</div>
    </DialogService>
  );
}
