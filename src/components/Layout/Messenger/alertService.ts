import { BehaviorSubject } from 'rxjs'
import { AlertProps, SnackbarProps } from '@mui/material'

type MessengerProps = Pick<AlertProps, 'variant' | 'severity' | 'sx'> & { msg: string; snackbarProps?: SnackbarProps }

class AlertService {
    opened$ = new BehaviorSubject<boolean>(false)

    alertProps$ = new BehaviorSubject<MessengerProps>({ msg: '' })

    snackbarProps$ = new BehaviorSubject<SnackbarProps>({
        autoHideDuration: 6000,
        anchorOrigin: { horizontal: 'center', vertical: 'top' },
    })

    setAlertProps(props: Partial<AlertProps>) {
        const currentProps = this.alertProps$.getValue()
        this.alertProps$.next({ ...currentProps, ...props })
    }

    showMessage({ msg, snackbarProps, ...alertProps }: MessengerProps) {
        this.opened$.next(true)
        this.alertProps$.next({ msg, ...alertProps })
        if (snackbarProps) {
            const currentSnackbarProps = this.snackbarProps$.getValue()
            this.snackbarProps$.next({ ...currentSnackbarProps , ...snackbarProps })
        }
    }

    closeMessage = () => this.opened$.next(false)
}

const alertService = new AlertService()
export default alertService
