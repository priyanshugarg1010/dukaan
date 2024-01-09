import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Pagination from "./components/Pagination";
import Sidebar from "./components/Sidebar";
import Sort from "./components/Sort";
import PaymentTable from "./components/Table";
import "./style.css";

const App = () => {
  return (
    <div className="page">
      <Sidebar />
      <div className="" style={{ marginLeft: " 238px" }}>
        <Navbar />
        <Overview />
        <Sort />
        <PaymentTable />
        <div className="flex justify-center">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default App;
