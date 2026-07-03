const CREAM = "#FBE4D8";

function Svg({ children }: { children: React.ReactNode }) {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
      {children}
    </svg>
  );
}

function Stroke({ paths, color }: { paths: string[]; color: string }) {
  return (
    <Svg>
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </Svg>
  );
}

function Badge({
  text,
  bg,
  fg,
  size,
}: {
  text: string;
  bg: string;
  fg: string;
  size?: number;
}) {
  return (
    <Svg>
      <rect x={1} y={1} width={22} height={22} rx={4} fill={bg} />
      <text
        x={12}
        y={16.2}
        textAnchor="middle"
        fontSize={size ?? 11}
        fontWeight={700}
        fontFamily="Inter, sans-serif"
        fill={fg}
      >
        {text}
      </text>
    </Svg>
  );
}

function Cylinder({ color }: { color: string }) {
  return (
    <Svg>
      <ellipse cx={12} cy={5.5} rx={8.5} ry={3.2} fill={color} />
      <path
        d="M3.5 5.5v13c0 1.77 3.8 3.2 8.5 3.2s8.5-1.43 8.5-3.2v-13"
        fill="none"
        stroke={color}
        strokeWidth={2}
      />
      <path
        d="M3.5 12c0 1.77 3.8 3.2 8.5 3.2s8.5-1.43 8.5-3.2"
        fill="none"
        stroke={color}
        strokeWidth={2}
      />
    </Svg>
  );
}

export function ReactIcon() {
  return (
    <Svg>
      <circle cx={12} cy={12} r={2.2} fill="#61DAFB" />
      <ellipse
        cx={12}
        cy={12}
        rx={10.5}
        ry={4.2}
        fill="none"
        stroke="#61DAFB"
        strokeWidth={1.4}
      />
      <ellipse
        cx={12}
        cy={12}
        rx={10.5}
        ry={4.2}
        fill="none"
        stroke="#61DAFB"
        strokeWidth={1.4}
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx={12}
        cy={12}
        rx={10.5}
        ry={4.2}
        fill="none"
        stroke="#61DAFB"
        strokeWidth={1.4}
        transform="rotate(120 12 12)"
      />
    </Svg>
  );
}

export function NextIcon() {
  return (
    <Svg>
      <circle cx={12} cy={12} r={10.5} fill="none" stroke={CREAM} strokeWidth={1.6} />
      <text
        x={12}
        y={16.5}
        textAnchor="middle"
        fontSize={12}
        fontWeight={700}
        fontFamily="Inter, sans-serif"
        fill={CREAM}
      >
        N
      </text>
    </Svg>
  );
}

export function TailwindIcon() {
  return (
    <Svg>
      <path
        fill="#38BDF8"
        d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"
      />
    </Svg>
  );
}

export function NodeIcon() {
  return (
    <Svg>
      <path d="M12 1.8l8.85 5.1v10.2L12 22.2l-8.85-5.1V6.9L12 1.8z" fill="#539E43" />
      <text
        x={12}
        y={15.8}
        textAnchor="middle"
        fontSize={9}
        fontWeight={700}
        fontFamily="Inter, sans-serif"
        fill="#FFFFFF"
      >
        JS
      </text>
    </Svg>
  );
}

export function MongoIcon() {
  return (
    <Svg>
      <path
        fill="#47A248"
        d="M12 2c.5 4 5 6.5 5 11.5 0 3.5-2.5 6-4.5 7l-.5 1.5-.5-1.5c-2-1-4.5-3.5-4.5-7C7 8.5 11.5 6 12 2z"
      />
    </Svg>
  );
}

export function PrismaIcon() {
  return (
    <Svg>
      <path
        fill="#A5B4FC"
        d="M12.4 2.5a1 1 0 0 1 1.72.03l7.1 12.6a1 1 0 0 1-.56 1.44l-11 3.7a1 1 0 0 1-1.27-1.3L12.4 2.5z"
      />
    </Svg>
  );
}

