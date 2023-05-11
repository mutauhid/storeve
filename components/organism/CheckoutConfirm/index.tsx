import { setCheckout } from "@/services/player";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";

const CheckoutConfirm = () => {
  const [checkbox, setCheckbox] = useState(false);
  const router = useRouter();

  const onSubmit = async () => {
    if (!checkbox) {
      toast.error("Please Confirm the Payment");
    }
    const dataTopupLocal = localStorage.getItem("data-topup");
    const dataItemLocal = localStorage.getItem("data-details");
    const dataTopup = JSON.parse(dataTopupLocal!);
    const dataItem = JSON.parse(dataItemLocal!);

    const data = {
      accountUser: dataTopup.verifyID,
      nominal: dataTopup.nominalItem._id,
      voucher: dataItem._id,
      name: dataTopup.bankAccountName,
      payment: dataTopup.paymentItem.payment._id,
      bank: dataTopup.paymentItem.bank._id,
    };

    const response = await setCheckout(data);
    if (response.error) {
      toast.error(response.msg);
    } else {
      toast.success("Success Checkout");
      router.push("/complete-checkout");
    }
  };
  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input
          type="checkbox"
          checked={checkbox}
          onChange={() => setCheckbox(!checkbox)}
        />
        <span className="checkmark"></span>
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          type="button"
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          role="button"
          onClick={onSubmit}
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
};

export default CheckoutConfirm;
