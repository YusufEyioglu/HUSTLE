import create from 'zustand';

const useStore = create(set => ({
  exercises: {
    strength: {
      Göğüs: ["EGZERSİZLER"],
      Sırt: ["EGZERSİZLER"],
      Omuz: ["EGZERSİZLER"],
      Bacak: ["EGZERSİZLER"],
      'Ön kol': ["EGZERSİZLER"],
      'Arka kol': ["EGZERSİZLER"],
    },
    cardio: {
      Koşu: ["KARDİYO"],
      Yürüyüş: ["KARDİYO"],
      'İp Atlama': ["KARDİYO"],
      Bisiklet: ["KARDİYO"],
      Diğer: ["KARDİYO"],
    },
    
  },
  addExercise: (type, category, exercise) =>
    set(state => ({
      exercises: {
        ...state.exercises,
        [type]: {
          ...state.exercises[type],
          [category]: [...state.exercises[type][category], exercise],
        },
      },
    })),
}));

export default useStore;
