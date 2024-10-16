function Footer() {
  return (
    <footer className='flex-col items-center justify-center mt-16'>
    <div className='flex justify-center text-xs gap-x-4 gap-y-2 flex-wrap text-gray-500'>
        <div>
          <a className="hover:underline cursor-pointer">Meta</a>
        </div>
        <div>
          <a className="hover:underline cursor-pointer">About</a>
        </div>
        <div>
          <a className="hover:underline cursor-pointer">Blog</a>
        </div>
        <div>
          <a className="hover:underline cursor-pointer">Jobs</a>
        </div>
        <div>
          <a className="hover:underline cursor-pointer">Help</a>
        </div>
        <div>
          <a className="hover:underline cursor-pointer">API</a>
        </div>
        <div>
          <a className="hover:underline cursor-pointer">Privacy</a>
        </div>
        <div>
          <a className="hover:underline cursor-pointer">Terms</a>
        </div>
        <div>
          <a className="hover:underline cursor-pointer">Locations</a>
        </div>
        <div>
          <a className="hover:underline cursor-pointer">Instagram Lite</a>
        </div>
        <div>
          <a>Threads</a>
        </div>
        <div>
          <a className="hover:underline cursor-pointer">Contact Uploading & Non-Users</a>
        </div>
        <div>
          <a className="hover:underline cursor-pointer">Meta Verified</a>
        </div>
      </div>
      <div className='flex justify-center text-xs gap-x-3 mt-5 text-gray-500 mb-10'>
        <select className='bg-zinc-50'>
          <option>English</option>
          <option>Türkçe</option>
          <option>Russia</option>
        </select>
        <p>© 2024 Instagram from Meta</p>
      </div>
    </footer>
  )
}

export default Footer