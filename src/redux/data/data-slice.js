import { createSlice } from '@reduxjs/toolkit';
import {
  answersWord,
  createWord,
  deleteWord,
  editWord,
  getAllCategories,
  getAllWord,
  ownWord,
  statisticsWords,
  tasksWords,
} from './data-operation';

const initialState = {
  categories: [],
  isLoadingCategories: false,
  statistics: [],
  isLoadingStatistics: false,
  words: [],
  isLoadingWords: false,
  allWords: [],
  isLoadingAllWords: false,
  tasks: [],
  isLoadingTasks: false,
  answers: [],
  isLoadingAnswers: false,
  isDeleteWord: false,
  isAddWord: false,
};

const handleGetAllCategoriesPending = (state) => {
  state.isLoadingCategories = true;
};

const handleGetAllCategoriesulfilled = (state, { payload }) => {
  state.categories = payload;
  state.isLoadingCategories = false;
};

const handleGetStatisticsWordPending = (state) => {
  state.isLoadingStatistics = true;
};
const handleGetStatisticsWordFulfilled = (state, { payload }) => {
  state.statistics = payload;
  state.isLoadingStatistics = false;
};

const handleGetOwnWordPending = (state) => {
  state.isLoadingWords = true;
};
const handleGetOwnWordFulfilled = (state, { payload }) => {
  state.words = payload;
  state.isLoadingWords = false;
};
const handleGetOwnWordRejected = (state) => {
  state.isLoadingWords = true;
};

const handlegetAllWordsPending = (state) => {
  state.isLoadingAllWords = true;
};
const handlegetAllWords = (state, { payload }) => {
  state.allWords = payload;
  state.isLoadingAllWords = false;
};

const handTasksWordsPending = (state) => {
  state.isLoadingTasks = true;
};
const handTasksWords = (state, { payload }) => {
  state.tasks = payload;
  state.isLoadingTasks = false;
};

const handleAnswersPending = (state) => {
  state.isLoadingAnswers = true;
};
const handleAnswers = (state, { payload }) => {
  state.answers = payload;
  state.isLoadingAnswers = false;
};

const handleDeleteWordPending = (state) => {
  state.isDeleteWord = false;
};

const handleDeleteWordFulfilled = (state) => {
  state.isDeleteWord = true;
};

const handleDeleteWordRejected = (state) => {
  state.isDeleteWord = false;
};

const handleAddWordPending = (state) => {
  state.isAddWord = false;
};

const handleAddWordFulfilled = (state) => {
  state.isAddWord = true;
};

const handleAddWordRejected = (state) => {
  state.isAddWord = false;
};

const handleEditWordPending = (state) => {
  state.isEditingWord = true;
};

const handleEditWordFulfilled = (state, { payload }) => {
  if (Array.isArray(state.words.results)) {
    const index = state.words.results.findIndex(
      (word) => word._id === payload._id
    );
    if (index !== -1) {
      state.words.results[index] = payload;
    }
  } else {
    console.error('state.words.results is not an array');
  }
  state.isEditingWord = false;
};

const handleEditWordRejected = (state) => {
  state.isEditingWord = false;
};

const dataSlice = createSlice({
  name: 'data',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, handleGetAllCategoriesPending)
      .addCase(getAllCategories.fulfilled, handleGetAllCategoriesulfilled)
      .addCase(statisticsWords.pending, handleGetStatisticsWordPending)
      .addCase(statisticsWords.fulfilled, handleGetStatisticsWordFulfilled)
      .addCase(ownWord.pending, handleGetOwnWordPending)
      .addCase(ownWord.fulfilled, handleGetOwnWordFulfilled)
      .addCase(ownWord.rejected, handleGetOwnWordRejected)
      .addCase(getAllWord.pending, handlegetAllWordsPending)
      .addCase(getAllWord.fulfilled, handlegetAllWords)
      .addCase(tasksWords.pending, handTasksWordsPending)
      .addCase(tasksWords.fulfilled, handTasksWords)
      .addCase(answersWord.pending, handleAnswersPending)
      .addCase(answersWord.fulfilled, handleAnswers)
      .addCase(deleteWord.pending, handleDeleteWordPending)
      .addCase(deleteWord.fulfilled, handleDeleteWordFulfilled)
      .addCase(deleteWord.rejected, handleDeleteWordRejected)
      .addCase(createWord.pending, handleAddWordPending)
      .addCase(createWord.fulfilled, handleAddWordFulfilled)
      .addCase(createWord.rejected, handleAddWordRejected)
      .addCase(editWord.pending, handleEditWordPending)
      .addCase(editWord.fulfilled, handleEditWordFulfilled)
      .addCase(editWord.rejected, handleEditWordRejected);
  },
});

export default dataSlice.reducer;
