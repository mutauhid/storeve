import Link from "next/link";
import React from "react";

const SignupPhotoForm = () => {
  return (
    <>
      <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
        Shayna Anne
      </h2>
      <p className="text-lg text-center color-palette-1 m-0">shayna@anne.com</p>
      <div className="pt-50 pb-50">
        <label
          htmlFor="category"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Favorite Game
        </label>
        <select
          id="category"
          name="category"
          className="form-select d-block w-100 rounded-pill text-lg"
          aria-label="Favorite Game"
        >
          <option value="" disabled selected>
            Select Category
          </option>
          <option value="fps">First Person Shoter</option>
          <option value="rpg">Role Playing Game</option>
          <option value="arcade">Arcade</option>
          <option value="sport">Sport</option>
        </select>
      </div>

      <div className="button-group d-flex flex-column mx-auto">
        <Link href="./sign-up-photo-success.html" legacyBehavior>
          <a
            className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
            role="button"
          >
            Create My Account
          </a>
        </Link>

        <a
          className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
          href="#"
          role="button"
        >
          Terms & Conditions
        </a>
      </div>
    </>
  );
};

export default SignupPhotoForm;
