import { View, Text } from "react-native";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { styles } from "./styles";

import { theme } from "@/theme";
import { Button } from "@/components/button";

type Props = {
  quantity: number;
  onClear: () => void;
  onSearch: () => void;
};

export function Selected({ quantity, onClear, onSearch }: Props) {
  return (
    <Animated.View
      entering={SlideInDown.duration(500)}
      exiting={SlideOutDown.duration(500)}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.label}>
          {quantity > 0 && quantity < 10 ? "0" + quantity : quantity}{" "}
          ingredientes selecionados
        </Text>

        <MaterialIcons
          name="close"
          size={24}
          color={theme.colors.gray_400}
          onPress={onClear}
        />
      </View>

      <Button title="Encontrar" onPress={onSearch} />
    </Animated.View>
  );
}
