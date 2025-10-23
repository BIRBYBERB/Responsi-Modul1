import { supabase } from "../config/supabaseClient.js";

export const sepatuModel = {
  async getAll() {
    const { data, error } = await supabase
      .from("sepatu")
      .select(
        "id, sku, name, status, tanggal_masuk, tanggal_selesai, category_id, supplier_id"
      );
    if (error) throw error;
    return data;
  },

  async getById(id) {
    const { data, error } = await supabase
      .from("sepatu")
      .select(
        `
        id, sku, name, status, tanggal_masuk, tanggal_selesai,
        categories ( id, name ),
        suppliers ( id, name, email, phone ),
      `
      )
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(payload) {
    const { data, error } = await supabase
      .from("sepatu")
      .insert([payload])
      .select();
    if (error) throw error;
    return data[0];
  },

  async update(id, payload) {
    const { data, error } = await supabase
      .from("sepatu")
      .update(payload)
      .eq("id", id)
      .select();
    if (error) throw error;
    return data[0];
  },

  async remove(id) {
    const { error } = await supabase.from("sepatu").delete().eq("id", id);
    if (error) throw error;
    return { success: true };
  },
};
