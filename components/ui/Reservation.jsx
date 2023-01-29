import Input from "../form/Input"
import Title from "./Title"
import { useFormik } from 'formik'
import { reservationSchema } from "../../schema/reservation"

const Reservation = () => {

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 4000));
        actions.resetForm();
    }

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        phoneNumber: "",
        email: "",
        people: "",
        date: "",
      },
      onSubmit,
      validationSchema: reservationSchema,
    })

    const inputs = [
        {
            id: 1,
            name: "fullName",
            type:"text",
            placeholder: "Your Full Name",
            value: values.fullName,
            errorMessage: errors.fullName,
            touched: touched.fullName,
        },
        {
            id: 2,
            name: "phoneNumber",
            type:"number",
            placeholder: "Your Phone Number",
            value: values.phoneNumber,
            errorMessage: errors.phoneNumber,
            touched: touched.phoneNumber,
        },
        {
            id: 3,
            name: "email",
            type: "email",
            placeholder: "Your Email Address",
            value: values.email,
            errorMessage: errors.email,
            touched: touched.email,
        },
        {
            id: 4,
            name: "people",
            type: "number",
            placeholder: "How Many People?",
            value: values.people,
            errorMessage: errors.people,
            touched: touched.people,
        },
        {
            id: 5,
            name: "date",
            type: "datetime-local",
            value: values.date,
            errorMessage: errors.date,
            touched: touched.date,
        }
    ]

  return (
    <div className="container mx-auto py-12">
      <Title addClass="text-[40px] mb-10">Book A Table</Title>
      <div className="flex justify-between flex-wrap-reverse gap-10">
        <form className="lg:flex-1 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-3">
            {inputs.map((input) => (<Input key={input.id}{...input} onChange={handleChange} onBlur={handleBlur} />))}
          </div>
          <button className="btn-primary mt-4" type="submit">BOOK NOW</button>
        </form>
        <div className="lg:flex-1 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.86071923658!2d-80.1261425849009!3d25.808168683615705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b3665785fd4f%3A0xd0265262319a4f48!2sFaena%20Forum!5e0!3m2!1str!2str!4v1675025858021!5m2!1str!2str"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Reservation