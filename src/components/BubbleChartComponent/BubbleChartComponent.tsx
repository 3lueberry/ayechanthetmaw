"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useRef, PropsWithChildren } from "react";
import { forceSimulation, forceCollide, forceX, forceY, scaleSqrt, NumberValue } from "d3";
import { Simulation, SimulationNodeDatum } from "d3-force";
import { hex, color } from "colors.config";
import uuid from "react-uuid";

export interface Data {
  id: number;
  name: string;
  size: number;
  color: color;
}

interface BubbleChartProps extends PropsWithChildren<any> {
  data: Array<Data>;
  onClick?: (key: string) => void;
  textShadow?: boolean;
}

interface SimulationNode extends SimulationNodeDatum, Data {}

const BubbleChartComponent = ({ data, ...props }: BubbleChartProps) => {
  const prevData = useRef<Array<Data>>([]);
  const [renderData, setRenderData] = useState<Array<any>>([]);

  const domain = useRef<any>([0, 0]);
  const range = useRef<any>([0, 0]);

  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const router = useRouter();
  const pathname = usePathname();

  useEffect((): (() => void) => {
    if (data && data.length && JSON.stringify(prevData) !== JSON.stringify(data)) {
      prevData.current = data;
      const [max] = [...data].sort((a, b) => b.size - a.size).map(({ size }) => size);
      domain.current = [0, max];
      range.current = [Math.round(width / Math.sqrt(Math.sqrt(data.length)) / 10), Math.round(width / Math.sqrt(Math.sqrt(data.length)) / 5)];
      const simulation: Simulation<SimulationNodeDatum, undefined> = animate([...data].map((d) => ({ ...d })));

      simulation.on("tick", () => {
        setRenderData(
          (simulation.nodes() as Array<SimulationNode>).map((item) =>
            render(item, () => {
              simulation.stop();
              if (item.size !== 1) {
                if (item.id === -1) {
                  const url = pathname?.split("/");
                  url?.pop();
                  router.push(url?.join("/") || "/skills");
                } else if (item.id === -2) router.push(`${pathname}/all`);
                else router.push(`${pathname}/${encodeURIComponent(item.name)}`);
              }
            })
          )
        );
      });

      simulation.on("end", () => console.log("ENDED"));
      return (): any => simulation?.stop();
    } else return () => {};
  }, [data, width, height]);

  const animate = (data: Array<SimulationNode>): Simulation<SimulationNodeDatum, undefined> => {
    return (
      forceSimulation()
        .nodes(data)
        // .alpha(0.7)
        .alphaMin(0.4)
        .alphaDecay(0.08)
        .velocityDecay(0.5)
        .force("x", forceX().strength(0.005))
        .force("y", forceY().strength(0.005))
        .force(
          "collide",
          forceCollide(({ size }: SimulationNode) => radiusScale(size) + 2)
          // forceCollide().radius((d: any) => d.size + 35)
        )
    );
  };

  const radiusScale = (value: NumberValue) => scaleSqrt().range(range.current).domain(domain.current)(value);

  const render = ({ id, name, size, color, x, y }: SimulationNode, handleClick: () => void) => {
    const cursor = size !== 1 ? "cursor-pointer" : "cursor-default";
    const hoverClass = size !== 1 ? ` hover:stroke-2 dark:hover:stroke-white` : "";
    const radius = radiusScale(size);
    const control: { [key: number]: string } = { [-1]: "🔙", [-2]: "🔍" };
    const texts = (control[id] || name).split(" ");
    const words = [...texts].sort((a, b) => b.length - a.length)[0].length;
    const fontSize = Math.round(radius / (!control[id] && words < 6 ? 6 : words) / 0.45);
    const transform = `translate(${width / 2 + (x || 0)},${height / 2 + (y || 0)})`;
    return (
      <g key={uuid()} transform={transform} onClick={handleClick} stroke={hex[color]["700"]} className={`${cursor} stroke-0 ${hoverClass}`}>
        <defs>
          <radialGradient id={`radial${id}`} cx="30%" cy="30%" r="70%" fx="30%" fy="30%">
            <stop offset="0%" style={{ stopColor: hex[color]["300"], stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: hex[color]["500"], stopOpacity: 1 }} />
          </radialGradient>
        </defs>
        <defs>
          <radialGradient id={`dark:radial${id}`} cx="30%" cy="30%" r="70%" fx="30%" fy="30%">
            <stop offset="0%" style={{ stopColor: hex[color]["300"], stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: hex[color]["500"], stopOpacity: 0.6 }} />
          </radialGradient>
        </defs>
        <circle className="block dark:hidden" r={radius} fill={`url(#radial${id})`} />
        <circle className="hidden dark:block" r={radius} fill={`url(#dark:radial${id})`} />
        <text
          filter="url(#inset-shadow)"
          alignmentBaseline="central"
          textAnchor="middle"
          fontSize={`${fontSize}px`}
          className={`${props.textShadow ? "text-shadow" : ""} stroke-0 stroke-transparent fill-orange-900 dark:fill-slate-200 font-bold`}>
          {texts.map((text: string, i: number) => (
            <tspan key={text} alignmentBaseline="central" x="0" dy={`${i ? fontSize * i : -((fontSize / 2) * (texts.length - 1))}px`}>
              {text}
            </tspan>
          ))}
        </text>
      </g>
    );
  };

  useEffect((): (() => void) => {
    const handleResize = () => {
      setWidth(window.innerWidth > 800 ? 800 : window.innerWidth);
      setHeight(window.innerHeight < 600 ? 600 : window.innerHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div aria-hidden="true" id="chart" className={`bg-transparent ${props.className || ""}`}>
      <svg className="w-screen h-screen max-w-3xl min-h-[600px]" id="bubbles">
        <filter id="inset-shadow">
          <feOffset dx={width / 600} dy={width / 600} />
          <feGaussianBlur stdDeviation={width / 600} result="offset-blur" />
          <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
          <feFlood floodColor="#0f172a" floodOpacity={0.8} result="color" />
          <feComposite operator="in" in="color" in2="inverse" result="shadow" />
          <feComposite operator="over" in="shadow" in2="SourceGraphic" />
        </filter>
        {renderData}
      </svg>
    </div>
  );
};

// class BubbleChartComponent extends React.PureComponent<IBubbleChartProps, IBubbleChartState> {
//   public forceData: Types.ForceData[];
//   public simulation: Simulation<SimulationNodeDatum, undefined> | undefined;

//   constructor(props: IBubbleChartProps) {
//     super(props);
//     this.state = { data: [], renderBubble: null };
//     this.forceData = this.setForceData(props);
//   }

//   componentDidMount() {
//     this.animateBubbles();
//   }

//   componentDidUpdate(prevProps: IBubbleChartProps, prevState: IBubbleChartState) {
//     if (JSON.stringify(prevProps.bubblesData) !== JSON.stringify(this.props.bubblesData)) {
//       this.forceData = this.setForceData(this.props);
//       this.animateBubbles();
//     }
//   }

//   setForceData = (props: IBubbleChartProps) => {
//     const d = [];
//     for (let i = 0; i < props.bubblesData.length; i++) {
//       d.push({ size: props.bubblesData[i].size });
//     }
//     return d;
//   };

//   animateBubbles = () => {
//     if (this.props.bubblesData.length > 0) {
//       this.simulatePositions(this.forceData);
//     }
//   };

//   simulatePositions = (data: Types.ForceData[]) => {
//     let count = 0;
//     this.simulation = d3
//       .forceSimulation()
//       .nodes(data as SimulationNodeDatum[])
//       .velocityDecay(0.7)
//       .force("x", d3.forceX().strength(0.01))
//       .force("y", d3.forceY().strength(0.01))
//       .force(
//         "collide",
//         d3.forceCollide((d: SimulationNodeDatum) => {
//           return this.radiusScale((d as Types.ForceData).size) + 1;
//         })
//       );

//     this.simulation.on("tick", () => {
//       if (count > 80) this.simulation?.tick(300);
//       else {
//         count++;
//         this.setState({ data, renderBubble: this.renderBubbles(data as []) });
//       }
//     });

//     this.simulation.on("end", () => {
//       console.log("ENDED");
//     });
//   };

//   radiusScale = (value: d3.NumberValue) => {
//     const fx = d3.scaleSqrt().range([1, 50]).domain([this.props.minValue, this.props.maxValue]);
//     return fx(value);
//   };

// renderBubbles = (data: []) => {
//   // console.log("renderBubbles", data);
//   return data.map((item: { v: number; x: number; y: number }, index) => {
//     const { props } = this;
//     const fontSize = this.radiusScale((item as unknown as Types.ForceData).size) / 4;
//     const content = props.bubblesData.length > index ? props.bubblesData[index].name : "";
//     const strokeColor = props.bubblesData.length > index ? this.props.backgroundColor : "darkgrey";
//     return (
//       <g style={{ cursor: "pointer" }} key={`g-${uuid()}`} transform={`translate(${props.width / 2 + item.x}, ${props.height / 2 + item.y})`}>
//         <circle
//           style={{ cursor: "pointer" }}
//           onClick={() => {
//             this.props.selectedCircle(content);
//           }}
//           id="circleSvg"
//           r={this.radiusScale((item as unknown as Types.ForceData).size)}
//           fill={props.bubblesData[index].fillColor}
//           stroke={strokeColor}
//           strokeWidth="2"
//         />
//         <text
//           onClick={() => {
//             this.props.selectedCircle(content);
//           }}
//           dy="6"
//           className="bubbleText"
//           fill={this.props.textFillColor}
//           textAnchor="middle"
//           fontSize={`${fontSize}px`}
//           fontWeight="normal">
//           {content}
//         </text>
//       </g>
//     );
//   });
// };

//   render() {
//     return (
//       <div>
//         <div aria-hidden="true" id="chart" style={{ background: this.props.backgroundColor }}>
//           <svg width={this.props.width} height={this.props.height}>
//             {/* {this.renderBubbles(this.state.data as [])} */}
//             {this.state.renderBubble}
//           </svg>
//         </div>
//       </div>
//     );
//   }
// }
export default BubbleChartComponent;
