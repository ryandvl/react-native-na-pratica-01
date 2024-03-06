import { useState } from "react";
import { ScrollView } from "react-native";

import { styles } from "./styles";

import { Ingredient } from "../ingredient";

export function Ingredients() {
  const [selected, setSelected] = useState<string[]>([]);

  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value));
    }

    setSelected((state) => [...state, value]);
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {Array.from({ length: 100 }).map((_, item) => (
        <Ingredient
          key={item}
          name="Tomate"
          image=""
          selected={selected.includes(item.toString())}
          onPress={() => handleToggleSelected(item.toString())}
        />
      ))}
    </ScrollView>
  );
}
