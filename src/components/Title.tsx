interface TitleProps {
    title: string;
}

export const Title = ({title}: TitleProps) => {
  return (
    <h1 className="font-Poppins text-verdeSER font-semibold text-center text-2xl" >
        {title}
    </h1>
  )
}
