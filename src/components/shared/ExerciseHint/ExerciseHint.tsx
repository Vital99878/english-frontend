import { Modal } from '@mui/material'
type Props = {
    text: string
    open: boolean
    handleClose: () => void
}

export default function ExerciseHint({ text, open, handleClose }: Props) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{backgroundColor: 'var(--clr-n-cool-grey-6)',
            color: 'var(--clr-accent__teal-7)'}}
        >
            <div className={'wrapper max-w-2xl text-center mx-auto my-16 px-4'}>{text}</div>
        </Modal>
    )
}
