import { Snackbar, Alert } from '@mui/material'
import useBehaviorSubject from '@src/hooks/useBehaviorSubject'
import alertService from '@components/Layout/Messenger/alertService'

export default function Messenger() {
    const open = useBehaviorSubject(alertService.opened$)
    const alertProps = useBehaviorSubject(alertService.alertProps$)
    const snackbarProps = useBehaviorSubject(alertService.snackbarProps$)

    return (
        <div>
            <Snackbar open={open} onClose={alertService.closeMessage} {...snackbarProps} >
                <Alert onClose={alertService.closeMessage} {...alertProps}>
                    {alertProps.msg}
                </Alert>
            </Snackbar>
        </div>
    )
}
