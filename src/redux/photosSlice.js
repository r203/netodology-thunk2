import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  photos: [
    'https://avatars.mds.yandex.net/get-marketcms/1523779/img-5f5fd628-2d0b-4400-b856-797f22561c05.png/optimize',
    'https://avatars.mds.yandex.net/get-mpic/6236983/img_id1743618275562799298.jpeg/200x200',
  ],
  
};

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    addPhoto(state, action) {
      state.photos.unshift(action.payload);
    }
  },

});

export const { addPhoto } = photosSlice.actions;


export default photosSlice.reducer;
