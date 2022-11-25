import React, { useState, useEffect } from "react";

import SectionTitle from "../components/Typography/SectionTitle";
import InfoCard from "../components/Cards/InfoCard";
import PageTitle from "../components/Typography/PageTitle";
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from "../icons";
import { EditIcon, TrashIcon } from "../icons";
import RoundIcon from "../components/RoundIcon";
import * as AdminService from "../Services/AdminService";
import response from "../utils/demo/tableData";
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Button,
  Badge,
  Pagination,
} from "@windmill/react-ui";

import {
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  lineLegends,
} from "../utils/demo/chartsData";

// const restaurants = response.concat([])

function Restaurantes() {
  const [restaurants, setRestaurants] = useState([]);

  const RestaurantsGet = () => {
    return AdminService.getRestaurants().then((restaurants) => {
      setRestaurants(restaurants);
      const d = restaurants.slice(
        (pageTable2 - 1) * resultsPerPage,
        pageTable2 * resultsPerPage
      );
      setDataTable2(d);
    });
  };

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = restaurants.length;

  // setup pages control for every table
  const [pageTable2, setPageTable2] = useState(1);

  const [dataTable2, setDataTable2] = useState([]);

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    RestaurantsGet();
  }, [pageTable2]);

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // pagination change control
  function onPageChangeTable2(p) {
    // setPage(p)
    setPageTable2(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    const d = restaurants.slice(
      (page - 1) * resultsPerPage,
      page * resultsPerPage
    );
    console.log(d);
    setData(d);
  }, [page]);

  const RestaurantDelete = (id) => {
    // console.log("sdfsdf}", id)
    AdminService.removeRestaurant(id).then((result) => {
      alert(result);
      window.location.href = "restaurantes";
    });
  };

  const RestaurantEdit = (id) => {
    // console.log("sdfsdf}", id)
    window.location.href = "restauranteEditar/" + id;
  };
  const   RestaurantCreate = () => {
    // console.log("sdfsdf}", id)
    window.location.href = "restauranteCrear/";
  };



  return (
    <>
      <PageTitle>Restaurantes</PageTitle>

      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-flow-col xl:grid-cols-4">
        <InfoCard title="Total Restaurantes" value={restaurants.length}>
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>
      </div>
      <SectionTitle>Lista de Restaurantes</SectionTitle>
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Restaurante</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Horario</TableCell>
              <TableCell>Acciones</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {dataTable2.map((restaurant, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <Avatar
                      className="hidden mr-3 md:block"
                      src={restaurant.Imagen}
                      alt="User avatar"
                    />
                    <div>
                      <p className="font-semibold">{restaurant.Nombre}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {restaurant.Telefono}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm"> {restaurant.Localización}</span>
                </TableCell>
                <TableCell>
                  <Badge
                    type={restaurant.Estado === "1" ? "success" : "danger"}
                  >
                    {restaurant.Estado === "1" ? "Abierto" : "Cerrado"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{restaurant.Horario}</span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <Button
                      onClick={() => RestaurantEdit(restaurant.id)}
                      layout="link"
                      size="icon"
                      aria-label="Edit"
                    >
                      <EditIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                    <Button
                      onClick={() => RestaurantDelete(restaurant.id)}
                      layout="link"
                      size="icon"
                      aria-label="Delete"
                    >
                      <TrashIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable2}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>
      <div className="mt-2 mb-10 flex justify-center">
        <Button  onClick={() => RestaurantCreate()} layout="outline" to="/dashboard">Crear Restaurante</Button>
      </div>
    </>
  );
}

export default Restaurantes;
