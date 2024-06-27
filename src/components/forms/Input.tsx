// React
import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react"

interface Type extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: string
  label?: string
  className?: string
  inputClass?: string
  textRight?: boolean
}

export const Input = forwardRef((props: Type, ref) => {
  return (
    <label className={`form-control ${props.className}`}>
      {props.label && (
        <label className="label">
          <span className={`label-text font-bold ${props.error && "text-error"}`}>{props.label}</span>
        </label>
      )}

      <input
        {...props}
        // @ts-ignore
        ref={ref}
        placeholder={props.disabled ? "-" : props.placeholder}
        className={`input input-bordered dark:border-gray-400 ${props.inputClass} ${props.error && "!input-error"} ${props.textRight ? "text-right" : ""}`}
      />

      {props.error && (
        <label className="label">
          <span className={`label-text-alt font-bold ${props.error && "text-error"}`}>{props.error}</span>
        </label>
      )}
    </label>
  )
})