

const Category = () => {
  return (
    <div className="bg-slate-200">
       <div className="flex flex-col p-2 text-sm">
         <h3 className="text-gray-500 text-lg">Categories</h3>
         <div className="flex flex-col items-center justify-center">
          <Link>
              Sports
          </Link>
          <Link>
            Technology
          </Link>
          <Link>
              Finance
          </Link>
          <Link>
              Sports
          </Link>
         </div>
      </div>
    </div>
  )
}

export default Category