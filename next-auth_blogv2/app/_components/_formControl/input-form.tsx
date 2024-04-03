import { lusitana } from "../fonts"

export const InputFormControl = ({
    header,
    required,
    inputType,
    labelName,
    labelText,
    defaultValue,
    placeHolder,
    aria,
    icon,
}: {
    header?: string | undefined,
    required?:boolean|undefined,
    inputType?: string | undefined,
    labelName: string | undefined,
    labelText?: string | undefined,
    defaultValue: string | string[] | undefined,
    placeHolder: string | undefined,
    aria?: string | undefined,
    icon?: any,
}) => {
    function checkHeader() {
        if (header) {
            return (
                <h1 className={`${lusitana.className} text-black  mb-3 text-2xl`}>
                    {header}
                </h1>
            )
        }
    }

    function checkLabel() {
        if (labelText) {
            return (
                <label id={labelName} htmlFor={labelName} className="text-black">
                    {labelText}
                </label>
            )
        }
    }

    function checkIcon() {
        if (icon) {
            return icon
        }
    }

    function checkRequired(){
        if (required){
            return true
        }
        return false
    }
    return (
        <>
            {checkHeader()}
            <div>
                {checkLabel()}
                <div>
                    <input
                        type={inputType || "text"}
                        name={labelName}
                        id={labelName}
                        defaultValue={defaultValue}
                        placeholder={placeHolder}
                        required={checkRequired()}
                        className="peer block w-full rounded-md text-black border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        aria-describedby={aria}
                    />
                    {checkIcon()}
                </div>
            </div>
        </> 
    )

}