function AdminTable() {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Sr
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Email Verified
            </th>
          </tr>
        </thead>
        <tbody>
          {adminData.map((row) => (
            <tr
              key={row.sr}
              className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <td className="px-6 py-4">{row.sr}</td>
              <td className="px-6 py-4">
                {row.first_name} {row.last_name}
              </td>
              <td className="px-6 py-4">{row.email}</td>
              <td className="px-6 py-4">
                {row.isEmailVerified ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTable;
