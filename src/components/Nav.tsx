import React from 'react'
import { Search } from 'lucide-react'

function Nav() {
  return (
    <div className="flex justify-between items-center p-4">
      <p className="text-white bg-white/40 backdrop-blur-sm rounded-full px-4 py-2"></p>
      <div className="flex items-center justify-center space-x-2">
          <div className="flex items-center justify-center bg-white/30 backdrop-blur-sm py-2 px-4 rounded-full">
              <Search className="text-black w-4 h-4 mr-2" />
              <p className="text-black font-semibold text-md">SEARCH</p>
          </div>
          <p className="text-black font-semibold bg-white/25 backdrop-blur-xl py-2 px-4 rounded-full text-md">MENU</p>
      </div>
    </div>
  )
}

export default Nav
