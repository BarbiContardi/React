// eslint-disable-next-line react/prop-types
export default function Welcome({ name }) {
  return(name ? <p>Welcome, {name}!</p> : <p>Welcome, to all!</p>)
}
