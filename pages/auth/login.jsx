import { useFormik } from "formik";
import Link from "next/link";
import Input from "../../components/form/Input";
import Title from "../../components/ui/Title";
import { loginSchema } from "../../schema/login";
import { getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";

const Login = () => {
  const { data: session } = useSession();
  const { push } = useRouter();

  const onSubmit = async (values, actions) => {
    const { email, password } = values;
    let options = { redirect: true, email, password };
    try {
      const res = await signIn("credentials", options);
      if (res.status === 200) {
        const users = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`)
        console.log(session)
        const user = users.data.find(user => user.email === session.user.email)
        push(`/profile/${user._id}`)
      }
      actions.resetForm();
    } catch (err) {
      console.log(err);
    }
  };



  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];
  return (
    <div className="container mx-auto">
      <Head>
        <title>Login</title>
      </Head>
      <form
        className="flex flex-col items-center my-20 md:w-1/2 w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <Title addClass="text-[40px] mb-6">Login</Title>
        <div className="flex flex-col gap-y-3 w-full">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
        </div>
        <div className="flex flex-col w-full gap-y-3 mt-6">
          <button className="btn-primary" type="submit">
            LOGIN
          </button>
          <Link href="/auth/register">
            <span className="text-sm underline cursor-pointer text-secondary flex flex-col items-center mt-2">
              Do you have no account?
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};
export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  const user = res.data?.find((user) => user.email === session?.user.email);

  if (session && user) {
    return {
      redirect: {
        destination: "/profile/" + user._id,
        permanent: false,
      },
    };
  }
  return {
    props: {
    },
  };
}
export default Login;
