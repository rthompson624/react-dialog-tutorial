import { IoIosCloseCircleOutline } from "react-icons/io";

export interface IDialogServiceProps {
  show: boolean;
  title: string;
  onClose: () => void;
  children: JSX.Element;
}

export default function DialogService (props: IDialogServiceProps) {
  const containerClassName = props.show ?
    "fixed top-0 left-0 w-full h-full bg-gray-300 bg-opacity-70 flex justify-center items-center"
    : "fixed top-0 left-0 w-full h-full bg-gray-300 bg-opacity-70 hidden"
  return (
    <div className={ containerClassName }>
      <div className="bg-white w-1/2 h-1/2 p-2 shadow-2xl rounded-lg">
        <div className="flex justify-between items-center">
          <div>{ props.title }</div>
          <div>
            <IoIosCloseCircleOutline onClick={ () => props.onClose() } className="text-xl cursor-pointer" />
          </div>
        </div>
        { props.children }
      </div>
    </div>
  );
}
