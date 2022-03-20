import * as React from "react";
import { useState } from "react";
import { DialogService } from "./DialogService";

export interface ILoginDialogProps {
  input: ILoginDialogInput;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  onClose: (response: ILoginDialogOutput | null) => void;
}

export interface ILoginDialogInput {
  userId: number;
}

export interface ILoginDialogOutput {
  email: string;
  password: string;
}

export function LoginDialog (props: ILoginDialogProps) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Use this as an onload event
  if (props.show) {
    console.log(`LoginDialog:: Received a userId of ${props.input.userId}`);
  }

  function handleClose(): void {
    props.setShow(false);
    props.onClose(null);
  }

  function handleSubmit(): void {
    props.setShow(false);
    props.onClose({ email, password });
  }

  return (
    <DialogService show={ props.show } title="Login" onClose={ () => handleClose() }>
      <div className='flex flex-row mt-3'>
        <div>
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Email
            </span>
            <input onChange={(e) => setEmail(e.currentTarget.value)} type="email" autoComplete='off' className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
          </label>
        </div>
        <div className='ml-5'>
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Password
            </span>
            <input onChange={(e) => setPassword(e.currentTarget.value)} type="text" autoComplete='off' className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
          </label>
        </div>
        <div className='ml-5 flex flex-row items-end'>
          <button onClick={() => handleSubmit()} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Login</button>
        </div>
      </div>
    </DialogService>
  );
}
