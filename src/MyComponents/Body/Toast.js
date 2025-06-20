import './toastAnimation.css'

// type -1 = error
// type 0 = warning
// type 1 = success


export default function Toast({ msg, toastType }) {
  const colors = {
    errorBackgound: 'rgba(220, 53, 69, 0.25)',
    warningBackgound: 'rgba(255, 193, 7, 0.25)',
    successBackgound: 'rgba(0, 128, 0, 0.25)',

    successBorder: '2px solid rgba(0, 128, 0, 0.8)',
    errorBorder: '2px solid rgba(220, 53, 69, 0.85)',
    warningBorder: '2px solid rgba(255, 193, 7, 0.9)',
  }

  let toastStyle = {
    position: 'fixed',
    backgroundColor: toastType === '-1' ? colors.errorBackgound : toastType === '0' ? colors.warningBackgound : toastType === '1' ? colors.successBackgound : '',
    border: toastType === '-1' ? colors.errorBorder : toastType === '0' ? colors.warningBorder : toastType === '1' ? colors.successBorder : '',
    backdropFilter: 'blur(5px)',
  }

  return (
    <>
      <div className="card fs-6 fw-semibold myToast" style={toastStyle}>
        <div className="card-body text-center">
          {msg}
        </div>
      </div>
    </>
  )
}
