import { useState } from "react";
import { useCustomDispatch, useCustomSelector } from "./hooks/redux";
import {
  getAge,
  getFinallyProfit,
  getInitialСapital,
  getMonthlyReplenishment,
  getProcent,
} from "./store/mainSlice";
import { Input } from "./form/Input";
import { Count } from "./form/Count";

function App() {
  const data = useCustomSelector((state) => state.mainSlice);
  const dispatch = useCustomDispatch();
  return (
    <div className="wrapper">
      <h1>Калькулятор сложного процента</h1>
      <div className="main_block">
        <Input
          value={data.initialСapital}
          fun={(e) => {
            dispatch(getInitialСapital(e.currentTarget.value));
          }}
          placeholder="Первоначальный капитал"
        ></Input>
        <Input
          value={data.monthlyReplenishment}
          fun={(e) => {
            dispatch(getMonthlyReplenishment(e.currentTarget.value));
          }}
          placeholder="Ежемесячное вложение"
        ></Input>
        <Count
          header={`Количество лет: ${data.age}`}
          plus={() => {
            dispatch(getAge("+"));
          }}
          minus={() => {
            dispatch(getAge("-"));
          }}
        />
        <Count
          header={`Процент дохода: ${data.procent}`}
          plus={() => {
            dispatch(getProcent("+"));
          }}
          minus={() => {
            dispatch(getProcent("-"));
          }}
        />
      </div>
      <h1>Итоговая прибыль: {data.finallyProfit}</h1>
      <button onClick={() => dispatch(getFinallyProfit())}>Расчитать</button>
    </div>
  );
}

export default App;
