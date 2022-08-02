import React from "react";

interface Props {
  body: React.ReactNode,
  title: string,
  confirmText: string
  onConfirm: () => void,
  disabledConfirm: boolean
  id: string
}

const ConfirmationModal = ({body, title, confirmText, onConfirm, id, disabledConfirm}: Props) => {
  return (
    <div className={"modal-dialog"}>
      <div className={"modal-content"}>
        <div className={"modal-header"}>
          {title}
          <button type={"button"} className={"btn-close"} data-bs-dismiss={"modal"} data-bs-target={"#" + id} aria-label={"Close"}/>
        </div>
        <div className={"modal-body"}>
          {body}
        </div>
        <div className={"modal-footer"}>
          <button className={"btn btn-secondary"} data-bs-dismiss={"modal"} data-bs-target={"#" + id}>Cancel</button>
          <button className={"btn btn-primary"} data-bs-dismiss={"modal"} data-bs-target={"#" + id} onClick={onConfirm} disabled={disabledConfirm}>{confirmText}</button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal;