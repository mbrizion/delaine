import soon from '../assets/img/coming.png'
import Header from './Header'
const Shop = () => {
  return (
    <div className="flex flex-col items-center bg-white p-2">
      <div className="sm:w-4/5 w-full">
        <Header logoClassnames="w-40" />
        <div className="w-full flex-col flex items-center justify-center">
          <img src={soon} className="h-96" />
        </div>
      </div>
    </div>
  )
}

export default Shop
