import { FC } from "react";
import Header from "../../components/Header";

export interface IReservationPageProps {}

const ReservationPage: FC<IReservationPageProps> = () => {
  return (
    <>
      <Header />
      <div className="border-t h-screen" />
    </>
  );
};

export default ReservationPage;
