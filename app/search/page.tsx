import { FC } from "react";

export interface ISearchPageProps {}

const SearchPage: FC<ISearchPageProps> = () => {
  return (
    <>
      <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2"></div>
      <div className="flex py-4 m-auto w-2/3 justify-between items-start"></div>
    </>
  );
};

export default SearchPage;
