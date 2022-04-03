import NoEmployees from '../../assets/NoUsersYet.png'

export const NoEmployeesIMG = () => {
  return (
    <div className="py-12 px-20 flex flex-col items-center justify-center mb-10 rounded-3xl  formShadow">
        <img src={NoEmployees} alt="No employees"
        className='w-96' />
        <h1 className='mt-6 text-3xl font-bold' >
            Aún no hay registros
        </h1>
        <h2 className='mt-3 text-2xl font-bold' >
            Aquí serán visibles los empleados
        </h2>
    </div>
  )
}
