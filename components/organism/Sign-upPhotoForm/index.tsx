import { getGameCategory } from "@/services/player";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

const SignupPhotoForm = () => {
  const [categories, setCategories] = useState([]);
  const [favorite, setFavorite] = useState("");

  const getCategoryAPI = useCallback(async () => {
    const data = await getGameCategory();
    setCategories(data);
    setFavorite(data[0]._id);
  }, [getGameCategory]);

  useEffect(() => {
    getCategoryAPI();
  });

  const onSubmit = () => {
    console.log(favorite);
  };

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
          value={favorite}
          onChange={(e) => setFavorite(e.target.value)}
          className="form-select d-block w-100 rounded-pill text-lg"
          aria-label="Favorite Game"
        >
          {categories.map((category) => {
            return (
              <option value={category._id} selected>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="button-group d-flex flex-column mx-auto">
        <button
          type="button"
          value={favorite}
          onClick={onSubmit}
          className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
        >
          Create My Account
        </button>

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
