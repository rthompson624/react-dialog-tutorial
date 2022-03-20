import { IoMdSettings } from "react-icons/io";

export interface INavbarProps {
  onSettingsClick: () => void;
}

export function Navbar (props: INavbarProps) {
  return (
    <div className="flex flex-row justify-between	border-b-2 sticky top-1 bg-white text-center py-2">
      <div className="w-10"></div>
      <div className="text-2xl font-bold">Navbar Title</div>
      <div className="w-10 pr-3">
        <IoMdSettings onClick={ () => props.onSettingsClick() } className='text-3xl cursor-pointer' />
      </div>
    </div>
  );
}
