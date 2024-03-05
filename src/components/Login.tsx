
import { useFormik } from 'formik';
import * as yup from 'yup';
export default function Login() {


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            pass: '',
        },
        validationSchema: yup.object({
            name: yup.string().min(2, "Name should be more than two character").required(),
            email: yup.string().email("Please provide a valid email").required(),
            pass: yup.string().min(4, "Password should be more than four character").required(),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm({ values: { name: '', email: '', pass: '' } })
        },

    });
    const nameError = formik.touched.name && formik.errors.name && <samp>{formik.errors.name}</samp>;

    const emailError = formik.touched.email && formik.errors.email && <samp>{formik.errors.email}</samp>;

    const passError = formik.touched.pass && formik.errors.pass && <samp>{formik.errors.pass}</samp>;
    console.error(formik.errors.name);

    const loginForm =
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" value={formik.values.name} onChange={formik.handleChange} />
                <br />
                {nameError}
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} />
                <br />
                {emailError}
            </div>
            <div>
                <label htmlFor="pass">Pass: </label>
                <input type="text" name="pass" id="pass" value={formik.values.pass} onChange={formik.handleChange} />
                <br />
                {passError}
            </div>
            <button type="submit">Login</button>

        </form>

    return (
        <>
            {loginForm}
        </>
    )

}
