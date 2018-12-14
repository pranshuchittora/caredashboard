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

  const timestamp = new Date();
  let newData = {
    campus: camp,
    department: dep,
    label: lab,
    link: url,
    time: timestamp
  };

  //Remove Unwanted
  if (CurrentLS.constructor == Array) {
    for (let i = 0; i < CurrentLS.length; i++) {
      let dataMatchBool =
        CurrentLS[i].campus === newData.campus &&
        CurrentLS[i].department === newData.department &&
        CurrentLS[i].label === newData.label &&
        CurrentLS[i].link === newData.link;

      if (dataMatchBool) CurrentLS.splice(i, 1);
    }
  }

  CurrentLS.unshift(newData);
  localStorage.clear();
  const NewLS = CurrentLS;

  localStorage.setItem("care-history", JSON.stringify(NewLS.slice(0, 5)));
}
