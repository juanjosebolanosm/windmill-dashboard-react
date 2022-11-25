import React from "react";
import { Link } from "react-router-dom";
import ImageLight from "../assets/img/loginRestaurant.jpg";
import ImageDark from "../assets/img/login-office-dark.jpeg";
import { GithubIcon, TwitterIcon } from "../icons";
import { Label, Input, Button } from "@windmill/react-ui";
import { firebaseConfig } from "../firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import * as AdminService from "../Services/AdminService";
import * as LocalStorage from "../Services/LocalStorage";

function Login() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const getUser = async (authData) => {
    AdminService.getUser(auth.currentUser.uid)
      .then((data) => {
        if (data?.Rol == "Administador") {
          alert("Error", "Usuario no autorizado");
          return;
        }
        console.log("Entro Domiciliario");
        const name_words = data?.nombrecliente.toLowerCase().split(" ");
        const name_normalized = name_words
          .map((word) => {
            return word[0].toUpperCase() + word.substring(1);
          })
          .join(" ");
        data.nombrecliente = name_normalized;
        const newUser = { ...data, ...authData };
        LocalStorage.saveUser(newUser);
        window.location.href = "/app";
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userAuth = userCredential.user;
        getUser(userAuth);
        console.log("Signed in!");
      })
      .catch((error) => {
        // console.error(error)
        alert("El correo o la contraseña son incorrectos");
      });
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Iniciar sesión
              </h1>
              <Label>
                <span>Email</span>
                <Input
                  onChange={handleEmailChange}
                  className="mt-1"
                  type="email"
                  placeholder="jrizo@javeriana.edu.co"
                />
              </Label>

              <Label className="mt-4">
                <span>Password</span>
                <Input
                  onChange={(text) => handlePasswordChange(text)}
                  className="mt-1"
                  type="password"
                  placeholder="***************"
                />
              </Label>

              <Button className="mt-4" block onClick={() => login()}>
                Iniciar sesion
              </Button>

              <hr className="my-8" />

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/forgot-password"
                >
                  Olvidaste tu contraseña?
                </Link>
              </p>
              <p className="mt-1">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/create-account"
                >
                  Crear cuenta
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Login;
