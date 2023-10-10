export default function UncontrolledLogin() {
    function handleFormSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            username : formData.get('username'),
            password : formData.get('password'),
            session : formData.get('session') === 'on' ? true : false,
        }
        console.log(data)
      }

  return (
    <form className={'bg-pink-800 w-1/4 h-2/4'} onSubmit={handleFormSubmit}>
      <h1 className={'text-slate-900'}>My Uncontrolled Form</h1>
      <div className={'flex justify-between'}>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <input type="checkbox" name="session" />
      </div>
      <div className={'flex justify-around'}>
      <button className={'bg-neutral-300 rounded-md'}>Login</button>
      <button className={'bg-neutral-300 rounded-md'} type="reset">Reset</button>
      </div>
    </form>
  );
}


