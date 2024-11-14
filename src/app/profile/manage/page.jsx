"use client"
import Wrapper from "@/components/Wrapper";
import {Button, Input, Select, SelectItem} from "@nextui-org/react";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";

import {useRouter} from "next/navigation";
import Navbar from "@/components/Navbar";

import {FilePond, registerPlugin} from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)


export default function Page() {
  const [accessToken, setAccessToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState();
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedProgramStudy, setSelectedProgramStudy] = useState("");
  const [filteredPrograms, setFilteredPrograms] = useState([]);


  const faculties = [
    {id: "1", name: "Fakultas Teknik"},
    {id: "2", name: "Fakultas Ilmu Pendidikan dan Keguruan"},
    {id: "3", name: "Fakultas Kesehatan"},
    {id: "4", name: "Fakultas Ilmu Komputer"},
    {id: "5", name: "Fakultas Hukum"},
  ];

  const studyPrograms = [
    {id: "1", name: "Informatika", facultyId: "Fakultas Ilmu Komputer"},
    {id: "2", name: "Sistem Informasi", facultyId: "Fakultas Ilmu Komputer"},
    {id: "3", name: "Pendidikan Matematika", facultyId: "Fakultas Ilmu Pendidikan dan Keguruan"},
    {id: "4", name: "Pendidikan Bahasa Inggris", facultyId: "Fakultas Ilmu Pendidikan dan Keguruan"},
    {id: "5", name: "Teknik Elektro", facultyId: "Fakultas Teknik"},
    {id: "6", name: "Teknik Lingkungan", facultyId: "Fakultas Teknik"},
    {id: "7", name: "Gizi", facultyId: "Fakultas Kesehatan"},
    {id: "8", name: "Ekonomi", facultyId: "Fakultas Hukum"},
  ];
  useEffect(() => {
    // Filter study programs by selected faculty
    const programs = studyPrograms.filter(
      (program) => program.facultyId === selectedFaculty
    );
    setFilteredPrograms(programs);
  }, [selectedFaculty]);

  const [payloadFormData, setPayloadFormData] = useState({
    identificationNumber: "",
    telephone: "",
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
    const formData = new FormData();
    formData.append("faculty", selectedFaculty);
    formData.append("studyProgram", selectedProgramStudy);
    formData.append("telephone", payloadFormData.telephone);
    formData.append("identificationNumber", payloadFormData.identificationNumber);
    formData.append("image", files[0].file)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}informations`, {
        method: 'POST',
        includeCredentials: true,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`,
        }, body: formData,
      });

      const responseBody = await response.json();
      if (response.ok) {
        push('/profile')
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
        <h1 className="font-fraunces text-3xl text-center font-bold text-white">Create Category</h1>
      </div>
      <div className="h-auto  p-5 text-black min-h-screen pb-36">
        <div className="flex flex-col items-center gap-5 max-w-xs lg:mx-auto">

          <Input
            isRequired
            type="text"
            label="Nomor Pokok Mahasiswa"
            name="identificationNumber"
            value={payloadFormData.identificationNumber}
            className="max-w-sm"
            onChange={onChangeHandler}
            isInvalid={userError.identificationNumber}
            errorMessage={userError.identificationNumber ? userError.identificationNumber : ""}
          />

          <Input
            isRequired
            type="text"
            label="Nomor Telephone"
            name="telephone"
            value={payloadFormData.telephone}
            className="max-w-sm"
            onChange={onChangeHandler}
            isInvalid={userError.telephone}
            errorMessage={userError.telephone ? userError.telephone : ""}
          />
          <Select
            isRequired
            label="Fakultas"
            name="faculty"
            placeholder="Pilih Fakultas"
            onSelectionChange={(key) => {
              setSelectedFaculty(key.currentKey)
            }}
            className="max-w-xs"
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
            {faculties.map((faculty) => (
              <SelectItem key={faculty.name}>{faculty.name}</SelectItem>
            ))}
          </Select>

          <Select
            isRequired
            label="Program Studi"
            name="studyProgram"
            placeholder="Pilih Program Studi"
            className="max-w-xs"
            onSelectionChange={(key) => {
              setSelectedProgramStudy(key.currentKey)
            }}
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
            {filteredPrograms.map((program) => (
              <SelectItem key={program.name}>{program.name}</SelectItem>
            ))}
          </Select>
          <div className="w-full">
            <p className={"text-sm"}>Profile</p>
            <FilePond
              files={files}
              onupdatefiles={setFiles}
              allowMultiple={false}
              maxFiles={1}
              name="files" /* sets the file input name, it's filepond by default */
              labelIdle='Seret & letakkan gambar or <span class="filepond--label-action">Browse</span>'
            />
          </div>
          <Button color="primary" variant="solid" onClick={handleSubmit} isLoading={loading}>
            Create
          </Button></div>
      </div>
      <Navbar whichActive={'About'}/>
    </Wrapper>
  )
}