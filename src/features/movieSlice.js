import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=3895958800f60fc72a13e33bfb3b650d&language=en-US&page=1";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await axios.get(API_URL);
  return response.data.results;
});

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
