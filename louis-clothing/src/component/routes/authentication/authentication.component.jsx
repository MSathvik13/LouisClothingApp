import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../../utils/firebase/firebase.utils";
import "./authentication.styles.scss";
import SignUp from "../../sign-up/sign-up.component";
import SignInForm from "../../sign-in-form/sign-in-form-component";

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUp />
    </div>
  );
};

export default Authentication;
