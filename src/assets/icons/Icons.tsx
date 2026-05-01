import type {SVGProps} from "react"

export const SDDLogo = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={82}
        height={38}
        fill="none"
    >
        <path
            fill="#090C10"
            d="M1.396 37.236v-.128c2.987-3.285 4.48-6.272 4.48-8.96 0-.725-.107-1.45-.32-2.176-.17-.725-.512-1.6-1.024-2.624-.47-1.024-1.13-2.347-1.984-3.968C1.183 16.777.5 14.303.5 11.956c0-1.579.363-3.264 1.088-5.056.725-1.835 1.792-3.541 3.2-5.12h11.968v.128c-1.579 1.75-2.71 3.328-3.392 4.736-.683 1.365-1.024 2.773-1.024 4.224 0 1.067.192 2.112.576 3.136.384 1.024 1.003 2.347 1.856 3.968 1.152 2.09 1.941 3.797 2.368 5.12.47 1.28.704 2.603.704 3.968 0 1.835-.299 3.563-.896 5.184-.597 1.579-1.579 3.243-2.944 4.992H1.396ZM25.299 37.236a13.946 13.946 0 0 1-2.816-3.84 22.106 22.106 0 0 1-1.537-4.352c-.34-1.45-.512-2.688-.512-3.712 0-3.157.448-5.93 1.345-8.32.895-2.39 2.069-4.181 3.52-5.376h11.648V.5H47.89v36.736H25.299Zm11.648-2.176V13.748c-1.366.939-2.625 2.304-3.777 4.096-1.109 1.792-1.664 3.883-1.664 6.272 0 2.304.427 4.352 1.28 6.144.896 1.792 2.283 3.392 4.16 4.8ZM52.22 37.236V1.78h23.745c3.669 5.461 5.504 11.072 5.504 16.832 0 2.261-.235 4.565-.704 6.912a38.264 38.264 0 0 1-1.92 6.592c-.811 2.048-1.771 3.755-2.88 5.12H52.22Zm11.072-2.048c2.39-1.621 4.182-3.883 5.376-6.784a23.553 23.553 0 0 0 1.856-9.216c0-2.219-.298-4.352-.895-6.4-.598-2.048-1.43-3.84-2.497-5.376-1.066-1.536-2.346-2.603-3.84-3.2v30.976Z"
        />
        <path
            stroke="#000"
            d="M1.396 37.236v-.128c2.987-3.285 4.48-6.272 4.48-8.96 0-.725-.107-1.45-.32-2.176-.17-.725-.512-1.6-1.024-2.624-.47-1.024-1.13-2.347-1.984-3.968C1.183 16.777.5 14.303.5 11.956c0-1.579.363-3.264 1.088-5.056.725-1.835 1.792-3.541 3.2-5.12h11.968v.128c-1.579 1.75-2.71 3.328-3.392 4.736-.683 1.365-1.024 2.773-1.024 4.224 0 1.067.192 2.112.576 3.136.384 1.024 1.003 2.347 1.856 3.968 1.152 2.09 1.941 3.797 2.368 5.12.47 1.28.704 2.603.704 3.968 0 1.835-.299 3.563-.896 5.184-.597 1.579-1.579 3.243-2.944 4.992H1.396ZM25.299 37.236a13.946 13.946 0 0 1-2.816-3.84 22.106 22.106 0 0 1-1.537-4.352c-.34-1.45-.512-2.688-.512-3.712 0-3.157.448-5.93 1.345-8.32.895-2.39 2.069-4.181 3.52-5.376h11.648V.5H47.89v36.736H25.299Zm11.648-2.176V13.748c-1.366.939-2.625 2.304-3.777 4.096-1.109 1.792-1.664 3.883-1.664 6.272 0 2.304.427 4.352 1.28 6.144.896 1.792 2.283 3.392 4.16 4.8ZM52.22 37.236V1.78h23.745c3.669 5.461 5.504 11.072 5.504 16.832 0 2.261-.235 4.565-.704 6.912a38.264 38.264 0 0 1-1.92 6.592c-.811 2.048-1.771 3.755-2.88 5.12H52.22Zm11.072-2.048c2.39-1.621 4.182-3.883 5.376-6.784a23.553 23.553 0 0 0 1.856-9.216c0-2.219-.298-4.352-.895-6.4-.598-2.048-1.43-3.84-2.497-5.376-1.066-1.536-2.346-2.603-3.84-3.2v30.976Z"
        />
    </svg>
)
export const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none">
        <g
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            clipPath="url(#a)"
        >
            <path d="M9 16.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15ZM1.5 9h15"/>
            <path
                d="M9 1.5A11.475 11.475 0 0 1 12 9a11.475 11.475 0 0 1-3 7.5A11.475 11.475 0 0 1 6 9a11.475 11.475 0 0 1 3-7.5v0Z"/>
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h18v18H0z"/>
            </clipPath>
        </defs>
    </svg>
)
export const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none"
         {...props}
    >
        <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m4 6.667 2.586 2.586a2 2 0 0 0 2.828 0L12 6.667"
        />
    </svg>
)
export const PlaceholderPreview = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={565}
        height={585}
        fill="none"
        {...props}
    >
        <path fill="#FFC700" d="M0 0h565v585H0z"/>
        <g filter="url(#a)">
            <g clipPath="url(#b)">
                <rect
                    width={480}
                    height={344.348}
                    x={52}
                    y={65.267}
                    fill="#fff"
                    rx={29.015}
                />
                <path fill="#000" d="M52 65.267h476v26H52z"/>
            </g>
            <rect
                width={475.855}
                height={340.203}
                x={54.072}
                y={67.339}
                stroke="#000"
                strokeWidth={4.145}
                rx={26.943}
            />
        </g>
        <g filter="url(#c)">
            <g clipPath="url(#d)">
                <rect width={193} height={367} x={33} y={152.733} fill="#fff" rx={28}/>
                <path
                    fill="#000"
                    d="M77 152.733h106v9c0 7.732-6.268 14-14 14H91c-7.732 0-14-6.268-14-14v-9Z"
                />
                <path stroke="#000" d="M33 494.233h193"/>
                <rect width={91} height={3} x={84} y={505.733} fill="#000" rx={1.5}/>
            </g>
            <rect
                width={189}
                height={363}
                x={35}
                y={154.733}
                stroke="#000"
                strokeWidth={4}
                rx={26}
            />
        </g>
        <defs>
            <clipPath id="b">
                <rect
                    width={480}
                    height={344.348}
                    x={52}
                    y={65.267}
                    fill="#fff"
                    rx={29.015}
                />
            </clipPath>
            <clipPath id="d">
                <rect width={193} height={367} x={33} y={152.733} fill="#fff" rx={28}/>
            </clipPath>
            <filter
                id="a"
                width={485.181}
                height={349.529}
                x={52}
                y={65.267}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx={1.036} dy={1.036}/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_80_1594"/>
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx={2.073} dy={2.073}/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                <feBlend
                    in2="effect1_dropShadow_80_1594"
                    result="effect2_dropShadow_80_1594"
                />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx={3.109} dy={3.109}/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                <feBlend
                    in2="effect2_dropShadow_80_1594"
                    result="effect3_dropShadow_80_1594"
                />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx={4.145} dy={4.145}/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                <feBlend
                    in2="effect3_dropShadow_80_1594"
                    result="effect4_dropShadow_80_1594"
                />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx={5.181} dy={5.181}/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                <feBlend
                    in2="effect4_dropShadow_80_1594"
                    result="effect5_dropShadow_80_1594"
                />
                <feBlend
                    in="SourceGraphic"
                    in2="effect5_dropShadow_80_1594"
                    result="shape"
                />
            </filter>
            <filter
                id="c"
                width={198}
                height={372}
                x={33}
                y={152.733}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx={1} dy={1}/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_80_1594"/>
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx={2} dy={2}/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                <feBlend
                    in2="effect1_dropShadow_80_1594"
                    result="effect2_dropShadow_80_1594"
                />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx={3} dy={3}/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                <feBlend
                    in2="effect2_dropShadow_80_1594"
                    result="effect3_dropShadow_80_1594"
                />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx={4} dy={4}/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                <feBlend
                    in2="effect3_dropShadow_80_1594"
                    result="effect4_dropShadow_80_1594"
                />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx={5} dy={5}/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                <feBlend
                    in2="effect4_dropShadow_80_1594"
                    result="effect5_dropShadow_80_1594"
                />
                <feBlend
                    in="SourceGraphic"
                    in2="effect5_dropShadow_80_1594"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
)