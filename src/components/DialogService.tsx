import { IoCloseSharp } from "react-icons/io5";

export interface IDialogServiceProps {
  show: boolean;
  title: string;
  onClose: () => void;
  children: JSX.Element;
}

export function DialogService (props: IDialogServiceProps) {
  const containerClassName = props.show ?
    "fixed top-0 left-0 w-full h-full bg-gray-300 bg-opacity-70 flex justify-center items-center"
    : "fixed top-0 left-0 w-full h-full bg-gray-300 bg-opacity-70 hidden"
  return (
    <div className={ containerClassName }>
      <div className="bg-white min-w-[50%] md:min-w-[40%] lg:min-w-[30%] max-w-[85%] pt-3 px-4 pb-4 shadow-2xl rounded-lg">
        <div className="flex justify-between items-center">
          <div className="font-bold">{ props.title }</div>
          <div>
            <IoCloseSharp onClick={ () => props.onClose() } className="text-xl cursor-pointer" />
          </div>
        </div>
        { props.children }
      </div>
    </div>
  );
}
