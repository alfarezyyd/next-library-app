"use client"
import Wrapper from "@/components/Wrapper";
import Navbar from "@/components/Navbar";
import {Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";
import {FaPen, FaTrash} from "react-icons/fa6";
import Link from "next/link";

export default function Page() {
  return (
    <Wrapper additionalClass={"font-fraunces bg-[#3149BB]"}>
      <div className="pt-8 flex flex-col gap-2 items-center pb-4">
        <div className="bg-white bg-opacity-10 text-white px-4 py-2 rounded-full text-lg inline backdrop-blur-3xl">
          Admin
        </div>
        <h1 className="font-fraunces text-3xl text-center font-bold text-white">Manage Books</h1>
      </div>
      <div className="h-screen bg-zinc-200 p-5 text-black">
        <Button as={Link} href={"/admin/books/create"} color="primary" className={"my-4"} variant="shadow">
          Tambah Data
        </Button>
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>STATUS</TableColumn>
            <TableColumn className={"text-center"}>ACTIVE</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>
                <div className="flex flex-row gap-4 justify-center">
                  <Button isIconOnly color="primary" aria-label="Edit">
                    <FaPen/>
                  </Button>
                  <Button isIconOnly color="danger" aria-label="Edit">
                    <FaTrash/>
                  </Button>
                </div>
              </TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </div>
      <Navbar whichActive={'Notification'}/>
    </Wrapper>
  )
}