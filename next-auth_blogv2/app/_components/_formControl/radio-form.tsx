export const RadioFormControl = ({
    id,
    name,
    value,
    checked,
    aria,
    ico
}: {
    id: string,
    name: string,
    value: string
    checked: boolean,
    aria: string,
    ico: any
}) => {

    return (

        <>
            <div className="flex items-center">
                <input
                    id={id}
                    name={name}
                    type="radio"
                    value={value}
                    defaultChecked={checked}
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                    aria-describedby={aria}
                />
                <label
                    htmlFor={id}
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                    {value} {ico}
                </label>
            </div>
        </>
    )

}