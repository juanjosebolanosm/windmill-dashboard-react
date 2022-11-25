import React, { useState, useEffect } from "react";

import managerImagen from "../assets/img/manager.png";
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

function Productos() {
  const [productos, setProductos] = useState([]);

  const ProductosGet = () => {
    return AdminService.getProducts().then((productos) => {
      setProductos(productos);
      const d = productos.slice(
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
  const totalResults = productos.length;

  // setup pages control for every table
  const [pageTable2, setPageTable2] = useState(1);

  const [dataTable2, setDataTable2] = useState([]);

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    ProductosGet();
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
    const d = productos.slice(
      (page - 1) * resultsPerPage,
      page * resultsPerPage
    );
    console.log(d);
    setData(d);
  }, [page]);

  const ProductoDelete = (id) => {
    // console.log("sdfsdf}", id)
    AdminService.removeRestaurant(id).then((result) => {
      alert(result);
      window.location.href = "/";
    });
  };

  const ProductoEdit = (id) => {
    // console.log("sdfsdf}", id)
    window.location.href = 'productoEditar/' + id;

  }


  return (
    <>
      <PageTitle>Productos</PageTitle>

      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-flow-col xl:grid-cols-4">
        <InfoCard title="Total Productos" value={productos.length}>
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>
      </div>
      <SectionTitle>Lista de Productos</SectionTitle>
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Productos</TableCell>
              <TableCell>Categoria</TableCell>
              <TableCell>id Producto</TableCell>
              <TableCell>Acciones</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {dataTable2.map((producto, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <Avatar
                      className="hidden mr-3 md:block"
                      src={producto.Imagen}
                      alt="User avatar"
                    />
                    <div>
                      <p className="font-semibold">{producto.Nombre}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {producto.Descripcion}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge type="success">{producto.Categoria}</Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{producto.id}</span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <Button onClick={() => ProductoEdit(producto.id)}layout="link" size="icon" aria-label="Edit">
                      <EditIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                    <Button
                      onClick={() => ProductoDelete(producto.id)}
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
    </>
  );
}

export default Productos;
