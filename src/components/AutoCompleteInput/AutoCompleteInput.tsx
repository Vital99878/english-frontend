import { useState, ChangeEvent, useRef, MutableRefObject, ComponentProps, FocusEvent } from 'react'
import useCalcWidthAndSpace from '@components/AutoCompleteInput/useCalcWidthAndSpace'
import clsx from 'clsx'
import { Input } from './OmissionInput'

type Props = {
    options: string[]
    correctAnswerKeys: boolean[]
    isSolutionChecked: boolean
    setIsSolutionToFalse: () => void
    inputProps: ComponentProps<'input'>
    solutionData: {
        keyPlace: number
        solution: MutableRefObject<Array<string>>
    }
}

export default function AutoCompleteInput({
    isSolutionChecked,
    correctAnswerKeys,
    inputProps,
    solutionData: { solution, keyPlace },
}: Props) {
    const [inputValue, setInputValue] = useState<string>('')

    const inputRef = useRef<HTMLInputElement>(null)

    const { space, width } = useCalcWidthAndSpace(inputRef, inputValue) // Начальная ширина

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setInputValue(value)
        solution.current[keyPlace] = value
    }

    const isCorrect = isSolutionChecked && correctAnswerKeys[keyPlace]
    const isInCorrect = isSolutionChecked && !correctAnswerKeys[keyPlace]

    function getTabIndex(value: string): number {
        if (value.length && inputRef.current === document.activeElement) return 2
        return !value.length ? 2 : isInCorrect ? 3 : 4
    }

    function handleOnBlur(evt: FocusEvent<HTMLInputElement>) {
        if (evt.target.value.length) {
            evt.target.tabIndex = 0
        }
    }

    return (
        <>
            {space.hasSpaceBefore && <span> </span>}
            <Input
                correct={isCorrect && isCorrect !== isInCorrect}
                incorrect={isInCorrect && isCorrect !== isInCorrect}
                {...inputProps}
                autoFocus={!inputValue.length}
                ref={inputRef}
                style={{
                    width: !inputValue ? '1.2rem' : width,
                }}
                type="text"
                value={inputValue}
                onChange={handleChange}
                className={clsx('text-n-5', isInCorrect && 'isInCorrect')}
                placeholder="..."
                tabIndex={getTabIndex(inputValue)}
                onBlur={handleOnBlur}
            />
            {space.hasSpaceAfter && <span> </span>}
        </>
    )
}
