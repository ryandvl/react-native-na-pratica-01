import * as recipes from "./recipes-service";
import * as ingredientes from "./ingredients-service";
import * as preparations from "./preparation-service";

export const services = {
  recipes,
  ingredientes,
  preparations,

  storage: {
    imagePath: `${process.env.EXPO_PUBLIC_SUPABASE_URL}/storage/v1/object/public/ingredients`,
  },
};
