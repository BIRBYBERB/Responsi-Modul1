import { supabase } from "../config/supabaseClient.js";

export const CategoryModel = {
  async create(brand) {
    const { data, error } = await supabase
      .from("categories")
      .insert([{ brand }])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async getAll() {
    const { data, error } = await supabase.from("categories").select("*");
    if (error) throw error;
    return data;
  },

  async getById(id) {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    return data;
  },

  async update(id, brand) {
    const { data, error } = await supabase
      .from("categories")
      .update({ brand })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async remove(id) {
    const { error } = await supabase.from("categories").delete().eq("id", id);
    if (error) throw error;
    return { message: "Category deleted" };
  },
};
