import styles from "./index.module.scss";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  TooltipProps,
} from "recharts";
import {
  ValueType,
  NameType,
} from "recharts/src/component/DefaultTooltipContent";

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

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active) {
    return (
      <div className={styles.tooltipBase}>
        <div className={styles.tooltipBase_content}>
          <p>Max Price Per Item:</p>
          <p>123</p>
          <p>Quantity:</p>
          <p>4546</p>
        </div>
      </div>
    );
  }
  return null;
};

const ChartV2 = () => {
  return (
    <div className={styles.main}>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={pricePoints}>
          <defs>
            <linearGradient id="linearGradient" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="rgba(182, 132, 246)"
                stopOpacity={0.5}
              />
              <stop
                offset="100%"
                stopColor="rgba(61, 193, 201)"
                stopOpacity={0.3}
              />
            </linearGradient>
          </defs>

          <Area
            dataKey="quantity"
            stroke="#linearGradient"
            fill="url(#linearGradient)"
            activeDot={{ r: 3, stroke: "#FFFFFF", fill: "#FFFFFF" }}
          />

          <XAxis
            dataKey="pricePerItem"
            axisLine={true}
            tickLine={false}
            label="Price Per Item"
          />

          <YAxis
            dataKey="quantity"
            axisLine={true}
            tickLine={false}
            tickCount={8}
            label="Quantity"
          />

          <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#FFFFFF" }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartV2;
