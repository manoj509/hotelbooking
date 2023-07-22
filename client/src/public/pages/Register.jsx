import React, { useEffect } from 'react'
import { useFormik } from "formik";
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/public/publicActions';
import { invalidate } from '../../redux/public/publicSlice';
const Register = () => {

    const { register, error, loading } = useSelector(state => state.public)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const Formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        validationSchema: yup.object({
            name: yup.string().required("name must be required"),
            email: yup.string().required().email("email must be required"),
            password: yup.string().required("password must be required")
        }),
        onSubmit: (arg) => {
            dispatch(registerUser({
                name: arg.name,
                email: arg.email,
                password: arg.password,
                active: true,
                role: "user",
            }))
        }
    })
    useEffect(() => {
        if (register) {
            navigate("/login")
        }
    }, [register])
    useEffect(() => {
        let timer
        if (error) {
            timer = setTimeout(() => {
                dispatch(invalidate("error"))
            }, 2000)
        }
        return () => clearTimeout(timer)  // cleanup
    }, [error])

    return (
        <>
            <div className="container-fluid">
                <div class=" p-5">
                    <div class="card-body shadow-lg bg-opacity-25 ">
                        <div class="row mt p-4">
                            <div className='text-center'>
                                {error && <div class="alert fs-2">
                                    {error}
                                </div>}
                            </div>
                            <div class="d-none d-md-block col-md-7 text-center ">
                                <div className='  mb-5'>
                                    <img className='border border-opacity-10 border-5 border-warning ' height={400} width={700} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnrUDl-B_PRpVyhH2Kb9tuIBzzs3B6y-mpeA&usqp=CAU" alt="" />
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-5">
                                <div class="">
                                    <h1 class="">Signup</h1>
                                    <div class="card-body mt-2">
                                        <form onSubmit={Formik.handleSubmit}>
                                            <div>
                                                <label for="name" class="form-label">First name</label>
                                                <input
                                                    type="text"
                                                    name='name'
                                                    onChange={Formik.handleChange}
                                                    onBlur={Formik.touched.name}
                                                    value={Formik.values.name}
                                                    class={
                                                        Formik.touched.name && Formik.errors.name ? "is-invalid form-control" : "form-control"
                                                    }
                                                    id="name"
                                                    placeholder="Enter your name"
                                                />
                                                <div class="valid-feedback">Looks good!</div>
                                                <div class="invalid-feedback">{Formik.errors.name}.</div>
                                            </div>
                                            <div class="mt-2">
                                                <label for="email" class="form-label">First Email</label>
                                                <input
                                                    type="text"
                                                    name='email'
                                                    onChange={Formik.handleChange}
                                                    value={Formik.values.email}
                                                    onBlur={Formik.touched.email}
                                                    class={
                                                        Formik.touched.email && Formik.errors.email ? "is-invalid form-control" : "form-control"
                                                    }
                                                    id="email"
                                                    placeholder="Enter Your Email"
                                                />
                                                <div class="valid-feedback">Looks good!</div>
                                                <div class="invalid-feedback">{Formik.errors.email}.</div>
                                            </div>
                                            <div class="mt-2">
                                                <label for="password" class="form-label">Password</label>
                                                <input
                                                    type="text"
                                                    name='password'
                                                    onChange={Formik.handleChange}
                                                    value={Formik.values.password}
                                                    onBlur={Formik.touched.password}
                                                    class={
                                                        Formik.touched.password && Formik.errors.password ? "is-invalid form-control" : "form-control"
                                                    }
                                                    id="password"
                                                    placeholder="Enter Your Password"
                                                />
                                                <div class="valid-feedback">Looks good!</div>
                                                <div class="invalid-feedback">{Formik.errors.password}.</div>
                                            </div>
                                            <button type="submit" class="btn btn-outline-primary w-100 mt-3">
                                                Signup
                                            </button>
                                        </form>
                                        <p class="text-center mt-3">
                                            Already Have Account? <Link className='mt-5' to='/login'>Register</Link>
                                        </p>

                                    </div>
                                </div>


                            </div>
                        </div>



                    </div>
                </div>

            </div >

        </>
    )
}

export default Register