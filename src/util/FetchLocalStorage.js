const LS_KEY = "care-history";

export default function() {
 return JSON.parse(localStorage.getItem(LS_KEY))
}
