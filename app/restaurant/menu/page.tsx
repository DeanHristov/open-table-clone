import { FC } from "react";
import Header from "../../components/Header";
import Container from "../../components/Container";

export interface IMenuPageProps {}

const MenuPage: FC<IMenuPageProps> = () => {
  return (
    <>
      <Header height="md:h-64">
        <h1 className="text-4xl md:text-7xl text-white captitalize text-shadow text-center">
          Milestones Grill (Toronto)
        </h1>
      </Header>
      <div className="flex m-auto w-full md:w-2/3 justify-between items-start 0 md:-mt-11">
        <Container width="md:w-[100%]">
          <nav className="flex text-reg border-b pb-2">
            <a href="" className="mr-7">
              {" Overview "}
            </a>
            <a href="" className="mr-7">
              {" Menu "}
            </a>
          </nav>
          <main className="bg-white mt-5">
            <div className="mt-4 pb-1 mb-1">
              <h1 className="font-bold text-4xl">Menu</h1>
            </div>
          </main>
        </Container>
      </div>
    </>
  );
};

export default MenuPage;
