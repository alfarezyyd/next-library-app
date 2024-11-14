"use client"
import Wrapper from "@/components/Wrapper";
import {Button, Input, Select, SelectItem, Textarea} from "@nextui-org/react";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {Loading} from "@/components/Loading";
import {FilePond, registerPlugin} from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import {useParams, useRouter} from "next/navigation";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)


export default function Page() {
  const [accessToken, setAccessToken] = useState("");
  const [book, setBook] = useState();
  const [loading, setLoading] = useState(true);
  const [payloadFormData, setPayloadFormData] = useState({
    categoryId: "",
    title: "",
    author: "",
    publisher: "",
    publicationYear: "",
    pagesAmount: "",
    description: ""
  });
  const [userError, setUserError] = useState({});
  const {push} = useRouter();
  const [files, setFiles] = useState([]);
  const routerParam = useParams();
  const [allCategory, setAllCategory] = useState();


  useEffect(() => {
    setAccessToken(Cookies.get("accessToken"));
  }, [])
  useEffect(() => {
    if (accessToken && routerParam.id) {
      fetchBook(routerParam.id)
    }
  }, [accessToken, routerParam]);
  useEffect(() => {
    fetchAllCategory()
  }, [accessToken]);
  const fetchBook = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}books/${id}`, {
        method: 'GET',
        includeCredentials: true,
        headers: {
          Accept: 'application/json', 'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      const responseBody = await response.json();
      if (response.ok) {
        setBook(responseBody['result']['data']);
        setPayloadFormData({
          ...responseBody['result']['data'],
          categoryId: responseBody['result']['data']['category']['id'],
        })
        setFiles([{
          source: `${process.env.NEXT_PUBLIC_BACKEND_URL}public/assets/books-resources/${responseBody['result']['data']['imagePath']}`,
          options: {type: 'input'}
        }])
        console.log(responseBody['result']['data']);
      } else {
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setUserError({});
    try {
      const formDataPayload = new FormData();
      for (const [key, value] of Object.entries(payloadFormData)) {
        formDataPayload.append(key, value);
      }
      formDataPayload.append('image', files[0].file)
      for (const [key, value] of formDataPayload.entries()) {
        console.log(key, value
        );
      }
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}books/${book.id}`, {
        method: 'PUT',
        includeCredentials: true,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`,
        }, body: formDataPayload,
      });

      const responseBody = await response.json();
      if (response.ok) {
        push('/admin/books')
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

  const fetchAllCategory = async () => {
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

  return (
    !loading ? (
      <Wrapper additionalClass={"font-fraunces bg-[#3149BB]"}>
        <div className="pt-8 flex flex-col gap-2 items-center pb-4">
          <div className="bg-white bg-opacity-10 text-white px-4 py-2 rounded-full text-lg inline backdrop-blur-3xl">
            Admin
          </div>
          <h1 className="font-fraunces text-3xl text-center font-bold text-white">Update Data Buku</h1>
        </div>
        <div className="h-fit bg-white p-5 text-black">
          <div className="flex flex-col items-center gap-5 max-w-xs">
            {allCategory &&
              <Select
                isRequired
                label="Kategori"
                name="categoryId"
                selectedKeys={book?.categoryId}
                placeholder="Pilih kategori buku"
                className="max-w-xs text-black"
                onChange={onChangeHandler}
                listboxProps={{
                  itemClasses: {
                    base: [
                      "rounded-md",
                      "text-default-500",
                      "transition-opacity",
                      "data-[hover=true]:text-foreground",
                      "data-[hover=true]:bg-default-100",
                      "dark:data-[hover=true]:bg-default-50",
                      "data-[selectable=true]:focus:bg-default-50",
                      "data-[pressed=true]:opacity-70",
                      "data-[focus-visible=true]:ring-default-500",
                    ],
                  },
                }}
              >
                {allCategory.map((category) => (
                  <SelectItem key={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </Select>
            }
            <Input
              isRequired
              type="text"
              label="Judul"
              name="title"
              value={payloadFormData.title}
              className="max-w-sm"
              onChange={onChangeHandler}
              isInvalid={userError.title}
              errorMessage={userError.title ? userError.title : ""}
            />
            <Input
              isRequired
              type="text"
              label="Author"
              name="author"
              value={payloadFormData.author}
              className="max-w-sm"
              onChange={onChangeHandler}
              isInvalid={userError.author}
              errorMessage={userError.author ? userError.author : ""}

            />
            <Input
              isRequired
              type="text"
              label="Publisher"
              name="publisher"
              value={payloadFormData.publisher}
              className="max-w-sm"
              onChange={onChangeHandler}
              isInvalid={userError.publisher}
              errorMessage={userError.publisher ? userError.publisher : ""}

            />
            <Input
              isRequired
              type="text"
              label="Publication Year"
              name="publicationYear"
              value={payloadFormData.publicationYear}
              className="max-w-sm"
              onChange={onChangeHandler}
              isInvalid={userError.publicationYear}
              errorMessage={userError.publicationYear ? userError.publicationYear : ""}

            />
            <Input
              isRequired
              type="text"
              label="Pages Amount"
              name="pagesAmount"
              value={payloadFormData.pagesAmount}
              className="max-w-sm"
              onChange={onChangeHandler}
              isInvalid={userError.pagesAmount}
              errorMessage={userError.pagesAmount ? userError.pagesAmount : ""}

            />

            <div className="w-full">
              <p className={"text-sm"}>Gambar Buku</p>
              <FilePond
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={false}
                maxFiles={1}
                name="files" /* sets the file input name, it's filepond by default */
                labelIdle='Seret & letakkan gambar or <span class="filepond--label-action">Browse</span>'
              />
            </div>
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
            <Button color="primary" variant="solid" onClick={handleSubmit}>
              Create
            </Button></div>
        </div>
      </Wrapper>
    ) : (
      <Loading/>
    )
  )
}