import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../components/Table";
import SecondComponent from "../components/SecondComponent";

const SecondPage: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("userData") === null) {
      navigate("/");
    } else {
    }
  }, []);

  return (
    <main className="w-full h-screen mx-auto bg-emerald-500 font-mono overflow-scroll flex flex-col">
      <Table />
      <SecondComponent />
    </main>
  );
};

export default SecondPage;
