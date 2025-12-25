import { supabase } from "./supabase";

export const uploadImage = async (file: File, folder: string) => {
  const fileName = `${Date.now()}-${file.name}`;

  const { error } = await supabase.storage
    .from("images")
    .upload(`${folder}/${fileName}`, file);

  if (error) throw error;

  const { data } = supabase.storage
    .from("images")
    .getPublicUrl(`${folder}/${fileName}`);

  return data.publicUrl;
};