export function GitIcon() {
  return (
    <Svg>
      <path
        fill="#F05032"
        d="M22.4 11L13 1.6a1.9 1.9 0 0 0-2.7 0l-2 2 2.5 2.5a2.3 2.3 0 0 1 2.9 2.9l2.4 2.4a2.3 2.3 0 1 1-1.4 1.4l-2.2-2.2v5.9a2.3 2.3 0 1 1-1.9-.06V8.4a2.3 2.3 0 0 1-1.2-3L7 2.9 1.6 8.3a1.9 1.9 0 0 0 0 2.7l9.4 9.4a1.9 1.9 0 0 0 2.7 0l8.7-8.7a1.9 1.9 0 0 0 0-2.7z"
      />
    </Svg>
  );
}

export function GhActionsIcon() {
  return (
    <Svg>
      <circle cx={12} cy={12} r={9.5} fill="none" stroke="#5B9DF5" strokeWidth={2} />
      <path d="M10 8.2l5 3.8-5 3.8V8.2z" fill="#5B9DF5" />
    </Svg>
  );
}

export function DockerIcon() {
  return (
    <Svg>
      <path
        d="M2 13h19.5c.3 0 .5.4.3.7-1.2 2.3-3 6.3-9.3 6.3-5.5 0-9-2.6-10.5-7z"
        fill="#2496ED"
      />
      <rect x={5} y={9.2} width={3} height={3} fill="#2496ED" />
      <rect x={9} y={9.2} width={3} height={3} fill="#2496ED" />
      <rect x={13} y={9.2} width={3} height={3} fill="#2496ED" />
      <rect x={9} y={5.4} width={3} height={3} fill="#2496ED" />
    </Svg>
  );
}

