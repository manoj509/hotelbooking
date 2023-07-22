import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../redux/public/publicActions'
import { invalidate } from '../../redux/public/publicSlice'

const Login = () => {
    const { info, error, loading } = useSelector(state => state.public)
    const navigate = useNavigate()
    const dispacth = useDispatch()
    const Formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: yup.object({
            email: yup.string().required().email("email must be required"),
            password: yup.string().required("password must be required")
        }),
        onSubmit: (arg) => {
            dispacth(loginUser(arg))
        }
    })
    useEffect(() => {
        if (info) {
            console.log("hj");
            if (info.role === "admin") {
                navigate("/admin")
            }
            if (info.role === "user") {
                navigate("/")
            }
        }
    }, [info])

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                dispacth(invalidate("error"))
            }, 2000)
        }
        // cleanup
    }, [error])


    return (
        <>
            <div className="container-fluid">
                <div class=" p-5">
                    <div class="card-body shadow-lg">
                        <div class="row mt p-4">
                            <div className='text-center'>
                                {error && <div class="alert fs-2">
                                    {error}
                                </div>}
                            </div>
                            <div class=" d-none d-md-block col-md-7 text-center ">
                                <div className='  mb-5'>
                                    <img className='border border-opacity-10 border-5 border-primary' height={400} width={700} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStRvqDWf0DumdgcfNhsE-D9ipJJc-usWJkWg&usqp=CAU" alt="" />
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-5">
                                <div class="">
                                    <h1 class="">Login</h1>
                                    <div class="card-body mt-2">
                                        <form onSubmit={Formik.handleSubmit}>
                                            <div>
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
                                                    type="password"
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
                                                Login
                                            </button>
                                        </form>
                                        <p class="text-center mt-3">
                                            Dont Have Account?  <Link className='mt-5' to='/register'>Create An Account</Link>
                                        </p>

                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>

                </div >
            </div >
        </>
    )
}

export default Login