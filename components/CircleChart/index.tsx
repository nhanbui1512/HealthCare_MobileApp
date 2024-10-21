import { Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

type IProps = {
  percent?: number;
};

function classifyOxygenLevel(oxygenLevel: number): string {
  if (oxygenLevel >= 96 && oxygenLevel <= 100) {
    return "Excellent";
  } else if (oxygenLevel >= 90 && oxygenLevel < 96) {
    return "Good";
  } else if (oxygenLevel >= 80 && oxygenLevel < 90) {
    return "Okay";
  } else {
    return "Poor";
  }
}

const CircleChart = ({ percent = 0 }: IProps) => {
  const classifyData = classifyOxygenLevel(percent);
  const pieData = [
    {
      value: percent,
      color: "#009FFF",
      gradientCenterColor: "#006DFF",
      focused: true,
    },
    { value: 100 - percent, color: "#93FCF8", gradientCenterColor: "#3BE9DE" },
  ];

  const renderDot = (color: string) => {
    return (
      <View
        style={{
          height: 10,
          width: 10,
          borderRadius: 5,
          backgroundColor: color,
          marginRight: 10,
        }}
      />
    );
  };

  const renderLegendComponent = () => {
    return (
      <>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: 120,
              marginRight: 20,
            }}
          >
            {renderDot("#006DFF")}
            <Text style={{ color: "white" }}>Excellent: 96%</Text>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", width: 120 }}
          >
            {renderDot("#006DFF")}
            <Text style={{ color: "white" }}>Good: 90%</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: 120,
              marginRight: 20,
            }}
          >
            {renderDot("#006DFF")}
            <Text style={{ color: "white" }}>Okay: 80% - 90%</Text>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", width: 120 }}
          >
            {renderDot("#006DFF")}
            <Text style={{ color: "white" }}>Poor: under 80%</Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <View
      style={{
        paddingVertical: 100,
        backgroundColor: "#34448B",
        flex: 1,
        borderRadius: 20,
      }}
    >
      <View
        style={{
          margin: 20,
          padding: 16,
          borderRadius: 20,
          backgroundColor: "#232B5D",
        }}
      >
        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
          Performance
        </Text>
        <View style={{ padding: 20, alignItems: "center" }}>
          <PieChart
            data={pieData}
            donut
            showGradient
            sectionAutoFocus
            radius={90}
            innerRadius={60}
            innerCircleColor={"#232B5D"}
            centerLabelComponent={() => {
              return (
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text
                    style={{ fontSize: 22, color: "white", fontWeight: "bold" }}
                  >
                    {percent}%
                  </Text>
                  <Text style={{ fontSize: 14, color: "white" }}>
                    {classifyData}
                  </Text>
                </View>
              );
            }}
          />
        </View>
        {renderLegendComponent()}
      </View>
    </View>
  );
};
export default CircleChart;
