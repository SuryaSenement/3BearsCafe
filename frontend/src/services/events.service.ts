import { supabase } from "./supabase";
import type { EventItem } from "../types";

export const getEvents = async (type?: "event" | "workshop") => {
  let query = supabase.from("events").select("*");

  if (type) {
    query = query.eq("type", type);
  }

  const { data, error } = await query.order("created_at", {
    ascending: false,
  });

  if (error) throw error;
  return data;
};

export const addEvent = async (item: EventItem) => {
  const { error } = await supabase.from("events").insert(item);
  if (error) throw error;
};

export const deleteEvent = async (id: string) => {
  const { error } = await supabase
    .from("events")
    .delete()
    .eq("id", id);

  if (error) throw error;
};
