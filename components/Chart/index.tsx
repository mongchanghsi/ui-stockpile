import styles from "./index.module.scss";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartData,
  ScriptableContext,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

const underAreaGradientColor = (context: ScriptableContext<"line">) => {
  const ctx = context.chart.ctx;
  const gradient = ctx.createLinearGradient(0, 0, 0, 1000);
  gradient.addColorStop(0, "rgba(182, 132, 246, 0.5)");
  gradient.addColorStop(1, "rgba(61, 193, 201, 0.3)");
  return gradient;
};

const textGradientColor = (context: ScriptableContext<"line">) => {
  const ctx = context.chart.ctx;
  const gradient = ctx.createLinearGradient(0, 0, 30, 0);
  gradient.addColorStop(0, "#B684F6");
  gradient.addColorStop(1, "#3DC1C9");
  return gradient;
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const getOrCreateTooltip = (chart: any) => {
  let tooltipEl = chart.canvas.parentNode.querySelector("div");

  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.style.background =
      "linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.61) 51.87%, rgba(255, 255, 255, 0.17) 100%)";
    tooltipEl.style.borderRadius = "10px";
    tooltipEl.style.opacity = 1;
    tooltipEl.style.pointerEvents = "none";
    tooltipEl.style.position = "absolute";
    tooltipEl.style.transform = "translate(-50%, 0)";
    tooltipEl.style.transition = "all .1s ease";
    tooltipEl.style.width = "133px";
    tooltipEl.style.padding = "1px";
    tooltipEl.style.paddingTop = "2px";

    let tooltipBg = document.createElement("div");
    tooltipBg.style.background = "#000";
    tooltipBg.style.borderRadius = "10px";
    tooltipBg.style.position = "relative";
    tooltipBg.style.height = "100%";
    tooltipBg.style.padding = "2px";

    const content = document.createElement("div");
    content.id = "tooltip-content";
    content.style.margin = "15px";
    content.style.color = "#FFFFFF";

    tooltipBg.appendChild(content);
    tooltipEl.appendChild(tooltipBg);
    chart.canvas.parentNode.appendChild(tooltipEl);
  }

  return tooltipEl;
};

const customTooltipHandler = (context: any) => {
  const { chart, tooltip } = context;
  const tooltipEl = getOrCreateTooltip(chart);

  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = 0;
    return;
  }

  // Set Text
  if (tooltip.body) {
    const contentRoot = document.getElementById("tooltip-content")!!;
    // Remove old children
    while (contentRoot.firstChild) {
      contentRoot.firstChild.remove();
    }

    // tooltip.title[0] is the x-axis -> Price Per Item
    // tooltip.body[0].lines[0] is the y-axis -> Quantity
    const pricePerItemValue = tooltip.title[0] || "";
    const quantityValue = tooltip.body[0].lines[0] || "";

    const pricePerItemLabel = document.createElement("p");
    pricePerItemLabel.textContent = "Max Price Per Item:";
    pricePerItemLabel.style.fontFamily = "Montserrat";
    pricePerItemLabel.style.fontStyle = "normal";
    pricePerItemLabel.style.fontWeight = "400";
    pricePerItemLabel.style.fontSize = "10px";
    pricePerItemLabel.style.lineHeight = "12px";
    pricePerItemLabel.style.color = "rgba(255, 255, 255, 0.7)";

    const quantityLabel = document.createElement("p");
    quantityLabel.textContent = "Quantity:";
    quantityLabel.style.fontFamily = "Montserrat";
    quantityLabel.style.fontStyle = "normal";
    quantityLabel.style.fontWeight = "400";
    quantityLabel.style.fontSize = "10px";
    quantityLabel.style.lineHeight = "12px";
    quantityLabel.style.color = "rgba(255, 255, 255, 0.7)";
    quantityLabel.style.marginTop = "10px";

    const pricePerItemText = document.createElement("p");
    pricePerItemText.textContent = pricePerItemValue;
    pricePerItemText.style.fontFamily = "Montserrat";
    pricePerItemText.style.fontStyle = "normal";
    pricePerItemText.style.fontWeight = "700";
    pricePerItemText.style.fontSize = "12px";
    pricePerItemText.style.lineHeight = "12px";
    pricePerItemText.style.color = "#FFFFFF";
    pricePerItemText.style.marginTop = "4px";

    const quantityText = document.createElement("p");
    quantityText.textContent = quantityValue;
    quantityText.style.fontFamily = "Montserrat";
    quantityText.style.fontStyle = "normal";
    quantityText.style.fontWeight = "700";
    quantityText.style.fontSize = "12px";
    quantityText.style.lineHeight = "12px";
    quantityText.style.color = "#FFFFFF";
    quantityText.style.marginTop = "4px";

    contentRoot.appendChild(pricePerItemLabel);
    contentRoot.appendChild(pricePerItemText);
    contentRoot.appendChild(quantityLabel);
    contentRoot.appendChild(quantityText);
  }

  const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

  tooltipEl.style.opacity = 1;
  tooltipEl.style.left = positionX + tooltip.caretX + 80 + "px";
  tooltipEl.style.top = positionY + tooltip.caretY - 50 + "px";
  tooltipEl.style.font = tooltip.options.bodyFont.string;
};

