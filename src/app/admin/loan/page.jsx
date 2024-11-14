"use client"
import Wrapper from "@/components/Wrapper";
import Navbar from "@/components/Navbar";
import {
  Button,
  DateInput,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure
} from "@nextui-org/react";
import {FaPen, FaTrash} from "react-icons/fa6";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {CalendarDate, parseDate} from "@internationalized/date";

export default function Page() {
  const [accessToken, setAccessToken] = useState("");
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const [loading, setLoading] = useState(false);
  const [allLoan, setAllLoan] = useState([]);
  const [activeLoan, setActiveLoan] = useState();
  const [returnDate, setReturnDate] = useState(new Date().toISOString().split("T")[0]);
  useEffect(() => {
    setAccessToken(Cookies.get("accessToken"));
  }, [])
  useEffect(() => {
    if (accessToken) {
      fetchAllLoans()
    }
  }, [accessToken])
  const fetchAllLoans = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}loans`, {
        method: 'GET',
        includeCredentials: true,
        headers: {
          Accept: 'application/json', 'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      const responseBody = await response.json();
      if (response.ok) {
        console.log(responseBody['result']['data']);
        setAllLoan(responseBody['result']['data']);
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
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}loans/${id}`, {
        method: 'DELETE',
        includeCredentials: true,
        headers: {
          Accept: 'application/json', 'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      const responseBody = await response.json();
      if (response.ok) {
        setAllLoan(responseBody['result']['data']);
        setAllLoan((prevAllLoan) => prevAllLoan.filter((loan) => loan.id !== id));
      } else {
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false);
    }
  }

  const formatDate = (dateObj) => {
    const day = String(dateObj.day).padStart(2, '0'); // Pastikan 2 digit
    const month = String(dateObj.month).padStart(2, '0'); // Pastikan 2 digit
    const year = dateObj.year;

    return `${year}-${month}-${day}`;
  };
  useEffect(() => {

  }, [allLoan])

  async function triggerReturn() {
    setLoading(true);
    console.log(returnDate);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}loans/${activeLoan.id}`, {
        method: 'PUT',
        includeCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          bookId: activeLoan.book.id,
          returnDate: formatDate(returnDate),
        }),
      });

      const responseBody = await response.json();
      if (response.ok) {
        onOpenChange(false)
      } else {
        console.log(responseBody);
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false);
    }

  }


  return (
    <Wrapper additionalClass={"font-fraunces bg-[#3149BB]"}>
      <div className="pt-8 flex flex-col gap-2 items-center pb-4">
        <div className="bg-white bg-opacity-10 text-white px-4 py-2 rounded-full text-lg inline backdrop-blur-3xl">
          Admin
        </div>
        <h1 className="font-fraunces text-3xl text-center font-bold text-white">Manage Loans</h1>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <div className={"text-black"}>
              <ModalHeader className="flex flex-col gap-1 text-black">Log in</ModalHeader>
              <ModalBody>
                <DateInput
                  label={"Return Date"}
                  isRequired
                  color={"primary"}
                  value={parseDate(activeLoan.returnDate.split("T")[0])}
                  defaultValue={parseDate(new Date().toISOString().split("T")[0])}
                  placeholderValue={new CalendarDate(1995, 11, 6)}
                  onChange={(date) => setReturnDate(date)} // date adalah nilai yang dipilih
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={triggerReturn}>
                  Submit
                </Button>
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
      <div className="h-screen bg-zinc-200 p-5 text-black">
        {!loading &&
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>BOOK NAME</TableColumn>
              <TableColumn>NAME</TableColumn>
              <TableColumn>LOAN DATE</TableColumn>
              <TableColumn>RETURN DATE</TableColumn>
              <TableColumn>AMERCEMENT</TableColumn>
              <TableColumn>ACTION</TableColumn>
            </TableHeader>
            <TableBody>
              {allLoan.map((loan) => (
                <TableRow key={`loan-${loan.id}`}>
                  <TableCell>{loan.book.title}</TableCell>
                  <TableCell>{loan.user.fullName}</TableCell>
                  <TableCell>{loan.loanDate?.substring(0, 10)}</TableCell>
                  <TableCell>{loan.returnDate?.substring(0, 10)}</TableCell>
                  <TableCell>{loan.amercement}</TableCell>
                  <TableCell>
                    <div className="flex flex-row gap-4 justify-center">
                      <Button isIconOnly color="primary" aria-label="Edit" onPress={() => {
                        onOpen()
                        setActiveLoan(loan)
                      }}
                              href={`/admin/loans/update/${loan.id}`}>
                        <FaPen/>
                      </Button>
                      <Button isIconOnly color="danger" aria-label="Edit" onClick={() => {
                        triggerDelete(loan.id)
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