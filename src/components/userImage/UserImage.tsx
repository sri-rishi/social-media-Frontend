type UserImageType = {
    imgSrc: string | undefined,
    alt: string,
    width: string
}

export const UserImage: React.FC<UserImageType> = ({imgSrc, alt, width}) => {
    return (
        <div className={width}>
            <img 
                className="w-full rounded-full object-cover" 
                src={
                    imgSrc ? 
                    imgSrc : 
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Xdf9OyXn9BpWL30gb6cpyLnkiCCbSaH8wVB1007o9WpYBDgb6J1_afDQTdJuqwgE3xM&usqp=CAU"
                } 
                alt={alt && alt} />
        </div>
    )
}