const linePlugin = {
  id: "verticalLiner",
  afterInit: (chart: any, args: any, opts: any) => {
    chart.verticalLiner = {};
  },
  afterEvent: (chart: any, args: any, options: any) => {
    const { inChartArea } = args;
    chart.verticalLiner = { draw: inChartArea };
  },
  beforeTooltipDraw: (chart: any, args: any, options: any) => {
    const { draw } = chart.verticalLiner;
    if (!draw) return;

    const { ctx } = chart;
    const { top, bottom } = chart.chartArea;
    const { tooltip } = args;
    const x = tooltip?.caretX;
    if (!x) return;

    ctx.save();

    ctx.beginPath();
    ctx.moveTo(x, top);
    ctx.lineTo(x, bottom);
    ctx.strokeStyle = "#FFFFFF";
    ctx.stroke();

    ctx.restore();
  },
};

export const options: any = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      enabled: false,
      position: "nearest",
      external: customTooltipHandler,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      border: {
        display: true,
        color: "#FFFFFF",
      },
      ticks: {
        display: true,
        color: "#FFFFFF",
      },
      beginAtZero: true,
      title: {
        display: true,
        align: "center",
        text: "Price Per Item (GOLD)",
        // TODO: Fix this LinearGradient
        color: (context: ScriptableContext<"line">) =>
          textGradientColor(context),
        font: {
          size: 12,
        },
      },
    },
    y: {
      grid: {
        display: false,
      },
      border: {
        display: true,
        color: "#FFFFFF",
      },
      ticks: {
        display: true,
        color: "#FFFFFF",
      },
      beginAtZero: true,
      title: {
        display: true,
        align: "center",
        text: "Quantity",
        // TODO: Fix this LinearGradient
        color: (context: ScriptableContext<"line">) =>
          textGradientColor(context),
        font: {
          size: 12,
        },
      },
    },
  },
};

const pricePoints = [
  {
    quantity: 1,
    pricePerItem: 0.1,
  },
  {
    quantity: 15,
    pricePerItem: 0.2,
  },
  {
    quantity: 36,
    pricePerItem: 0.4,
  },
  {
    quantity: 90,
    pricePerItem: 0.9,
  },
  {
    quantity: 291,
    pricePerItem: 1.1,
  },
  {
    quantity: 475,
    pricePerItem: 1.6,
  },
  {
    quantity: 782,
    pricePerItem: 2.1,
  },
  {
    quantity: 1029,
    pricePerItem: 2.5,
  },
];

const pricePerItemLabels = pricePoints.map((point) =>
  point.pricePerItem.toString()
);
const quantityLabels = pricePoints.map((point) => point.quantity);

export const data: ChartData<"line", number[]> = {
  labels: pricePerItemLabels,
  datasets: [
    {
      fill: true,
      data: quantityLabels,
      backgroundColor: (context: ScriptableContext<"line">) =>
        underAreaGradientColor(context),
      borderWidth: 0,
      pointBorderColor: "rgba(0, 0, 0, 0)",
      pointBackgroundColor: "rgba(0, 0, 0, 0)",
      pointHoverBackgroundColor: "#FFFFFF",
      pointHoverBorderColor: "#FFFFFF",
    },
  ],
};

const Chart = () => {
  return (
    <div className={styles.main}>
      <Line options={options} data={data} plugins={[linePlugin]} />
    </div>
  );
};

export default Chart;
