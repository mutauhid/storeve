import SignupPhotoForm from "@/components/organism/Sign-upPhotoForm";
import Image from "next/image";
import { CategoriesTypes } from "@/services/DataTypes";
import { getGameCategory } from "@/services/player";
import React, { useCallback, useEffect, useState } from "react";
import { setSignup } from "@/services/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const SignUpPhoto = () => {
  const [categories, setCategories] = useState([]);
  const [favorite, setFavorite] = useState("");
  const [image, setImage] = useState("null");
  const [preview, setPreview] = useState("");
  const [localForm, setLocalForm] = useState({
    name: "",
    email: "",
  });
  const router = useRouter();

  const getCategoryAPI = useCallback(async () => {
    const data = await getGameCategory();
    setCategories(data);
    setFavorite(data[0]._id);
  }, [getGameCategory]);

  useEffect(() => {
    getCategoryAPI();
  }, []);

  useEffect(() => {
    const getLocalForm = localStorage.getItem("user-form");
    if (getLocalForm) {
      const form = JSON.parse(getLocalForm);

      setLocalForm(form);
    }
  }, []);

  const onSubmit = async () => {
    try {
      const getLocalForm = await localStorage.getItem("user-form");
      if (getLocalForm) {
        const form = JSON.parse(getLocalForm);
        const data = new FormData();

        data.append("image", image);
        data.append("favorite", favorite);
        data.append("name", form.name);
        data.append("email", form.email);
        data.append("password", form.password);
        data.append("username", form.name);
        data.append("phoneNumber", "08138746221");
        data.append("role", "user");
        data.append("status", "Y");

        await setSignup(data);
        toast.success("Register Success");
        localStorage.removeItem("user-form");
        router.push("/sign-up-success");
      }
    } catch (error: any) {
      const getError = error.response.data.msg;
      const errorSplit = getError.split(" ").slice(4).join(" ");
      toast.error(errorSplit);
    }
  };

  return (
    <>
      <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
        <div className="container mx-auto">
          <form action="">
            <div className="form-input d-md-block d-flex flex-column">
              <div>
                <div className="mb-20">
                  <div className="image-upload text-center">
                    {preview ? (
                      <label htmlFor="avatar">
                        <img
                          className="sign-up-photo"
                          src={preview}
                          alt="uploadfile"
                          width={120}
                          height={120}
                        />
                      </label>
                    ) : (
                      <label htmlFor="avatar">
                        <Image
                          src={"/icon/upload.svg"}
                          alt="uploadfile"
                          width={120}
                          height={120}
                        />
                      </label>
                    )}

                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      onChange={(e) => {
                        setPreview(URL.createObjectURL(e.target.files[0]));
                        return setImage(e.target.files[0]);
                      }}
                    />
                  </div>
                </div>
              </div>
              <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                {localForm.name}
              </h2>
              <p className="text-lg text-center color-palette-1 m-0">
                {localForm.email}
              </p>

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
                  {categories.map((category: CategoriesTypes) => {
                    return (
                      <option value={category._id} selected key={category._id}>
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
            </div>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default SignUpPhoto;
