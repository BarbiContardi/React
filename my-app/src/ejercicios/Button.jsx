// eslint-disable-next-line react/prop-types
export default function Button({name, label , onClick}){
 return <button name={name} onClick={onClick}>{label}</button>
}