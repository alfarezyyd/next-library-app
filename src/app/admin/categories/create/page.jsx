"use client"
import Wrapper from "@/components/Wrapper";
import {Button, Input, Textarea} from "@nextui-org/react";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";

// Import FilePond styles
import {useRouter} from "next/navigation";

// Register the plugins


export default function Page() {
  const [accessToken, setAccessToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [payloadFormData, setPayloadFormData] = useState({
    name: "",
    description: "",
  });
  const [userError, setUserError] = useState({});
  const {push} = useRouter();
  useEffect(() => {
    setAccessToken(Cookies.get("accessToken"));
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setUserError({});
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}categories`, {
        method: 'POST',
        includeCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        }, body: JSON.stringify(payloadFormData),
      });

      const responseBody = await response.json();
      if (response.ok) {
        push('/admin/categories')
      } else {
        console.log(responseBody);
        const errorMessages = {};
        responseBody.errors.message.forEach((error) => {
          errorMessages[error.path[0]] = error.message;
        });
        setUserError(errorMessages)
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false);
    }
  }


  async function onChangeHandler(e) {
    const {name, value} = e.target;
    setPayloadFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  return (<Wrapper additionalClass={"font-fraunces bg-white"}>
      <div className="pt-8 flex flex-col gap-2 items-center pb-4 bg-[#3149BB]">
        <div className="bg-white bg-opacity-10 text-white px-4 py-2 rounded-full text-lg inline backdrop-blur-3xl">
          Admin
        </div>
        <h1 className="font-fraunces text-3xl text-center font-bold text-white">Tambah Data Buku</h1>
      </div>
      <div className="h-auto  p-5 text-black">
        <div className="flex flex-col items-center gap-5 max-w-xs">

          <Input
            isRequired
            type="text"
            label="Name"
            name="name"
            value={payloadFormData.name}
            className="max-w-sm"
            onChange={onChangeHandler}
            isInvalid={userError.name}
            errorMessage={userError.name ? userError.name : ""}
          />

          <Textarea
            label="Description"
            placeholder="Enter your description"
            className="max-w-xs"
            value={payloadFormData.description}
            name="description"
            onChange={onChangeHandler}
            isInvalid={userError.description}
            errorMessage={userError.description ? userError.description : ""}
          />
          <Button color="primary" variant="solid" onClick={handleSubmit} isLoading={loading}>
            Create
          </Button></div>
      </div>
    </Wrapper>
  )
}