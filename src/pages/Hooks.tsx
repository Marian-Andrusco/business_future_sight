import { useEffect, useMemo, useReducer, useRef, useState } from "react";

// function SortList({ list }: { list: string[] }) {
//   console.log("Sortedlist render");
//   const sortList = useMemo(() => {
//     console.log("Running sort");
//     return [...list].sort();
//   }, [list]);
//   return <div>{sortList.join(", ")}</div>;
// }

const Hooks = () => {
  // useReducer
  //   const numbers = [10, 20, 30];
  //   let total = 0;
  //   for (const n of numbers) {
  //     total += n;
  //   }
  //   console.log(total);
  //   console.log(
  //     numbers.reduce((curentValue, number) => {
  //       return curentValue + number;
  //     }, 0)
  //   );
  //   const [state, dispatch] = useReducer(
  //     (state, action) => {
  //       switch (action.type) {
  //         case "SET_NAME":
  //           return { ...state, name: action.payload };
  //         case "ADD_NAME":
  //           return {
  //             ...state,
  //             names: [...state.names, state.name],
  //             name: "",
  //           };
  //         default:
  //           break;
  //       }
  //     },
  //     {
  //       names: [],
  //       name: "Red",
  //     }
  //   );
  //   return (
  //     <div>
  //       Name = {state.name}
  //       <br />
  //       <input
  //         className="border-2 border-sky-500 rounded-md p-1"
  //         type="text"
  //         value={state.name}
  //         onChange={(e) =>
  //           dispatch({ type: "SET_NAME", payload: e.target.value })
  //         }
  //       />
  //       {state.names.map((name) => (
  //         <p>{name}</p>
  //       ))}
  //       <button onClick={() => dispatch({ type: "ADD_NAME" })}>Add Name</button>
  //     </div>
  //   );
  //   -------------------------------------------
  //   -------------------------------------------
  //   -------------------------------------------
  // useMemo & useCallback
  //   const [numbers] = useState([10, 20, 30]);
  //   const total = useMemo(() => {
  //     return numbers.reduce((acc, number) => acc + number, 0);
  //   }, [numbers]);
  //   return (
  //     <div>
  //       Total: {total}
  //       <div>
  //         <SortList list={["George", "Luca", "Matei", "Dragos"]} />
  //       </div>
  //     </div>
  //   );
  //   -------------------------------------------
  //   -------------------------------------------
  //   -------------------------------------------
  //   useRef;
  //   const inputRef = useRef(null);
  //   const idRef = useRef(1);

  //   useEffect(() => {
  //     inputRef.current.focus();
  //   }, []);

  //   const [names, setnames] = useState([
  //     { id: idRef.current++, name: "John" },
  //     { id: idRef.current++, name: "Jane" },
  //   ]);

  //   const onAddName = () => {
  //     setnames([...names, { id: idRef.current++, name: inputRef.current.value }]);
  //     inputRef.current.value = "";
  //   };

  //   return (
  //     <div>
  //       {names.map((n) => (
  //         <p key={n.id}>
  //           {n.id} - {n.name}
  //         </p>
  //       ))}
  //       <input type="text" ref={inputRef} />
  //       <button onClick={onAddName}>Add Name</button>
  //     </div>
  //   );

  return <div>Hooks</div>;
};

export default Hooks;
