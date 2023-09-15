import * as React from "react"

const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        fill="none"
        viewBox="0 0 400 400"
        {...props}
    >
        <path
            stroke="#191919"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={12}
            d="M200 350c82.843 0 150-67.157 150-150S282.843 50 200 50 50 117.157 50 200s67.157 150 150 150Z"
        />
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={12}
            d="m262 141.91-124 124M262 265.91l-124-124"
        />
    </svg>
)
export default SvgComponent
