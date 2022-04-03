export const GridHeader = () => {
  return (
        <thead>
            <tr className="bg-gray-50 border-y-2">      
                <th className="p-2  cursor-pointer text-lg font-bold text-gray-400">
                    <div className="flex items-center justify-center">
                        Nombres
                    </div>
                </th>
                <th className="p-2  cursor-pointer text-lg font-bold text-gray-400">
                    <div className="flex items-center justify-center">
                        Apellidos
                    </div>
                </th>
                <th className="p-2  cursor-pointer text-lg font-bold text-gray-400">
                    <div className="flex items-center justify-center">
                        Email
                    </div>
                </th>
                <th className="p-2  cursor-pointer text-lg font-bold text-gray-400">
                    <div className="flex items-center justify-center">
                        Cédula
                    </div>
                </th>
                <th className="p-2  cursor-pointer text-lg font-bold text-gray-400">
                    <div className="flex items-center justify-center">
                        
                    </div>
                </th>
            </tr>
        </thead>
  )
}
