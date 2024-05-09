
import { createChart, ColorType } from 'lightweight-charts';
import { useEffect, useRef } from 'react';
import { JSX } from 'react/jsx-runtime';

export const ChartComponent = (props: any) => {
    const {
        data,
        colors: {
            backgroundColor = 'transparent',
            lineColor = '#2962FF',
            textColor = 'white',
            areaTopColor = '#2962FF',
            areaBottomColor = 'rgba(41, 98, 255, 0.28)',
        } = {},
    } = props;

    const chartContainerRef = useRef<HTMLDivElement>(null);

    useEffect(
        () => {
            const handleResize = () => {
                if (chartContainerRef.current) {
                    chart.applyOptions({ width: (chartContainerRef.current as HTMLElement).clientWidth });
                }
            };

            const chart = createChart(chartContainerRef.current || '', {
                layout: {
                    background: { type: ColorType.Solid, color: backgroundColor },
                    textColor,
                },
                width: chartContainerRef.current ? (chartContainerRef.current as HTMLElement).clientWidth : 0,
                height: 300,
            });
            chart.timeScale().fitContent();

            const newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });
            newSeries.setData(data);

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);

                chart.remove();
            };
        },
        [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
    );


    return (
        <div
            ref={chartContainerRef}
            className="rounded-xl bg-gray-950/80 w-3/4 max-md:w-full "
        />
    );
};

const initialData = [
    { time: '2018-12-22', value: 32.51 },
    { time: '2018-12-23', value: 31.11 },
    { time: '2018-12-24', value: 27.02 },
    { time: '2018-12-25', value: 27.32 },
    { time: '2018-12-26', value: 25.17 },
    { time: '2018-12-27', value: 28.89 },
    { time: '2018-12-28', value: 25.46 },
    { time: '2018-12-29', value: 23.92 },
    { time: '2018-12-30', value: 22.68 },
    { time: '2018-12-31', value: 22.67 },
];

export default function GraficComponent(props: JSX.IntrinsicAttributes & { data: any; colors?: { backgroundColor?: "transparent" | undefined; lineColor?: "#2962FF" | undefined; textColor?: "white" | undefined; areaTopColor?: "#2962FF" | undefined; areaBottomColor?: "rgba(41, 98, 255, 0.28)" | undefined; } | undefined; }) {
    return (
        <ChartComponent {...props} data={initialData}></ChartComponent>
    );
}