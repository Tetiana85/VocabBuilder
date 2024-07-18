import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isModalOpenMobile: false,
    isModalOpenAddWord: false,
    isModalOpenClickWord: false,
    isModalOpenConfirmation: false,
    isModalOpenEdit: false,
    isModalOpenWellDone: false,
    clickWordCoordinates: { x: 0, y: 0 },
    clickWordId: [],
  },
  reducers: {
    openModalMobile: (state) => {
      state.isModalOpenMobile = true;
    },
    closeModalMobile: (state) => {
      state.isModalOpenMobile = false;
    },
    openModalAddWord: (state) => {
      state.isModalOpenAddWord = true;
    },
    closeModalAddWord: (state) => {
      state.isModalOpenAddWord = false;
    },
    openModalClickWord: (state, action) => {
      state.isModalOpenClickWord = true;
      state.clickWordCoordinates = action.payload;
      state.clickWordId = action.payload.wordId;
    },
    closeModalClickWord: (state) => {
      state.isModalOpenClickWord = false;
    },
    openModalConfirmation: (state) => {
      state.isModalOpenConfirmation = true;
    },
    closeModalConfirmation: (state) => {
      state.isModalOpenConfirmation = false;
    },
    openModalEdit: (state) => {
      state.isModalOpenEdit = true;
    },
    closeModalEdit: (state) => {
      state.isModalOpenEdit = false;
    },
    openModalWellDone: (state) => {
      state.isModalOpenWellDone = true;
    },
    closeModalWellDone: (state) => {
      state.isModalOpenWellDone = false;
    },
  },
});

export const modalReducer = modalSlice.reducer;

export const {
  openModalMobile,
  closeModalMobile,
  openModalAddWord,
  closeModalAddWord,
  openModalClickWord,
  closeModalClickWord,
  openModalConfirmation,
  closeModalConfirmation,
  openModalEdit,
  closeModalEdit,
  openModalWellDone,
  closeModalWellDone,
} = modalSlice.actions;

// import { createSlice } from '@reduxjs/toolkit';

// const modalSlice = createSlice({
//   name: 'modal',
//   initialState: {
//     isModalOpenMobile: false,
//     isModalOpenAddWord: false,
//     isModalOpenClickWord: false,
//     isModalOpenConfirmation: false,
//     isModalOpenEdit: false,
//     isModalOpenWellDone: false,
//     clickWordCoordinates: { x: 0, y: 0 },
//     clickWord: null,
//   },
//   reducers: {
//     openModalMobile: (state) => {
//       state.isModalOpenMobile = true;
//     },
//     closeModalMobile: (state) => {
//       state.isModalOpenMobile = false;
//     },
//     openModalAddWord: (state) => {
//       state.isModalOpenAddWord = true;
//     },
//     closeModalAddWord: (state) => {
//       state.isModalOpenAddWord = false;
//     },
//     openModalClickWord: (state, action) => {
//       state.isModalOpenClickWord = true;
//       state.clickWord = action.payload.word;
//       state.clickWordCoordinates = action.payload.coordinates;
//     },
//     closeModalClickWord: (state) => {
//       state.isModalOpenClickWord = false;
//       state.clickWordCoordinates = { x: 0, y: 0 };
//       state.clickWord = null;
//     },
//     openModalConfirmation: (state) => {
//       state.isModalOpenConfirmation = true;
//     },
//     closeModalConfirmation: (state) => {
//       state.isModalOpenConfirmation = false;
//     },
//     openModalEdit: (state) => {
//       state.isModalOpenEdit = true;
//     },
//     closeModalEdit: (state) => {
//       state.isModalOpenEdit = false;
//     },
//     openModalWellDone: (state) => {
//       state.isModalOpenWellDone = true;
//     },
//     closeModalWellDone: (state) => {
//       state.isModalOpenWellDone = false;
//     },
//   },
// });

// export const modalReducer = modalSlice.reducer;

// export const {
//   openModalMobile,
//   closeModalMobile,
//   openModalAddWord,
//   closeModalAddWord,
//   openModalClickWord,
//   closeModalClickWord,
//   openModalConfirmation,
//   closeModalConfirmation,
//   openModalEdit,
//   closeModalEdit,
//   openModalWellDone,
//   closeModalWellDone,
// } = modalSlice.actions;
