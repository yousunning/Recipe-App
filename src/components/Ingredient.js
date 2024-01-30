import React from "react";
//const는 할당된 값 변경 불가 / export는 모듈에서 사용할 수 있도록 공개변수
const Ingredient = ({ amount, measurement, name }) => (
  <li>
    <span className="amount">{amount} </span>
    <span className="measurement">{measurement} </span>
    <span className="name">{name}</span>
  </li>
);

Ingredient.displayName = "Ingredient";
//유지보수와 편리성을 위해 다른 파일로 자바스크립 작업
export default Ingredient;
