import React from "react";
import {  Route, Routes } from "react-router";
import { authRoutes, publicRoutes, userRoutes } from "./router.link";
import Feature from "../feature";
import AuthFeature from "../authFeature";
import InventoryRoutes from "./InventoryRoutes";
import InventoryDashboard from "../Inventory/InventoryDashboard";
import Customers from "../Inventory/Customers";
import Demo from "../Inventory/Demo";
import InventoryOrderList from "../Inventory/InventoryOrderList";
import InventoryIndex from "../Inventory/InventoryIndex";
import Inventory from "../Inventory/Inventory";
import UserLayout from "../UserLayout";
// import OrdersPage from "../Inventory/OrdersPage";

const ALLRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<Feature />}>
          {publicRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
          <Route path="/inventory/*" element={<InventoryRoutes />} />


          <Route path="/inventory/*" element={<InventoryDashboard />}>
             {/* Child Routes Rendered in the Outlet */}
             <Route index element={<InventoryIndex />} /> 
              <Route path="dashboard" element={<InventoryIndex />}  />
              {/* <Route path="orderlist" element={<InventoryOrderList />} />  */}
              <Route path="inventory" element={<Inventory />} />
              <Route path="customers" element={<Customers />} />
              {/* <Route path="/orderlist" element={<OrdersPage />} /> */}
              <Route path="demo" element={<Demo />} />

          </Route>
        </Route>

        <Route element={<UserLayout />}>
          {userRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}  
                
        </Route>

        <Route element={<AuthFeature />}>
          {authRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default ALLRoutes;
