import { Outlet } from "react-router-dom";

const Root = () => {

    return (
      <div className="font-poppins my-5">
          <div className="max-w-6xl mx-auto"><Outlet /></div>
          <p className="text-sm text-center mt-20">&copy; SHEIKH MOHAMMAD NAZMUL HASAN</p>
      </div>
    );
};

export default Root;