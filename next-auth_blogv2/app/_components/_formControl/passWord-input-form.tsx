import { KeyIcon } from "@heroicons/react/24/outline"
import { lusitana } from "../fonts"

export const PassWordFormControl = ({
    header,
    labelName,
    labelText,
    defaultValue,
    placeHolder,
    aria
}: {
    header?: string | undefined,
    labelName: string | undefined,
    labelText?: string | undefined,
    defaultValue: string | string[] | undefined,
    placeHolder: string | undefined,
    aria: string | undefined
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

    function checkLabel(){
        if (labelText) {
            return(
                <label id={labelName} htmlFor={labelName} className="text-black">
                {labelText}
            </label>
            )
        }
    }
    return (
        <>
            {checkHeader()}
            <div className="mt-4">
                {checkLabel()}
                <div>
                    <input
                        type="password"
                        name={labelName}
                        id={labelName}
                        defaultValue={defaultValue}
                        placeholder={placeHolder}
                        min={10}
                        required
                        className="peer block w-full rounded-md text-black border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        aria-describedby={aria}
                    />
                    <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
            </div>
        </>
    )

}