import { createSlice } from "@reduxjs/toolkit"
import { bookRoom, cheakDate, getKeyAction, initiatePaymentAction, loginUser, registerUser, verifyPaymentAction } from "./publicActions"
const publicSlice = createSlice({
    name: "public",
    initialState: {
        info: JSON.parse(localStorage.getItem("info"))
    },
    reducers: {
        invalidate: (state, { payload }) => {
            state[payload] = null
        },

        invalidatechekdates: (state, { payload }) => {
            state.cheakDates = null
        },
        logout: (state, { payload }) => {
            state.info = payload
            localStorage.removeItem("info")
        },
        paymentVery: (state, { payload }) => {
            state.paymentVerify = payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(registerUser.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.loading = false
                state.register = true
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })

            .addCase(loginUser.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.loading = false
                state.info = payload
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
            .addCase(bookRoom.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(bookRoom.fulfilled, (state, { payload }) => {
                state.loading = false
                state.BookRoom = true
            })
            .addCase(bookRoom.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
            .addCase(cheakDate.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(cheakDate.fulfilled, (state, { payload }) => {
                state.loading = false
                state.cheakDates = payload.result
                state.date = payload.date.date
            })
            .addCase(cheakDate.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
            .addCase(getKeyAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getKeyAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.keyPay = payload
            })
            .addCase(getKeyAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })

            .addCase(initiatePaymentAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(initiatePaymentAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.orderId = payload
            })
            .addCase(initiatePaymentAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })

            .addCase(verifyPaymentAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(verifyPaymentAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.paymentVerify = true
                state.orderId = null
            })
            .addCase(verifyPaymentAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.orderId = null
            })
    }
})

export const { invalidate, logout, invalidatechekdates, paymentVery } = publicSlice.actions
export default publicSlice.reducer