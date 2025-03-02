import { defineStore } from "pinia";
export const useStore = defineStore('proceedStore', {
  state: () => ({
    // The chosen contest ID in list for entering the parent criteria
    chosenContestIDForNextLevel: 0,
    // The chosen contest ID in list for editing the particular contest
    chosenContestIDForEdit: 0,
    // The chosen parent criteria ID in list for entering the child criteria
    chosenParentCriteriaIDForNextLevel: 0,
    // The chosen parent criteria ID in list for editing the particular criteria
    chosenParentCriteriaIDForEdit: 0
  }),
  actions: {
    // setters
    setContestIDNextLevel(value: number) {
      this.chosenContestIDForNextLevel = value;
    },
    setContestIDEdit(value: number) {
      this.chosenContestIDForEdit = value;
    },
    setParentCriteriaIDEdit(value: number) {
      this.chosenParentCriteriaIDForEdit = value;
    },
    setParentCriteriaIDNextLevel(value: number) {
      this.chosenParentCriteriaIDForNextLevel = value;
    }
  }
});

// export const queryStore = defineStore('queryStore', {
//   state: () => ({
//     display: {
//       childCriteria: [
//         "criterion_description"
//       ]
//     }
//   }),
//   actions: {

//   }
// });