import React, { useState, useEffect } from 'react'


import deliveryImagen from "../assets/img/delivery-man.png";
import SectionTitle from '../components/Typography/SectionTitle'
import InfoCard from '../components/Cards/InfoCard'
import PageTitle from '../components/Typography/PageTitle'
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from '../icons'
import { EditIcon, TrashIcon } from '../icons'
import RoundIcon from '../components/RoundIcon'
import * as AdminService from "../Services/AdminService";
import response from '../utils/demo/tableData'
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
} from '@windmill/react-ui'

import {
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  lineLegends,
} from '../utils/demo/chartsData'

// const restaurants = response.concat([])


function Domiciliario() {


  const [domiciliarios, setDomiciliarios] = useState([]);

  const DomiciliariosGet = () => {
    return AdminService.getDomiciliarios()
      .then((domiciliarios) => {
        setDomiciliarios(domiciliarios);
        const d = domiciliarios.slice((pageTable2 - 1) * resultsPerPage, pageTable2 * resultsPerPage)
        setDataTable2(d)
      })
  }

  const [page, setPage] = useState(1)
  const [data, setData] = useState([])

  // pagination setup
  const resultsPerPage = 10
  const totalResults = domiciliarios.length

  // setup pages control for every table
  const [pageTable2, setPageTable2] = useState(1)

  const [dataTable2, setDataTable2] = useState([])



  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    DomiciliariosGet()
  }, [pageTable2])


  // pagination change control
  function onPageChange(p) {
    setPage(p)
  }

  // pagination change control
  function onPageChangeTable2(p) {
    // setPage(p)
    setPageTable2(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    const d = domiciliarios.slice((page - 1) * resultsPerPage, page * resultsPerPage)
    console.log(d)
    setData(d)
  }, [page])

  const RestaurantDelete = (id) => {
    // console.log("sdfsdf}", id)
    AdminService.removeRestaurant(id)
    .then(
      (result) => {
        alert(result)
        window.location.href = '/';
      }
    )
  }

  const DomiciliarioDelete = (id) => {
    // console.log("sdfsdf}", id)
    AdminService.removeRestaurant(id)
    .then(
      (result) => {
        alert(result)
        window.location.href = '/domiciliarios';
      }
    )
  }

  const DomiciliarioEdit = (id) => {
    // console.log("sdfsdf}", id)
    window.location.href = 'domiciliarioEditar/' + id;

  }


  return (
    <>
      <PageTitle>Domiciliario</PageTitle>


      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-flow-col xl:grid-cols-4">
        <InfoCard title="Total Usuarios" value={domiciliarios.length}>
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>


      </div>
      <SectionTitle>Lista de Domiciliarios</SectionTitle>
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Usuarios</TableCell>
              <TableCell>Correo Electronico</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Id Usuario</TableCell>
              <TableCell>Acciones</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {dataTable2.map((domiciliario, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <Avatar className="hidden mr-3 md:block" src={deliveryImagen} alt="User avatar" />
                    <div>
                      <p className="font-semibold">{domiciliario.nombrecliente}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{domiciliario.Telefono}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm"> {domiciliario.e_mail}</span>
                </TableCell>
                <TableCell>
                  <Badge type={domiciliario.Estado != "1" ? "success" : "danger"}>{domiciliario.Estado != "1" ? "Activo" : "Activo"}</Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{domiciliario.id}</span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <Button onClick={() => DomiciliarioEdit(domiciliario.id)} layout="link" size="icon" aria-label="Edit">
                      <EditIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                    <Button onClick={() => DomiciliarioDelete(domiciliario.id)}  layout="link" size="icon" aria-label="Delete">
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
  )
}

export default Domiciliario
