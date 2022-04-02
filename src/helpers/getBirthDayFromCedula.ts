import Swal from 'sweetalert2';

const checkAdult = (day: string, month: string, getCurrentYear: number, yearToCompare: number) =>{
    const dayAsNumber = parseInt(day, 10);
    const monthAsNumber = parseInt(month, 10);
    const getCurrentDay = new Date().getDate();
    const getCurrentMonth = new Date().getMonth() + 1;

    if ((getCurrentYear - yearToCompare < 18)) return false;
    if ((getCurrentYear - yearToCompare === 18) && (monthAsNumber > getCurrentMonth)) return false;
    if ((getCurrentYear - yearToCompare === 18) && (monthAsNumber === getCurrentMonth) && (dayAsNumber > getCurrentDay)) return false;

    return true;
}

export const getBirthDayFromCedula = (cedula: string) => {
    const day = cedula.substring(4, 6);
    const month = cedula.substring(6, 8);
    const year = cedula.substring(8, 10);
    const yearAsNumber = parseInt(year, 10);
    const getCurrentYear = new Date().getFullYear();
    const yearToCompare = yearAsNumber + 2000;

    if((getCurrentYear) < (yearToCompare)) return `${day}/${month}/19${year}`;
    if(!checkAdult(day, month, getCurrentYear, yearToCompare)) return Swal.fire('Oops...', 'El empleado que desea registrar es menor de edad', 'error');
    
    return `${day}/${month}/20${year}`;
}