export function VitestIcon() {
  return (
    <Svg>
      <path
        d="M12 3l10 18H2L12 3z"
        fill="none"
        stroke="#FCC72B"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <path
        d="M9.2 14.2l2 2 3.8-4"
        fill="none"
        stroke="#729B1B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function StorybookIcon() {
  return (
    <Svg>
      <path d="M5 2.5l14-1v21l-14-1v-19z" fill="#FF4785" />
      <path
        d="M14.5 8.5c0-1.2-1-1.9-2.4-1.9-1.5 0-2.5.8-2.5 2.1 0 2.4 4.9 1.9 4.9 4.4 0 1.4-1.1 2.2-2.6 2.2-1.6 0-2.7-.9-2.7-2.2"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth={1.6}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function AngularIcon() {
  return (
    <Svg>
      <path d="M12 1.5l10 3.6-1.5 13.2L12 22.5l-8.5-4.2L2 5.1 12 1.5z" fill="#DD0031" />
      <text
        x={12}
        y={16.5}
        textAnchor="middle"
        fontSize={12}
        fontWeight={700}
        fontFamily="Inter, sans-serif"
        fill="#FFFFFF"
      >
        A
      </text>
    </Svg>
  );
}

export function IonicIcon() {
  return (
    <Svg>
      <circle cx={12} cy={12} r={10} fill="none" stroke="#3880FF" strokeWidth={2} />
      <circle cx={12} cy={12} r={4.5} fill="#3880FF" />
      <circle cx={19} cy={5} r={2.6} fill="#3880FF" />
    </Svg>
  );
}

export function FirebaseIcon() {
  return (
    <Svg>
      <path d="M5 18.5L7.5 3l3.2 6L13 5.5l6 13-7 3.7-7-3.7z" fill="#FFCA28" />
    </Svg>
  );
}

export function SupabaseIcon() {
  return (
    <Svg>
      <path d="M13.5 1.5v9h7L10.5 22.5v-9h-7l10-12z" fill="#3ECF8E" />
    </Svg>
  );
}

export function PostmanIcon() {
  return (
    <Svg>
      <circle cx={12} cy={12} r={10.5} fill="#FF6C37" />
      <path
        d="M15.5 7.5a2.6 2.6 0 1 1-3 4.2l-5 5 3.8-1.2 4.6-4.6a2.6 2.6 0 0 0-.4-3.4z"
        fill="#FFFFFF"
      />
    </Svg>
  );
}

export function PnpmIcon() {
  return (
    <Svg>
      <rect x={3} y={3} width={5.5} height={5.5} fill="#F9AD00" />
      <rect x={9.3} y={3} width={5.5} height={5.5} fill="#F9AD00" />
      <rect x={15.5} y={3} width={5.5} height={5.5} fill="#F9AD00" />
      <rect x={15.5} y={9.3} width={5.5} height={5.5} fill="#F9AD00" />
      <rect x={9.3} y={9.3} width={5.5} height={5.5} fill="#FFFFFF" />
      <rect x={9.3} y={15.5} width={5.5} height={5.5} fill="#FFFFFF" />
      <rect x={15.5} y={15.5} width={5.5} height={5.5} fill="#FFFFFF" />
      <rect x={3} y={15.5} width={5.5} height={5.5} fill="#FFFFFF" />
    </Svg>
  );
}

export function ClaudeIcon() {
  return (
    <Svg>
      <path
        fill="#D97757"
        d="M12 2l1.8 6.2L20 6.4l-4.4 4.6 5.9 2.6-6.4.9 2.7 5.9-5.1-4.1-2.4 6-.9-6.4-5.6 3.3 3.9-5.2L2 12.6l6-2.1L4.6 5l5.8 2.5L12 2z"
      />
    </Svg>
  );
}

export function ChatgptIcon() {
  return (
    <Svg>
      <circle cx={12} cy={12} r={9.5} fill="none" stroke="#74AA9C" strokeWidth={2} />
      <circle cx={12} cy={12} r={3.4} fill="#74AA9C" />
    </Svg>
  );
}

export function CopilotIcon() {
  return (
    <Svg>
      <path
        fill={CREAM}
        d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18a11 11 0 0 1 5.76 0c2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.23 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
      />
    </Svg>
  );
}

export function PostgresIcon() {
  return <Cylinder color="#4E7FD0" />;
}

export function MysqlIcon() {
  return <Cylinder color="#00A0B0" />;
}

export function TypescriptIcon() {
  return <Badge text="TS" bg="#3178C6" fg="#FFFFFF" />;
}

export function JavascriptIcon() {
  return <Badge text="JS" bg="#F7DF1E" fg="#1a1a1a" />;
}

export function HtmlIcon() {
  return <Badge text="</>" bg="#E34F26" fg="#FFFFFF" size={9} />;
}

export function CssIcon() {
  return <Badge text="{ }" bg="#2965F1" fg="#FFFFFF" size={9} />;
}

export function PhpIcon() {
  return <Badge text="php" bg="#777BB4" fg="#FFFFFF" size={8} />;
}

export function CIcon() {
  return <Badge text="C" bg="#5C6BC0" fg="#FFFFFF" />;
}

export function CsharpIcon() {
  return <Badge text="C#" bg="#68217A" fg="#FFFFFF" size={10} />;
}

export function ExpressIcon() {
  return <Badge text="ex" bg="#3a3a44" fg="#FFFFFF" />;
}

export function RestIcon() {
  return <Stroke paths={["M7 8l-4 4 4 4", "M17 8l4 4-4 4", "M13.5 5l-3 14"]} color="#DFB6B2" />;
}

export function CleanArchIcon() {
  return (
    <Svg>
      <circle cx={12} cy={12} r={10} fill="none" stroke="#DFB6B2" strokeWidth={1.6} />
      <circle cx={12} cy={12} r={6.2} fill="none" stroke="#DFB6B2" strokeWidth={1.6} />
      <circle cx={12} cy={12} r={2.4} fill="#DFB6B2" />
    </Svg>
  );
}

export function ScrumIcon() {
  return <Stroke paths={["M21 12a9 9 0 1 1-3-6.7", "M21 3v5h-5"]} color="#DFB6B2" />;
}

export function TddIcon() {
  return <Stroke paths={["M12 22a10 10 0 1 0-10-10", "M8 12l3 3 5.5-6"]} color="#7BC96F" />;
}

export function CleanCodeIcon() {
  return <Stroke paths={["M8 6l-5 6 5 6", "M16 6l5 6-5 6"]} color="#DFB6B2" />;
}
