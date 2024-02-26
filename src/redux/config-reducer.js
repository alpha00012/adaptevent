import { createSlice } from '@reduxjs/toolkit';

const configSlice = createSlice({
    name: 'config',
    initialState: {
        loading: true,
        showFullScreen: false,
        imageUrl: '',
        isMobile: false,
        isTablet: false,
        isDesktop: true
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setSizeMode: (state, action) => {
            state.isMobile = action.payload.isMobile;
            state.isTablet = action.payload.isTablet;
            state.isDesktop = action.payload.isDesktop;
        },
        setShowFullScreen: (state, action) => {
            state.showFullScreen = action.payload.showFullScreen;
            state.imageUrl = action.payload.imageUrl ;
        }
    }
});

export const { setLoading, setSizeMode, setShowFullScreen } = configSlice.actions;

export default configSlice.reducer;