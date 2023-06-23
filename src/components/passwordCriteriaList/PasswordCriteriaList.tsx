import { checkPasswordCriteria } from "../../helpers";

type Props = {
    password: string
}

export const PasswordCriteriaList: React.FC<Props>  = ({password}: Props) => {

    const passwordCriteria = checkPasswordCriteria(password);
    return (
        <div className="bg-white flex flex-col gap-2 text-sm p-4">
            <p>Password must contain</p>
            <ul
                className="text-xs px-1"
            >
                {passwordCriteria.map((criterion, index) => (
                    <li key={index} className={ criterion.isValid ? 'text-green-400' : 'text-gray-400' }>
                        {criterion.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}