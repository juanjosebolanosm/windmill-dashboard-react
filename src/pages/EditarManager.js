import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { url } from "../Services/ApiConfig";
import CTA from "../components/CTA";
import * as AdminService from "../Services/AdminService";
import PageTitle from "../components/Typography/PageTitle";
import SectionTitle from "../components/Typography/SectionTitle";
import {
  Input,
  HelperText,
  Label,
  Select,
  Textarea,
  Button,
} from "@windmill/react-ui";
import { HeartIcon, EditIcon } from "../icons";
import { MailIcon } from "../icons";

function EditarRestaurante() {
  const { id } = useParams();

  useEffect(() => {
    fetch(url + "/usuarios/get/" + id + "/")
      .then((res) => res.json())
      .then((result) => {
        setRid(result.id);
        setRnombre(result.nombrecliente);
        setRtelefono(result.Telefono);
        setRemail(result.e_mail);
        setRrestaurante(result.Restaurante);
        // console.log(result.id)
      });
  }, [id]);

  const handleSubmit = () => {
    console.log("A name was submitted: ");
    // event.preventDefault();
    var data = {
      // 'id': rid,
      nombrecliente: rnombre,
      Telefono: rtelefono,
      e_mail: remail,
      Restaurante: rrestaurante,
    };
    
    const result = AdminService.updateUser(rid, data)
      // console.log(result)
      .then((result) => {
        // alert(result['message'])
        // if (result['status'] === 'ok') {
        alert("Se editó el Manager correctamente");
        window.location.href = "/app/managers";
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [rid, setRid] = useState("");
  const [rnombre, setRnombre] = useState("");
  const [rtelefono, setRtelefono] = useState("");
  const [remail, setRemail] = useState("");
  const [rrestaurante, setRrestaurante] = useState("");
  return (
    <>
      <PageTitle>Editar Manager</PageTitle>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label>
          <span>Nombre Manager</span>
          <Input className="mt-1" value={rnombre}
            onChange={(e) => setRnombre(e.target.value)}
          />
        </Label>

        <Label className="mt-4">
          <span>ID Manager</span>
          <Input disabled className="mt-1" value={rid} 
            onChange={(e) => setRid(e.target.value)}
          />
        </Label>

        <Label className="mt-4">
          <span>Correo Electronico</span>
          <Input className="mt-1" value={remail} 
            onChange={(e) => setRemail(e.target.value)}
          />
        </Label>

        
        <Label className="mt-4">
          <span>Telefono</span>
          <Input className="mt-1" value={rtelefono} 
            onChange={(e) => setRtelefono(e.target.value)}
          />
        </Label>

        <Label className="mt-4">
          <span>Restaurante</span>
          <Input className="mt-1" value={rrestaurante} 
            onChange={(e) => setRrestaurante(e.target.value)}
          />
        </Label>


        <div className="mt-6 flex justify-center" check>
          <Button iconRight={EditIcon} onClick={() => {handleSubmit()}} >
            <span>Editar Domiciliario</span>
          </Button>
        </div>
      </div>

      {/* <SectionTitle>Validation</SectionTitle>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label>
          <span>Invalid input</span>
          <Input className="mt-1" valid={false} placeholder="Jane Doe" />
          <HelperText valid={false}>Your password is too short.</HelperText>
        </Label>

        <Label className="mt-4">
          <span>Valid input</span>
          <Input className="mt-1" valid={true} placeholder="Jane Doe" />
          <HelperText valid={true}>Your password is strong.</HelperText>
        </Label>

        <Label className="mt-4">
          <span>Helper text</span>
          <Input className="mt-1" placeholder="Jane Doe" />
          <HelperText>Your password must be at least 6 characters long.</HelperText>
        </Label>
      </div> */}

      {/* <!-- Inputs with icons --> */}
      {/* <SectionTitle>Icons</SectionTitle> */}

      {/* <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label>
          <span>Icon left</span>
        
          <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
            <input
              className="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
              placeholder="Jane Doe"
            />
            <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
              <MailIcon className="w-5 h-5" aria-hidden="true" />
            </div>
          </div>
        </Label>

        <Label className="mt-4">
          <span className="text-gray-700 dark:text-gray-400">Icon right</span>

          <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
            <input
              className="block w-full pr-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
              placeholder="Jane Doe"
            />
            <div className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
              <MailIcon className="w-5 h-5" aria-hidden="true" />
            </div>
          </div>
        </Label>
      </div> */}

      {/*   
      <SectionTitle>Buttons</SectionTitle>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label>
          <span>Button left</span>
          <div className="relative">
            <input
              className="block w-full pl-20 mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
              placeholder="Jane Doe"
            />
            <button className="absolute inset-y-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-l-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
              Click
            </button>
          </div>
        </Label>

        <Label className="mt-4">
          <span>Button right</span>
          <div className="relative text-gray-500 focus-within:text-purple-600">
            <input
              className="block w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
              placeholder="Jane Doe"
            />
            <button className="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
              Click
            </button>
          </div>
        </Label>
      </div> */}
    </>
  );
}

export default EditarRestaurante;
