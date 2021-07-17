import transactionsHistory from "./data/transactions.js";

const makeTransactionTableRowMarkup = (transaction) => {
  const { id, amount, date, business, type, name, account } = transaction;
  return `
    <tr>
          <td>${id}</td>
          <td>${amount}</td>
          <td>${date}</td>
          <td>${business}</td>
          <td>${type}</td>
          <td>${name}</td>
          <td>${account}</td>
 </tr>
    `;
};
console.log(transactionsHistory);
const tableEl = document.querySelector(".js-transaction-table");
const makeTransactionTableRows = transactionsHistory
  .map(makeTransactionTableRowMarkup)
  .join("");
tableEl.insertAdjacentHTML("beforeend", makeTransactionTableRows);
console.log(makeTransactionTableRows);
