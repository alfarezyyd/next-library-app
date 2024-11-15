"use client"
import Image from "next/image";
import {Button, Input} from "@nextui-org/react";
import Wrapper from "@/components/Wrapper";
import {useEffect, useState} from "react";
import {Bounce, toast} from "react-toastify";
import Link from "next/link";
import {EyeSlashFilledIcon} from "@/components/icon/EyeSlashFilledIcon";
import {EyeFilledIcon} from "@/components/icon/EyeFilledIcon";
import {useRouter} from "next/navigation";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [userError, setUserError] = useState("");
  const [state, setState] = useState("send");
  const [token, setToken] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const {push} = useRouter();
  const [payloadReset, setPayloadReset] = useState({
    password: "",
    confirmPassword: "",
  })

  const toggleVisibility = () => setIsVisible(!isVisible);

  useEffect(() => {
  }, []);

  const triggerSendOtp = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}authentication/generate-otp`, {
        method: 'POST',
        headers: {
          Accept: 'application/json', 'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        })
      });

      if (response.ok) {
        toast.success('🦄 OTP berhasil dikirim', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce
        });
        setState("verify")
      } else {
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false);
    }
  }

  async function triggerVerify() {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}authentication/verify-otp`, {
        method: 'POST',
        headers: {
          Accept: 'application/json', 'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: token,
        })
      });

      const responseBody = await response.json();
      if (response.ok) {
        toast.success('🦄 OTP valid', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce
        });
        setState("reset")
      } else {
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false);
    }
  }

  async function triggerReset() {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}authentication/reset-password`, {
        method: 'POST',
        headers: {
          Accept: 'application/json', 'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password: payloadReset.password,
          confirmPassword: payloadReset.confirmPassword,
        })
      });

      const responseBody = await response.json();
      if (response.ok) {
        toast.success('🦄 Password berhasil direset', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce
        });
        push("/auth/login")
      } else {
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false);
    }
  }

  return (
    <Wrapper additionalClass={"bg-sky-200"}>
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
      <div className="flex flex-col justify-center items-center bg-sky-200 gap-4">
        <h1 className="pt-4 font-gabarito text-blue-900 text-3xl text-center font-semibold">
          Perpusyuk!
        </h1>
        {
          state === "send" && (
            <Input
              isRequired
              type="email"
              label="Email"
              className="max-w-xs"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              isInvalid={userError}
              errorMessage={userError}
            />
          )
        }
        {
          state === "verify" && (
            <Input
              isRequired
              type="text"
              label="One Time Password"
              className="max-w-xs"
              name="token"
              onChange={(e) => {
                setToken(e.target.value);
              }}
              isInvalid={userError}
              errorMessage={userError}
            />
          )
        }

        {
          state === "reset" && (
            <div className="flex flex-col justify-center items-center gap-4 max-w-lg text-black">
              <Input
                label="Password"
                variant="solid"
                placeholder="Enter your password"
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
                onChange={(e) => {
                  setPayloadReset({
                    ...payloadReset, password: e.target.value
                  })
                }}
              />
              <Input
                label="Confirm Password"
                variant="solid"
                placeholder="Enter your password"
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
                onChange={(e) => {
                  setPayloadReset({
                    ...payloadReset, confirmPassword: e.target.value
                  })
                }}
              />
            </div>
          )
        }

        {
          state === "verify" && (
            <Button color="primary" onClick={triggerVerify} isLoading={loading} type="submit">
              Verify OTP
            </Button>
          )
        }
        {
          state === "reset" && (
            <Button color="primary" onClick={triggerReset} isLoading={loading} type="submit">
              Reset Password
            </Button>
          )
        }
        {(state === "verify" || state === "send") && (
          <Button color="primary" onClick={triggerSendOtp} isLoading={loading} type="submit"
                  variant={state === "verify" ? "ghost" : "solid"}>
            Kirim OTP
          </Button>
        )}
        <Link href="/auth/login" className="relative inline-block text-blue-600">
          <span className="hover-underline-effect">Kembali ke Login</span>
        </Link>

      </div>
    </Wrapper>
  )
}
