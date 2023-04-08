import SignupPhotoForm from "@/components/organism/Sign-upPhotoForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignUpPhoto = () => {
  return (
    <>
      <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
        <div className="container mx-auto">
          <form action="">
            <div className="form-input d-md-block d-flex flex-column">
              <div>
                <div className="mb-20">
                  <div className="image-upload text-center">
                    <label htmlFor="avatar">
                      <Image
                        src={"/icon/upload.svg"}
                        alt="uploadfile"
                        width={120}
                        height={120}
                      />
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                    />
                  </div>
                </div>
              </div>
              <SignupPhotoForm />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUpPhoto;
