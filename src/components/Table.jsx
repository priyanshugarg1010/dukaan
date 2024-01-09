import { paymentData } from "../data/payment";
const PaymentTable = () => {
  return (
    <>
      <div className="payment_table">
        <div className="table_second">
          <table>
            <thead>
              <tr
                style={{
                  backgroundColor: "#d6d2d2",
                  color: "rgb(48, 48, 48)",
                  fontWeight: 400,
                  textAlign: "left",
                }}
              >
                <th className="text-start flex ">Order ID</th>
                <th>Order date</th>
                <th>Order amount</th>
                <th className="text-end flex justify-end">Transaction fees</th>
              </tr>
            </thead>
            <tbody>
              {paymentData.map((payment, index) => (
                <tr key={index}>
                  <td
                    style={{ color: "var(--primary-blue, #146eb4)" }}
                    className="text-start flex "
                  >
                    {payment.OrderID}
                  </td>
                  <td>{payment.orderDate}</td>
                  <td>{payment.orderAmount}</td>
                  <td className="text-end flex justify-end">
                    {payment.transactionFees}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PaymentTable;
