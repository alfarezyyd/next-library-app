"use client"
import Wrapper from "@/components/Wrapper";
import Navbar from "@/components/Navbar";
import {Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";
import {FaPen, FaTrash} from "react-icons/fa6";
import Link from "next/link";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";

export default function Page() {
  const [accessToken, setAccessToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [allCategory, setAllCategory] = useState([]);
  useEffect(() => {
    setAccessToken(Cookies.get("accessToken"));
  }, [])
  useEffect(() => {
    if (accessToken) {
      fetchAllCategories()
    }
  }, [accessToken])
  const fetchAllCategories = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}categories`, {
        method: 'GET',
        includeCredentials: true,
        headers: {
          Accept: 'application/json', 'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      const responseBody = await response.json();
      if (response.ok) {
        setAllCategory(responseBody['result']['data']);
      } else {
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false);
    }
  }

  async function triggerDelete(id) {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}categories/${id}`, {
        method: 'DELETE',
        includeCredentials: true,
        headers: {
          Accept: 'application/json', 'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      if (response.ok) {
        setAllCategory((prevAllCategory) => prevAllCategory.filter((category) => category.id !== id));
      } else {
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {

  }, [allCategory])

  return (
    <Wrapper additionalClass={"font-fraunces bg-[#3149BB]"}>
      <div className="pt-8 flex flex-col gap-2 items-center pb-4">
        <div className="bg-white bg-opacity-10 text-white px-4 py-2 rounded-full text-lg inline backdrop-blur-3xl">
          Admin
        </div>
        <h1 className="font-fraunces text-3xl text-center font-bold text-white">Manage Categories</h1>
      </div>
      <div className="h-screen bg-zinc-200 p-5 text-black">
        <Button as={Link} href={"/admin/categories/create"} color="primary" className={"my-4"} variant="shadow">
          Tambah Data
        </Button>
        {!loading &&
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>NAME</TableColumn>
              <TableColumn className={"text-center"}>ACTIVE</TableColumn>
            </TableHeader>
            <TableBody>
              {allCategory.map((category) => (
                <TableRow key={`category-${category.id}`}>
                  <TableCell>{category.name}</TableCell>
                  <TableCell>
                    <div className="flex flex-row gap-4 justify-center">
                      <Button isIconOnly color="primary" aria-label="Edit" as={Link} href={`/admin/categories/update/${category.id}`}>
                        <FaPen/>
                      </Button>
                      <Button isIconOnly color="danger" aria-label="Edit" onClick={() => {
                        triggerDelete(category.id)
                      }}>
                        <FaTrash/>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        }
      </div>
      <Navbar whichActive={'About'}/>
    </Wrapper>
  )
}