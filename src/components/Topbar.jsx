import logo from '../assets/img/logo.png'

const Topbar = () => {
  return (
    <div className="aboslute top-0 w-full bg-palette-1 border-b-2 border-palette-4 h-16">
      <div>
        <img src={logo} alt="logo" className="w-16 h-16" />
      </div>
    </div>
  )
}

export default Topbar
