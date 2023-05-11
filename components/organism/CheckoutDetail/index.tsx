import { NominalTypes } from "@/services/DataTypes";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";

const CheckoutDetail = () => {
  const [dataTopup, setDataTopup] = useState({
    bankAccountName: "",
    verifyID: "",
    nominalItem: {
      coinName: "",
      coinQuantity: 0,
      price: 0,
      _id: "",
    },
    paymentItem: {
      bank: {
        bankName: "",
        name: "",
        noRekening: "",
        _id: "",
      },
      payment: {
        banks: {
          type: "",
          _id: "",
        },
      },
    },
  });

  const [player, setPlayer] = useState({
    user: {
      username: "",
    },
  });

  useEffect(() => {
    const dataTopupFromLocal = localStorage.getItem("data-topup");
    const dataUserFromLocal = localStorage.getItem("user");
    const dataTopup = JSON.parse(dataTopupFromLocal!);
    const dataUser = JSON.parse(dataUserFromLocal!);
    setDataTopup(dataTopup);
    setPlayer(dataUser);
  }, []);

  const handlePrice = (data: number) => {
    return (
      <NumericFormat
        value={data}
        prefix="Rp. "
        thousandSeparator="."
        decimalSeparator=","
        displayType="text"
      />
    );
  };
  const tax = (price: number, tax: number) => {
    return price * tax;
  };
  const total = (price: number, tax: number) => {
    return price + price * tax;
  };
  return (
    <>
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Purchase Details
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Game ID{" "}
          <span className="purchase-details">{dataTopup.verifyID}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Order ID{" "}
          <span className="purchase-details">#{dataTopup.nominalItem._id}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Item{" "}
          <span className="purchase-details">
            {dataTopup.nominalItem.coinQuantity}{" "}
            {dataTopup.nominalItem.coinName}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Price{" "}
          <span className="purchase-details">
            {handlePrice(dataTopup.nominalItem.price)}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Tax (11%){" "}
          <span className="purchase-details">
            {handlePrice(tax(dataTopup.nominalItem.price, 0.11))}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Total{" "}
          <span className="purchase-details color-palette-4">
            {handlePrice(total(dataTopup.nominalItem.price, 0.11))}
          </span>
        </p>
      </div>
      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Payment Informations
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Account Name{" "}
          <span className="purchase-details">{player.user.username}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Type{" "}
          <span className="payment-details">
            {dataTopup.paymentItem.payment.banks.type}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Name{" "}
          <span className="payment-details">
            {dataTopup.paymentItem.bank.bankName}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Account Name{" "}
          <span className="payment-details">
            {dataTopup.paymentItem.bank.name}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Number{" "}
          <span className="payment-details">
            {dataTopup.paymentItem.bank.noRekening}
          </span>
        </p>
      </div>
    </>
  );
};

export default CheckoutDetail;
