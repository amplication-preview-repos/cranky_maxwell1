import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TradingPairList } from "./tradingPair/TradingPairList";
import { TradingPairCreate } from "./tradingPair/TradingPairCreate";
import { TradingPairEdit } from "./tradingPair/TradingPairEdit";
import { TradingPairShow } from "./tradingPair/TradingPairShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { LogList } from "./log/LogList";
import { LogCreate } from "./log/LogCreate";
import { LogEdit } from "./log/LogEdit";
import { LogShow } from "./log/LogShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TradingService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TradingPair"
          list={TradingPairList}
          edit={TradingPairEdit}
          create={TradingPairCreate}
          show={TradingPairShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="Log"
          list={LogList}
          edit={LogEdit}
          create={LogCreate}
          show={LogShow}
        />
      </Admin>
    </div>
  );
};

export default App;
