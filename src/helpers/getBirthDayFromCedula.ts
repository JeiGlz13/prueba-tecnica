export const getBirthDayFromCedula = (cedula: string): string => {
    const day = cedula.substring(4, 6);
    const month = cedula.substring(6, 8);
    const year = cedula.substring(8, 10);

    const yearAsNumber = parseInt(year, 10);
    const getCurrentYear = new Date().getFullYear();

    if((getCurrentYear - 2000) < (yearAsNumber)) return `${day}/${month}/19${year}`;

    return `${day}/${month}/20${year}`

    ;
}