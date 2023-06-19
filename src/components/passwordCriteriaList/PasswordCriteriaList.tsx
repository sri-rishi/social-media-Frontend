import { checkPasswordCriteria } from "../../helpers";

type Props = {
    password: string
}

const PasswordCriteriaList  = ({password}: Props) => {

    const passwordCriteria = checkPasswordCriteria(password);
    return (
        <ul
            className={`bg-white p-4 w-80 rounded shadow-lg transition `}
        >
            {passwordCriteria.map((criterion, index) => (
                <li key={index} className={ criterion.isValid ? 'text-green-400' : 'text-gray-400' }>
                    {criterion.label}
                </li>
            ))}
        </ul>
    )
}

export { PasswordCriteriaList};