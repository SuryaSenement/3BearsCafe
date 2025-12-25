import { supabase } from "./supabase";
import type { MenuItem } from "../types";

export const getMenuItems = async () => {
  const { data, error } = await supabase
    .from("menu_items")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};

export const addMenuItem = async (item: MenuItem) => {
  const { error } = await supabase.from("menu_items").insert(item);
  if (error) throw error;
};

export const deleteMenuItem = async (id: string) => {
  const { error } = await supabase
    .from("menu_items")
    .delete()
    .eq("id", id);

  if (error) throw error;
};
