import { createSlice } from "@reduxjs/toolkit"
import { adminAddRooms, adminDeleteRoom, adminGetAllusers, adminGetBookedRooms, adminGetRooms } from "./adminAction"
const adminSlice = createSlice({
    name: "admin",
    initialState: {},
    reducers: {
        invalidaterooms: (state, { payload }) => {
            state.rooms = null
        },
        // invalidate: (state, { payload }) => {
        //     state[payload] = null
        // },
        // logout: (state, { payload }) => {
        //     state.info = payload
        //     localStorage.removeItem("info")
        // }
    },
    extraReducers: builder => {
        builder
            .addCase(adminGetRooms.pending, (state, { payload }) => {
                state.loadings = true
            })
            .addCase(adminGetRooms.fulfilled, (state, { payload }) => {
                state.loadings = false
                state.rooms = payload
            })
            .addCase(adminGetRooms.rejected, (state, { payload }) => {
                state.loadings = false
                state.error = payload
            })
            .addCase(adminGetBookedRooms.pending, (state, { payload }) => {
                state.loadings = true
            })
            .addCase(adminGetBookedRooms.fulfilled, (state, { payload }) => {
                state.loadings = false
                state.allBookedrooms = payload
            })
            .addCase(adminGetBookedRooms.rejected, (state, { payload }) => {
                state.loadings = false
                state.error = payload
            })
            .addCase(adminGetAllusers.pending, (state, { payload }) => {
                state.loadings = true
            })
            .addCase(adminGetAllusers.fulfilled, (state, { payload }) => {
                state.loadings = false
                state.allusers = payload
            })
            .addCase(adminGetAllusers.rejected, (state, { payload }) => {
                state.loadings = false
                state.error = payload
            })
            .addCase(adminAddRooms.pending, (state, { payload }) => {
                state.loadings = true
            })
            .addCase(adminAddRooms.fulfilled, (state, { payload }) => {
                state.loadings = false
                state.roomsAdded = true
            })
            .addCase(adminAddRooms.rejected, (state, { payload }) => {
                state.loadings = false
                state.error = payload
            })
            .addCase(adminDeleteRoom.pending, (state, { payload }) => {
                state.loadings = true
            })
            .addCase(adminDeleteRoom.fulfilled, (state, { payload }) => {
                state.loadings = false
                state.roomdeleted = true
            })
            .addCase(adminDeleteRoom.rejected, (state, { payload }) => {
                state.loadings = false
                state.error = payload
            })

    }
})

export const { invalidaterooms } = adminSlice.actions
export default adminSlice.reducer