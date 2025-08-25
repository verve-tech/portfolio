import { ComponentProps } from 'react'

function ReviewCurve(props: ComponentProps<'svg'>) {
  return (
    <svg
      width="477"
      height="455"
      viewBox="0 0 477 455"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M228.5 15.5C336.196 15.5 423.5 102.804 423.5 210.5C423.5 318.196 336.196 405.5 228.5 405.5C120.804 405.5 33.5 318.196 33.5 210.5C33.5 102.804 120.804 15.5 228.5 15.5Z"
        stroke="white"
      />
      <path
        d="M237.5 23.5C345.196 23.5 432.5 110.804 432.5 218.5C432.5 326.196 345.196 413.5 237.5 413.5C129.804 413.5 42.5 326.196 42.5 218.5C42.5 110.804 129.804 23.5 237.5 23.5Z"
        stroke="white"
      />
      <g filter="url(#filter0_d_1122_194)">
        <circle
          cx="370.5"
          cy="348.5"
          r="31.8559"
          stroke="#1B1B1B"
          strokeWidth="2.71182"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#filter1_d_1122_194)">
        <circle
          cx="106.5"
          cy="74.5"
          r="36.8559"
          stroke="#1B1B1B"
          strokeWidth="2.71182"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#filter2_d_1122_194)">
        <circle
          cx="76.5"
          cy="324.5"
          r="38.8559"
          stroke="#1B1B1B"
          strokeWidth="2.71182"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1122_194"
          x="301.131"
          y="279.131"
          width="174.896"
          height="174.896"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="18.0788" dy="18.0788" />
          <feGaussianBlur stdDeviation="27.1182" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1122_194" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1122_194"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_1122_194"
          x="32.1305"
          y="0.130541"
          width="184.896"
          height="184.896"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="18.0788" dy="18.0788" />
          <feGaussianBlur stdDeviation="27.1182" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1122_194" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1122_194"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_1122_194"
          x="0.130541"
          y="248.131"
          width="188.896"
          height="188.896"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="18.0788" dy="18.0788" />
          <feGaussianBlur stdDeviation="27.1182" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1122_194" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1122_194"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default ReviewCurve
