import React from "react";
import Table from "../../components/table";
import { users } from "../../data/users";

const HomePage = () => {
  return (
    <div>
    <Table users={users}/>
    </div>
  );
};

export default HomePage;
