"use client"
import Image from "next/image";
import {Button, Input, Link} from "@nextui-org/react";
import {FaGoogle} from "react-icons/fa";
import Wrapper from "@/components/Wrapper";
import {useEffect, useState} from "react";
import {EyeSlashFilledIcon} from "@/components/icon/EyeSlashFilledIcon";
import {EyeFilledIcon} from "@/components/icon/EyeFilledIcon";
import Cookies from "js-cookie";
import {useRouter, useSearchParams} from "next/navigation";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [payloadRequest, setPayloadRequest] = useState({});
  const [loading, setLoading] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [userError, setUserError] = useState({});
  const {push} = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setUserError({});
    try {
      console.log(payloadRequest);
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}authentication/sign-in`, {
        method: 'POST', headers: {
          Accept: 'application/json', 'Content-Type': 'application/json',
        }, body: JSON.stringify(payloadRequest),
      });

      const responseBody = await response.json();
      if (response.ok) {
        Cookies.set('accessToken', responseBody['result']['data']['accessToken']);
        push(`${process.env.NEXT_PUBLIC_BASE_URL}/catalog`);  // Redirect to the dashboard or another protected route
      } else {
        setUserError({
          email: 'Email not found nor valid',
          password: 'Password not found nor valid',
        });
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false);
    }
  }

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Ambil token dari URL
    const token = searchParams.get('token');

    if (token) {
      // Simpan token di cookie
      Cookies.set('accessToken', token);

      // Redirect ke halaman dashboard setelah login
      router.push('/catalog');
    } else {
      // Jika tidak ada token, redirect ke halaman login
      router.push('/auth/login');
    }
  }, [searchParams, router]);

  const onChangeHandler = (e) => {
    const {name, value} = e.target
    setPayloadRequest((prevPayloadRequest) => {
      return {...prevPayloadRequest, [name]: value}
    })
  }

  return (
    <Wrapper additionalClass="bg-sky-200">
      <div className="bg-white py-7">
        <Image src="/logo.png" width={200} height={200} alt="Logo" className="mx-auto"/>
      </div>
      <div className="custom-shape-divider-top-1731070628">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25" className="shape-fill"></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5" className="shape-fill"></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"></path>
        </svg>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="pt-4 font-gabarito text-blue-900 text-3xl text-center font-semibold">
          Perpusyuk!
        </h1>
        <Input
          isRequired
          type="email"
          name="email"
          label="Email"
          className="max-w-xs"
          onChange={onChangeHandler}
          isInvalid={userError.email}
          errorMessage={userError.email ? userError.email : ""}
        />
        <Input
          isRequired

          label="Passsword"
          endContent={
            <button className="focus:outline-none" type="button" onClick={toggleVisibility}
                    aria-label="toggle password visibility">
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="max-w-xs"
          name="password"
          onChange={onChangeHandler}
          isInvalid={userError.password}
          errorMessage={userError.password ? userError.password : ""}
        />
        <Button onClick={handleSubmit} color="primary" isLoading={loading}>
          Login
        </Button>
        <Link href="/auth/forgot-password" className="relative inline-block text-blue-600">
          <span className="hover-underline-effect">Lupa Kata Sandi?</span>
        </Link>
        <Button color="primary" className="" variant="bordered" startContent={<FaGoogle/>} as={Link}
                href={`${process.env.NEXT_PUBLIC_BACKEND_URL}authentication/google`}>
          Login By Google
        </Button>
      </div>
    </Wrapper>
  )
}
