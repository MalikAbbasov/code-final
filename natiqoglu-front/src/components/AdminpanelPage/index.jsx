import React from "react";

import "./adminpanel.scss";
import { Link } from "react-router-dom";

function AdminpanelPage() {


  return (
    <div>
     <div className="text">
     <h1>adminpanel</h1>
     <h1>/</h1>
     <Link to="/news"><h1>news</h1></Link>
     <h1>/</h1>
     <Link to="/user"><h1>users</h1></Link>
     </div>

    </div>
  );
}

export default AdminpanelPage;
