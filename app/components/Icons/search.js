import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        viewBox="0 0 16 16"
        {...props}
    >
        <g
            fill="none"
            stroke="red"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        >
            <path d="m11.25 11.25 3 3" />
            <circle cx={7.5} cy={7.5} r={4.75} />
        </g>
    </svg>
)
export default SvgComponent
