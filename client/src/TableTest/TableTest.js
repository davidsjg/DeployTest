import React from "react";
import styled from "styled-components";
import styles from "./TableTest.module.css";

function TableTest() {
  const rowArray = ["row1", "row2", "row3", "row4"];
  const colArray = ["col1", "col2", "col3", "col4"];
  return (
    <div>
      <Container>
        <th>
          {colArray.map((col, index) => {
            return (
              <tr className={styles["tableRow"]}>
                <td className={styles["tableCol"]}>{col}</td>
                <td className={styles["tableCol"]}>{col}</td>
                <td className={styles["tableCol"]}>{col}</td>
                <td className={styles["tableCol"]}>{col}</td>
              </tr>
            );
          })}
        </th>
      </Container>
    </div>
  );
}

export default TableTest;

const Container = styled.div`
min-height: 100vh;
position: fixed;
display: flex;
align-items: center;
justify-content: space-around;
padding: 0 20px;
top: 0;
left 0;
right: 0;
`;

const tableBlock = styled.div`
  display: flex;
`;
