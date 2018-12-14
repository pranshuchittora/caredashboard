var isEqual = require("lodash.isequal");
var uniqWith = require("lodash.uniqwith");
const FetchLS = require("./FetchLocalStorage");
// const CURRENT_LS_DATA = FetchLS;
// const saveToLocalStorage = CURRENT_LS_DATA => {
//   const finalData = uniqWith(object, isEqual);
//   localStorage.setItem("recent", JSON.stringify(finalData));
// };

// saveToLocalStorage(objects);
export default function(camp, dep, lab, url) {
  let CurrentLS = [];
  if (FetchLS.default()) CurrentLS = FetchLS.default();

  let newData = { campus: camp, department: dep, label: lab, link: url };
  CurrentLS.unshift(newData);
  localStorage.clear();
  const NewLS = uniqWith(CurrentLS, isEqual);

  localStorage.setItem("care-history", JSON.stringify(NewLS.slice(0, 5)));
}
