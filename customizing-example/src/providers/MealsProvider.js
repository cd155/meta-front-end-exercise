import React from 'react';

const MealsContext = React.createContext();

const todaysMeals = ["Baked Beans", "Baked Sweet Potatoes", "Baked Potatoes"];

function MealsProvider({ children }) {

  const [meals] = React.useState(todaysMeals);

  return (
    <MealsContext.Provider value={{ meals }}>
      {children}
    </MealsContext.Provider>
  );

};

// function useMealsListContext(){
//   return React.useContext(MealsContext)
// }

export const useMealsListContext = () => React.useContext(MealsContext);

// for test only
export const useMealsListContext1 = () => React.useContext(MealsContext);

export default MealsProvider;