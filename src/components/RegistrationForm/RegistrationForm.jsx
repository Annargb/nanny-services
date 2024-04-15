import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import icons from "../../images/icons.svg";
import * as n from "./RegistrationForm.styled";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
// import { auth, storage, db } from "../../firebase/firebase";
import { auth, db } from "../../firebase/firebase";
import toast from "react-hot-toast";

const emailPattern = /^[a-z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, "Name must contain at least 2 characters")
    .max(40, "Too long name")
    .required("Name is required"),
  email: Yup.string()
    .trim()
    .matches(
      emailPattern,
      "Please enter a valid email! For example jane@mail.com"
    )
    .required("Email is required"),
  password: Yup.string()
    .trim()
    .min(8, "Password must contain at least 8 characters")
    .max(40, "Too long password")
    .required("Password is required!"),
});

export const RegistrationForm = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async ({ name, email, password }, { resetForm }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      //
      // const storageRef = ref(storage, `images/${Date.now() + name}`);
      // const uploadTask = uploadBytesResumable(storageRef, file)
      const user = userCredential.user;
      console.log(user);

      await updateProfile(user, {
        displayName: name,
      });

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName: name,
        email,
      });
      // setisLoading(false);
      toast.success("Account created");
      navigate("/nannies");
    } catch (error) {
      // setisLoading(false);
      toast.error("Something went wrong");
    }

    //  !isLoading && !error && resetForm();
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <n.Form>
        <n.FormTitle>Registration</n.FormTitle>
        <n.FormText>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </n.FormText>
        <n.InputWrapper>
          <n.FormGroup>
            <n.Field name="name" type="text" placeholder="Name" />
            <n.ErrorMessage name="name" component="span" required />
          </n.FormGroup>

          <n.FormGroup>
            <n.Field name="email" type="email" placeholder="Email" />
            <n.ErrorMessage name="email" component="span" required />
          </n.FormGroup>

          <n.FormGroup>
            <n.Field
              name="password"
              type={isVisiblePassword ? "text" : "password"}
              placeholder="Password"
            />
            <n.ErrorMessage name="password" component="span" required />
            <n.PasswordButton
              type="button"
              onClick={() => setIsVisiblePassword(!isVisiblePassword)}
            >
              {isVisiblePassword ? (
                <n.PasswordIcon>
                  <use href={`${icons}#eye`} />
                </n.PasswordIcon>
              ) : (
                <n.PasswordIcon>
                  <use href={`${icons}#eye-off`} />
                </n.PasswordIcon>
              )}
            </n.PasswordButton>
          </n.FormGroup>
        </n.InputWrapper>

        <n.RegisterButton type="submit">Sign up</n.RegisterButton>
      </n.Form>
    </Formik>
  );
};
