import Link from "next/link";

const Sidebar = () => {
  return (
    <div>
      <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8">
        <a href="/admin/dashboard" className="text-2xl font-bold">
          DashBoard
        </a>
        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <label className="px-3 text-lg font-semibold uppercase text-gray-900">
                Jobs
              </label>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="/admin/createjob"
              >
                <span className="mx-2 text-sm font-medium">Create Job</span>
              </Link>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="/admin/editjob"
              >
                <span className="mx-2 text-sm font-medium">Edit Job</span>
              </Link>
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
